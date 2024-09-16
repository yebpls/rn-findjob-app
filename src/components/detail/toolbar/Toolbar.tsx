import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
import backButton from '../../../assets/icons/back_button.png';
import shareButton from '../../../assets/icons/share_button.png';
import locationIcon from '../../../assets/icons/location.png';
import googleLogo from '../../../assets/images/google.png';
import {useNavigation} from '@react-navigation/native';
import {PropStackDetail} from '../../../type/navigation.type';

interface ToolbarProps {
  job_country: string;
  employer_logo: string | null;
  job_title: string;
  employer_name: string;
  job_city: string;
}

export default function Toolbar(props: ToolbarProps) {
  const {employer_logo, job_city, job_country, employer_name, job_title} =
    props;
  const navigation = useNavigation<PropStackDetail>();

  const onBackPress = () => {
    navigation.pop();
  };

  return (
    <View style={style.container}>
      <View style={style.action_container}>
        <TouchableOpacity onPress={onBackPress} style={style.button_wrapper}>
          <Image style={style.button} source={backButton} />
        </TouchableOpacity>
        <TouchableOpacity style={style.button_wrapper}>
          <Image style={style.button} source={shareButton} />
        </TouchableOpacity>
      </View>
      <View style={style.title_container}>
        <View style={style.logo_wrapper}>
          <Image
            source={employer_logo ? {uri: employer_logo} : googleLogo}
            style={style.logo_company}
          />
        </View>
        <Text style={style.title}>{job_title}</Text>
        <View style={style.location_wrapper}>
          <Text style={style.company}>{employer_name} /</Text>
          <Image style={style.location_icon} source={locationIcon} />
          <Text style={style.location}>
            {' '}
            {job_city}, {job_country}
          </Text>
        </View>
      </View>
    </View>
  );
}
