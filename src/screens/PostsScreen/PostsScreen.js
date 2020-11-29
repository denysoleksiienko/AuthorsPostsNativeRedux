import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';

import { Posts } from '../../components/Posts';
import { Search } from '../../components/Search';

import { styles } from './PostsScreen.module';

export const PostsScreen = ({ route, posts }) => {
  const { id, name } = route.params;
  const [searchPosts, setSearchPosts] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  const handleSearchInput = (text) => {
    const searchFilter = posts.filter(({ title, body }) => {
      if (
        title.toLowerCase().includes(text) ||
        body.toLowerCase().includes(text)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setSearchPosts(searchFilter);
    setInputText(text);
  };

  const data = posts.filter((post) => post.userId === id);
  const renderItem = ({ item }) => <Posts post={item} />;
  const renderData = inputText === '' ? data : searchPosts;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.autorName}>{name}'s Posts</Text>
      <Search onChangeText={handleSearchInput} />

      <FlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};
