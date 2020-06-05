/**
 * Museum menu
 *
 * @format
 * @flow strict-local
 */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Arts from './arts/arts';
import Bugs from './bugs/bugs';
import Fishes from './fishes/fishes';
import Fossils from './fossils/fossils';

const TopTab = createMaterialTopTabNavigator();

export default function Museum() {
    return (
        <TopTab.Navigator
            tabBarOptions={{
                activeTintColor: Colors.white,
                inactiveTintColor: Colors.white,
                style: {
                    backgroundColor: Colors.secondary,
                },
                labelStyle: {
                    color: Colors.white,
                    fontFamily: Fonts.medium,
                    fontSize: Fonts.size.navigationBar,
                },
                indicatorStyle: {
                    backgroundColor: Colors.white
                }
            }}
        >
            <TopTab.Screen name="Arts" component={Arts} />
            <TopTab.Screen name="Bugs" component={Bugs} />
            <TopTab.Screen name="Fishes" component={Fishes} />
            <TopTab.Screen name="Fossils" component={Fossils} />
        </TopTab.Navigator>
    );
}
