import React from 'react';
import { View, TextInput, Image } from 'react-native';

import { styles } from './Search[styles]';

export const Search = ({ onChangeText }) => {
  return (
    <View style={styles.search}>
      <Image style={styles.icon} source={require('../../assets/search.png')} />
      <TextInput
        placeholder="Search"
        style={styles.text}
        onChangeText={onChangeText}
      />
    </View>
  );
};
