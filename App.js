/**
 * Nookeroo app
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './assets/colors';
import Fonts from './assets/fonts';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomStatusBar from './pages/components/statusBar';
//import HostingIsland from './pages/listings/hosting-island';
//import Marketplace from './pages/marketplace/marketplace';

// Villager Stack
import Villagers from './pages/guide/villagers/villagers';
import VillagerDetail from './pages/guide/villagers/villagerDetail';

// Museum Stack
import Museum from './pages/guide/museum/museum';
import Bugs from './pages/guide/museum/bugs/bugs';
import BugDetail from './pages/guide/museum/bugs/bugDetail';
import Fishes from './pages/guide/museum/fishes/fishes';
import Fossils from './pages/guide/museum/fossils/fossils';
import Arts from './pages/guide/museum/arts/arts';
import ArtDetail from './pages/guide/museum/arts/artDetail';

import {
  StyleSheet, Image,
} from 'react-native';

const Stack = createStackNavigator();

const VillagerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Villager"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerBackTitleStyle: { fontFamily: Fonts.regular }
      })}>
      <Stack.Screen name="Villagers" component={Villagers} />
      <Stack.Screen name="VillagerDetail" component={VillagerDetail} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  );
}

const MuseumStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Museum"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerBackTitleStyle: { fontFamily: Fonts.regular }
      })}>
      <Stack.Screen name="Museum" component={Museum} />
      <Stack.Screen name="Bugs" component={Bugs} />
      <Stack.Screen name="Fishes" component={Fishes} />
      <Stack.Screen name="Fossils" component={Fossils} />
      <Stack.Screen name="Arts" component={Arts} />

      <Stack.Screen name="ArtDetail" component={ArtDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="BugDetail" component={BugDetail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CustomStatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Home') {
              return <Image
                source={require('./assets/icons/menu/home.png')}
                style={styles.image} />
            } else if (route.name === 'Villagers') {
              return <Image
                source={require('./assets/icons/menu/villagers.png')}
                style={styles.image} />
            } else if (route.name === 'Museum') {
              return <Image
                source={require('./assets/icons/menu/museum.png')}
                style={styles.image} />
            } else if (route.name === 'Items') {
              return <Image
                source={require('./assets/icons/menu/items.png')}
                style={styles.image} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.white,
          inactiveTintColor: Colors.white,
          activeBackgroundColor: Colors.secondary,
          inactiveBackgroundColor: Colors.primary,
          style: {
            backgroundColor: Colors.primary,
          },
          labelStyle: {
            fontFamily: Fonts.medium,
            fontSize: 13,
          }
        }}
      >
        <Tab.Screen name="Home" component={VillagerStack} />
        <Tab.Screen name="Villagers" component={VillagerStack} />
        <Tab.Screen name="Museum" component={MuseumStack} />
        <Tab.Screen name="Items" component={VillagerStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    color: Colors.white,
  },
  image: {
    width: 30,
    height: 30,
  },
});
