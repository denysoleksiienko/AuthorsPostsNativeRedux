import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux';

import { Header } from './src/components/Header';
import { AuthorsScreen } from './src/screens/AuthorsScreen';
import { PostsScreen } from './src/screens/PostsScreen';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authors" headerMode="none">
          <Stack.Screen name="Authors" component={AuthorsScreen} />
          <Stack.Screen name="Posts" component={PostsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
