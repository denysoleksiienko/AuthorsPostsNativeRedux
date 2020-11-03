import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './Header[styles]';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/checkbox-blank.png')} />
      <Image source={require('../../assets/checkbox-blank-circle.png')} />
      <Image source={require('../../assets/triangle.png')} />
    </View>
  );
};
