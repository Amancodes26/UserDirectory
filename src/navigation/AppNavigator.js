import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
