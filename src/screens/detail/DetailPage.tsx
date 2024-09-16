import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import Toolbar from '../../components/detail/toolbar/Toolbar';
import FooterAction from '../../components/detail/footer_action/FooterAction';
import Body from '../../components/detail/body/Body';
import {useRoute} from '@react-navigation/native';
import {PropRouteDetail} from '../../type/navigation.type';

export default function DetailPage() {
  const item = useRoute<PropRouteDetail>().params.item;
  console.log();

  const jobHighlightsEmpty = {
    Qualifications: [],
    Responsibilities: [],
    Benefits: [],
  };

  if (!item) {
    return (
      <View style={style.container}>
        <Text>No job details available.</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Toolbar
        employer_logo={item.employer_logo || ''}
        employer_name={item.employer_name || 'Unknown Employer'}
        job_city={item.job_city || 'Unknown City'}
        job_country={item.job_country || 'Unknown Country'}
        job_title={item.job_title || 'Unknown Title'}
      />
      <Body content={item.job_highlights || jobHighlightsEmpty} />
      <FooterAction />
    </View>
  );
}
