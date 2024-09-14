import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import ToolBar from '../../components/home/toolbar/ToolBar';
import Search from '../../components/home/search/Search';

export default function HomePage() {
  return (
    <View style={style.container}>
      <ToolBar />
      <Search />
    </View>
  );
}
