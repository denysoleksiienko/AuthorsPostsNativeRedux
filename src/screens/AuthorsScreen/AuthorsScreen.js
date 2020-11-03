import React from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';

import { Authors } from '../../components/Authors';
import { Search } from '../../components/Search';

import { styles } from './AuthorsScreen[styles]';

export const AuthorsScreen = ({
  navigation,
  authors,

  initialUsersPage,
}) => {
  const [searchAuthors, setSearchAuthors] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  React.useEffect(() => {
    initialUsersPage();
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
    <Authors user={item} navigation={navigation} />
  );
  const renderData = inputText === '' ? authors : searchAuthors;

  return (
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
