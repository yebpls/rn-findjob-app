import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import {ScrollView} from 'react-native-gesture-handler';

interface BodyProps {
  content: {
    Qualifications?: string[];
    Responsibilities?: string[];
    Benefits?: string[];
  };
}

enum tabSelected {
  DES = 'Description',
  COM = 'Company',
  REVIEW = 'Reviews',
}

export default function Body({content}: BodyProps) {
  const [selected, setSelected] = useState<string>(tabSelected.DES);

  const onSelected = (value: string) => {
    setSelected(value);
  };

  const renderItem = ({item}: {item: string}) => (
    <Text style={style.content}>• {item}.</Text>
  );

  const renderList = (title: string, data?: string[]) => {
    if (data && data.length > 0) {
      return (
        <>
          <Text style={style.h1}>{title}:</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      );
    } else {
      return <Text style={style.noInfo}>No information available</Text>;
    }
  };

  const renderContent = () => {
    switch (selected) {
      case 'Description':
        return renderList('Qualifications', content.Qualifications);
      case 'Company':
        return renderList('Responsibilities', content.Responsibilities);
      case 'Reviews':
        return renderList('Benefits', content.Benefits);
      default:
        return null;
    }
  };

  const renderTabButton = (tab: tabSelected, label: string) => (
    <TouchableOpacity
      style={[style.button_tab, selected === tab && style.selected]}
      onPress={() => onSelected(tab)}>
      <Text style={[style.button_text, selected === tab && style.selected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <View style={style.button_tab_container}>
        {renderTabButton(tabSelected.DES, 'Description')}
        {renderTabButton(tabSelected.COM, 'Company')}
        {renderTabButton(tabSelected.REVIEW, 'Reviews')}
      </View>

      <View style={style.content_container}>{renderContent()}</View>
    </View>
  );
}
