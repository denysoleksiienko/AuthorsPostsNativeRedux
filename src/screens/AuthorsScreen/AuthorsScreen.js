import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { Authors } from '../../components/Authors';
import { Search } from '../../components/Search';

import { styles } from './AuthorsScreen[styles]';

export const AuthorsScreen = ({
  navigation,
  authors,
  posts,
  isLoading,
  initialUsersPage,
  initialPostsPage,
}) => {
  const [searchAuthors, setSearchAuthors] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  React.useEffect(() => {
    initialUsersPage();
  }, []);

  React.useEffect(() => {
    initialPostsPage();
  }, []);

  const handleSearchInput = (text) => {
    text = text.toLowerCase();
    const searchFilter = authors.filter(({ name, email }) => {
      if (
        name.toLowerCase().includes(text) ||
        email.toLowerCase().includes(text)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setSearchAuthors(searchFilter);
    setInputText(text);
  };

  const renderItem = ({ item }) => (
    <Authors user={item} navigation={navigation} posts={posts} />
  );
  const renderData = inputText === '' ? authors : searchAuthors;

  return isLoading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.authors}>Authors</Text>
      <Search onChangeText={handleSearchInput} />

      <FlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};
