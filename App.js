/**
 * Nookeroo app
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomStatusBar from './pages/components/statusBar';
import HostingIsland from './pages/hosting-island/hosting-island';
import Colors from './assets/colors';
import Fonts from './assets/fonts';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <CustomStatusBar />
      <NavigationContainer>
        <Tab.Navigator
          
          tabBarOptions={{
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.black,
            style: {
              backgroundColor: Colors.primary,
            },
            labelStyle: {
              fontFamily: Fonts.normal,
              fontSize: 13,
            }
          }}
        >
          <Tab.Screen name="Marketplace" component={HostingIsland} />
          <Tab.Screen name="Guide" component={HostingIsland} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
