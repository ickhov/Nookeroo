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
//import HostingIsland from './pages/listings/hosting-island';
//import Marketplace from './pages/marketplace/marketplace';

// Guide Stack
import Guide from './pages/guide/guide';
import GuideVillagers from './pages/guide/villagers/villagers';
import GuideBugs from './pages/guide/bugs/bugs';
import GuideFishes from './pages/guide/fishes/fishes';
import GuideFossils from './pages/guide/fossils/fossils';
import GuideArts from './pages/guide/arts/arts';

// Guide Stack: Details
import GuideVillagerDetail from './pages/guide/villagers/villagerDetail';

import {
  StyleSheet,
} from 'react-native';

const Stack = createStackNavigator();
/*
const MarketplaceStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Marketplace">
      <Stack.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          headerTitleStyle: styles.header,
          headerStyle: { backgroundColor: Colors.primary },
        }} />
    </Stack.Navigator>
  );
}*/

const GuideStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Guide"
      screenOptions={() => ({
        headerTitleStyle: styles.header,
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white
      })}>
      <Stack.Screen name="Guide" component={Guide} options={{ title: 'Guide' }} />
      <Stack.Screen name="GuideVillagers" component={GuideVillagers} options={{ title: 'Villagers' }} />
      <Stack.Screen name="GuideBugs" component={GuideBugs} options={{ title: 'Bugs' }}/>
      <Stack.Screen name="GuideFishes" component={GuideFishes} options={{ title: 'Fishes' }}/>
      <Stack.Screen name="GuideFossils" component={GuideFossils} options={{ title: 'Fossils' }}/>
      <Stack.Screen name="GuideArts" component={GuideArts} options={{ title: 'Arts' }}/>
      
      <Stack.Screen name="GuideVillagerDetail" component={GuideVillagerDetail} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
  );
}

// Temporary code for initial release
function App () {
  return (
      <NavigationContainer>
        <CustomStatusBar />
        <GuideStack />
      </NavigationContainer>
  );
};

/*
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
*/
const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    color: Colors.black,
  },
});

export default App;
