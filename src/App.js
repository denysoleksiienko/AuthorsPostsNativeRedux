import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux';

import { AuthorsScreen } from './screens/AuthorsScreen';
import { PostsScreen } from './screens/PostsScreen';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authors" headerMode="none">
          <Stack.Screen name="Authors" component={AuthorsScreen} />
          <Stack.Screen name="Posts" component={PostsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
