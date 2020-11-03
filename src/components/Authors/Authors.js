import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './Authors[styles]';

export const Authors = ({ user, navigation, posts }) => {
  const handleMoveToPosts = () => {
    navigation.navigate('Posts', {
      id: user.id,
      name: user.name,
    });
  };

  const postsLength = posts.filter((post) => post.userId === user.id);

  return (
    <TouchableOpacity style={styles.container} onPress={handleMoveToPosts}>
      <Image source={require('../../assets/avatar.png')} />
      <View style={styles.infoUserView}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <Text style={styles.postsLength}>{postsLength.length} posts</Text>
      <Image source={require('../../assets/vector.png')} />
    </TouchableOpacity>
  );
};
