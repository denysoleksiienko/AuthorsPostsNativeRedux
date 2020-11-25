import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './Posts.module';

export const Posts = ({ post }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    </TouchableOpacity>
  );
};
