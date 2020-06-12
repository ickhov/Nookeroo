/**
 * Nookeroo app
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Colors from './assets/colors';
import Fonts from './assets/fonts';
import CustomStatusBar from './pages/components/statusBar';
import Main from './pages/main';
import LoadingScreen from './pages/loadingScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoadingScreen" headerMode='none'>
      <Stack.Screen 
        name="LoadingScreen" 
        component={LoadingScreen} 
        initialParams={{ 
          nextScreen: "Main"
        }} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CustomStatusBar />
      <AppStack />
    </NavigationContainer>
  );
};
