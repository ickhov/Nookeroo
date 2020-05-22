/**
 * Nookeroo app
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, Header, HeaderTitle } from '@react-navigation/stack';
import Colors from './assets/colors';
import Fonts from './assets/fonts';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomStatusBar from './pages/components/statusBar';
import HostingIsland from './pages/listings/hosting-island';
import Marketplace from './pages/marketplace/marketplace';

import {
  StyleSheet,
  Text
} from 'react-native';

const Stack = createStackNavigator();

const MarketplaceStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Marketplace">
      <Stack.Screen 
      name="Marketplace" 
      component={Marketplace} 
      options={{
        headerTitleStyle: styles.header,
        headerStyle: {backgroundColor: Colors.primary},
      }}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <CustomStatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Marketplace') {
              iconName = 'store'
            } else if (route.name === 'Guide') {
              iconName = 'book';
            }

            return <Icons name={iconName} size={26} color={color} />;
          },
        })}
          tabBarOptions={{
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.black,
            style: {
              backgroundColor: Colors.primary,
            },
            labelStyle: {
              fontFamily: Fonts.normal,
              fontSize: 14,
            }
          }}
        >
          <Tab.Screen name="Marketplace" component={MarketplaceStack} />
          <Tab.Screen name="Guide" component={HostingIsland} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
      fontFamily: Fonts.bold,
      fontSize: 30,
      color: Colors.black,
  },
});

export default App;
