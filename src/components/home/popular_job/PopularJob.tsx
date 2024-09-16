import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {style} from './style';
import iconAvatar from '../../../assets/images/avatar.png';
import {FlatList} from 'react-native-gesture-handler';
// import {JobType} from '../../../type/job.type';
import {fetchPopularJob, ParamsJob} from '../../../api/rapidApi';
import {useNavigation} from '@react-navigation/native';
import {PropStackDetail} from '../../../type/navigation.type';
import {NAME_NAVIGATION} from '../../../common/enum';
import {JobInterface} from '../../../type/job.type';

const JobItem = React.memo(
  ({
    item,
    onPress,
  }: {
    item: JobInterface;
    onPress: (item: JobInterface) => void;
  }) => (
    <TouchableOpacity
      onPress={() => onPress(item)}
      key={item.job_id}
      style={style.jobItem}>
      <View style={style.jobImageContainer}>
        <Image
          style={style.jobImage}
          source={item.employer_logo ? {uri: item.employer_logo} : iconAvatar}
        />
      </View>
      <Text style={style.companyName}>{item.employer_name}</Text>
      <Text style={style.jobName}>{item.job_title}</Text>
      <Text style={style.country}>{item.job_country}</Text>
    </TouchableOpacity>
  ),
);

const params: ParamsJob = {
  query: 'Node.js developer in New-York,USA',
  page: '1',
  num_pages: '1',
  date_posted: 'all',
};

export default function PopularJob() {
  const [jobList, setJoblist] = useState<JobInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<PropStackDetail>();
  const onPressItem = (item: JobInterface) => {
    navigation.push(NAME_NAVIGATION.DETAIL, {item});
  };

  const renderItem = useCallback(
    ({item}: {item: JobInterface}) => (
      <JobItem onPress={onPressItem} item={item} />
    ),
    [],
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await fetchPopularJob(params);
        setJoblist(data || []);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={style.container}>
        <Text style={style.errorText}>{error}</Text>
      </View>
    );
  }
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Popular Jobs</Text>
        <Text>Show All</Text>
      </View>
      <View style={style.wrapper}>
        <FlatList
          horizontal={true}
          data={jobList}
          renderItem={renderItem}
          keyExtractor={item => item.job_id}
        />
      </View>
    </View>
  );
}
