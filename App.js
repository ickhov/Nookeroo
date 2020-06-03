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
import CustomStatusBar from './pages/components/statusBar';

// Home Stack
import Home from './pages/home';

// Villager Stack
import Villagers from './pages/villagers/villagers';
import VillagerDetail from './pages/villagers/villagerDetail';

// Museum Stack
import Museum from './pages/museum/museum';
import BugDetail from './pages/museum/bugs/bugDetail';
import FishDetail from './pages/museum/fishes/fishDetail';
import FossilDetail from './pages/museum/fossils/fossilDetail';
import ArtDetail from './pages/museum/arts/artDetail';

// Collections Stack
import Songs from './pages/songs/songs';
import SongDetail from './pages/songs/songDetail';

// More Stack
import More from './pages/more';

// Clothing Stack
import Accessories from './pages/clothing/accessories';
import Bags from './pages/clothing/bags';
import Bottoms from './pages/clothing/bottoms';
import Dresses from './pages/clothing/dresses';
import Hats from './pages/clothing/hats';
import Shoes from './pages/clothing/shoes';
import Socks from './pages/clothing/socks';
import Tops from './pages/clothing/tops';
import Umbrellas from './pages/clothing/umbrellas';

// Furniture Stack
import Furnitures from './pages/furnitures/furnitures';
import FurnitureDetail from './pages/furnitures/detailView';

import {
  StyleSheet, Image,
} from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerBackTitleStyle: { fontFamily: Fonts.regular }
      })}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const VillagerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Villagers"
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

      <Stack.Screen name="ArtDetail" component={ArtDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="BugDetail" component={BugDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="FishDetail" component={FishDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="FossilDetail" component={FossilDetail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

const SongStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Songs"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerBackTitleStyle: { fontFamily: Fonts.regular }
      })}>
      <Stack.Screen name="Songs" component={Songs} />
      <Stack.Screen name="SongDetail" component={SongDetail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

const FurnitureStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Furnitures"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerBackTitleStyle: { fontFamily: Fonts.regular }
      })}>
      <Stack.Screen name="Furnitures" component={Furnitures} />

      <Stack.Screen name="FurnitureDetail" component={FurnitureDetail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

const MoreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerBackTitleStyle: { fontFamily: Fonts.regular }
      })}>
      <Stack.Screen name="More" component={More} />

      <Stack.Screen name="Accessories" component={Accessories} />
      <Stack.Screen name="Bags" component={Bags} />
      <Stack.Screen name="Bottoms" component={Bottoms} />
      <Stack.Screen name="Dresses" component={Dresses} />
      <Stack.Screen name="Hats" component={Hats} />
      <Stack.Screen name="Shoes" component={Shoes} />
      <Stack.Screen name="Socks" component={Socks} />
      <Stack.Screen name="Tops" component={Tops} />
      <Stack.Screen name="Umbrellas" component={Umbrellas} />

      <Stack.Screen name="FurnitureDetail" component={FurnitureDetail} options={{ title: 'Details' }} />
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
          tabBarIcon: () => {
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
            } else if (route.name === 'Songs') {
              return <Image
                source={require('./assets/icons/menu/songs.png')}
                style={styles.image} />
            } else if (route.name === 'More') {
              return <Image
                source={require('./assets/icons/menu/furnitures.png')}
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
            color: Colors.white,
            fontFamily: Fonts.medium,
            fontSize: 13,
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Villagers" component={VillagerStack} />
        <Tab.Screen name="Museum" component={MuseumStack} />
        <Tab.Screen name="Songs" component={SongStack} />
        <Tab.Screen name="More" component={MoreStack} />
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
