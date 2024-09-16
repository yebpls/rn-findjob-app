import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import favoriteIcon from '../../../assets/icons/favorite.png';
import {style} from './style';

export default function FooterAction() {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.favorite_wrapper}>
        <Image source={favoriteIcon} style={style.favorite} />
      </TouchableOpacity>
      <TouchableOpacity style={style.apply_button}>
        <Text style={style.apply_text}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
}
