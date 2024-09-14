import {View, Text, Image} from 'react-native';
import React from 'react';
import menuIcon from '../../../assets/icons/menu.png';
import avatar from '../../../assets/images/avatar.png';
import {style} from './style';

export default function ToolBar() {
  return (
    <View style={style.container}>
      <View style={style.toolbar}>
        <Image style={style.icon} source={menuIcon} />
        <View>
          <Image style={style.avatar} source={avatar} />
        </View>
      </View>
      <Text style={style.subTitle}>Hello Adrian</Text>
      <Text style={style.title}>Find your perfect job</Text>
    </View>
  );
}
