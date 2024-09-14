import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import searchIcon from '../../../assets/icons/search.png';
import {style} from './style';

const initFilterContent = [
  {title: 'Full-Time', isCheck: true},
  {title: 'Part-Time', isCheck: false},
  {title: 'Contractor', isCheck: false},
];

const renderFilter = () => {
  const [filterContent, setFilterContent] = useState(initFilterContent);

  const handlePressCheck = (index: number) => {
    const newFilterContent = filterContent.map((item, i) => ({
      ...item,
      isCheck: i === index,
    }));

    setFilterContent(newFilterContent);
  };

  return filterContent.map((item: any, index: number) => {
    return (
      <TouchableOpacity
        onPress={() => handlePressCheck(index)}
        key={index}
        style={[style.btnFilter, item.isCheck ? style.active : style.inactive]}>
        <Text style={item.isCheck ? style.active : style.inactive}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  });
};

export default function Search() {
  return (
    <View style={style.container}>
      <View style={style.searchContainer}>
        <TextInput
          placeholder="What are you looking for?"
          style={style.searchInput}
        />
        <TouchableOpacity style={style.searchButton}>
          <Image style={style.searchIcon} source={searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={style.filterContainer}>{renderFilter()}</View>
    </View>
  );
}
