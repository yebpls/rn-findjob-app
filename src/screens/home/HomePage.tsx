import React, {Fragment} from 'react';
import {style} from './style';
import ToolBar from '../../components/home/toolbar/ToolBar';
import Search from '../../components/home/search/Search';
import PopularJob from '../../components/home/popular_job/PopularJob';
import NearbyJob from '../../components/home/nearby_job/NearbyJob';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';

const sections = [
  {key: 'toolbar', component: <ToolBar />},
  {key: 'search', component: <Search />},
  {key: 'popularJob', component: <PopularJob />},
  {key: 'nearbyJob', component: <NearbyJob />},
];

export default function HomePage() {
  return (
    <FlatList
      data={sections}
      renderItem={({item}) => <Fragment>{item.component}</Fragment>}
      keyExtractor={item => item.key}
      contentContainerStyle={style.container}
    />
  );
}
