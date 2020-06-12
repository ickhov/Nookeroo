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
import Colors from '../assets/colors';
import Fonts from '../assets/fonts';
import ClothingDetail from './clothing/clothingDetail';
// Clothing Stack
import ClothingList from './clothing/clothingList';
import CONSTANTS from './constants';
import MainFurnitureDetail from './furniture/mainFurnitureDetail';
// Furniture Stack
import MainFurnitureList from './furniture/mainFurnitureList';
import OtherFurnitureDetail from './furniture/otherFurnitureDetail';
import OtherFurnitureList from './furniture/otherFurnitureList';
// More Stack
import More from './more';
import ArtDetail from './museum/arts/artDetail';
import BugDetail from './museum/bugs/bugDetail';
import FishDetail from './museum/fishes/fishDetail';
import FossilDetail from './museum/fossils/fossilDetail';
// Museum Stack
import Museum from './museum/museum';
import RecipeDetail from './recipes/recipeDetail';
// Recipe Stack
import RecipeList from './recipes/recipeList';
import SongDetail from './songs/songDetail';
// Collections Stack
import Songs from './songs/songs';
import VillagerDetail from './villagers/villagerDetail';
// Villager Stack
import Villagers from './villagers/villagers';

const Stack = createStackNavigator();

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

const clothingDetail = 'ClothingDetail';
const mainFurnitureDetail = 'MainFurnitureDetail';
const otherFurnitureDetail = 'OtherFurnitureDetail';
const recipeDetail = 'RecipeDetail';

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

      {/* CLOTHING */}
      <Stack.Screen 
        name="Accessories" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.accessories, 
          nextScreen: clothingDetail
        }} />
      <Stack.Screen 
        name="Bags" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.bag, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Bottoms" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.bottoms, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Dresses" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.dress, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Hats" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.hat, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Shoes" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.shoes, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Socks" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.socks, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Tops" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.tops, 
          nextScreen: clothingDetail 
        }} />
      <Stack.Screen 
        name="Umbrellas" 
        component={ClothingList} 
        initialParams={{ 
          constants: CONSTANTS.clothing.umbrella, 
          nextScreen: clothingDetail 
        }} />

      {/* FURNITURE */}
      <Stack.Screen 
        name="Housewares" 
        component={MainFurnitureList} 
        initialParams={{ 
          constants: CONSTANTS.furniture.houseware, 
          nextScreen: mainFurnitureDetail
        }} />

      <Stack.Screen 
        name="Wall-mounted" 
        component={MainFurnitureList} 
        initialParams={{ 
          constants: CONSTANTS.furniture.wallmounted, 
          nextScreen: mainFurnitureDetail
        }} />

      <Stack.Screen 
        name="Miscellaneous" 
        component={MainFurnitureList} 
        initialParams={{ 
          constants: CONSTANTS.furniture.misc, 
          nextScreen: mainFurnitureDetail
        }} />

      <Stack.Screen 
        name="Rugs" 
        component={OtherFurnitureList} 
        initialParams={{ 
          constants: CONSTANTS.furniture.rug, 
          nextScreen: otherFurnitureDetail
        }} />

      <Stack.Screen 
        name="Floorings" 
        component={OtherFurnitureList} 
        initialParams={{ 
          constants: CONSTANTS.furniture.flooring, 
          nextScreen: otherFurnitureDetail
        }} />

      <Stack.Screen 
        name="Wallpapers" 
        component={OtherFurnitureList} 
        initialParams={{ 
          constants: CONSTANTS.furniture.wallpaper, 
          nextScreen: otherFurnitureDetail
        }} />

      {/* RECIPE */}
      <Stack.Screen 
        name="RecipeClothing" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.clothing, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Clothing' }} />
      <Stack.Screen 
        name="RecipeFences" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.fence, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Fences' }} />
      <Stack.Screen 
        name="RecipeHousewares" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.houseware, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Housewares' }} />
      <Stack.Screen 
        name="RecipeDecorations" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.decoration, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Decorations' }} />
      <Stack.Screen 
        name="RecipeTools" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.tool, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Tools' }} />
      <Stack.Screen 
        name="RecipeWall-mounted" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.wallmounted, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Wall-mounted' }} />
      <Stack.Screen 
        name="RecipeMiscellaneous" 
        component={RecipeList} 
        initialParams={{ 
          constants: CONSTANTS.recipe.miscellaneous, 
          nextScreen: recipeDetail
        }}
        options={{ title: 'Miscellaneous' }} />

      <Stack.Screen name="ClothingDetail" component={ClothingDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="MainFurnitureDetail" component={MainFurnitureDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="OtherFurnitureDetail" component={OtherFurnitureDetail} options={{ title: 'Details' }} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Villagers') {
              return <Image
                source={require('../assets/icons/menu/villagers.png')}
                style={styles.image} />
            } else if (route.name === 'Museum') {
              return <Image
                source={require('../assets/icons/menu/museum.png')}
                style={styles.image} />
            } else if (route.name === 'Songs') {
              return <Image
                source={require('../assets/icons/menu/songs.png')}
                style={styles.image} />
            } else if (route.name === 'More') {
              return <Image
                source={require('../assets/icons/menu/more.png')}
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
            fontSize: Fonts.size.navigationBar,
          }
        }}
      >
        <Tab.Screen name="Villagers" component={VillagerStack} />
        <Tab.Screen name="Museum" component={MuseumStack} />
        <Tab.Screen name="Songs" component={SongStack} />
        <Tab.Screen name="More" component={MoreStack} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.size.title,
    color: Colors.white,
  },
  image: {
    width: 27,
    height: 27,
  },
});
