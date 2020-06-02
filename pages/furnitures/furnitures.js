/**
 * Furnitures menu
 *
 * @format
 * @flow strict-local
 */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Housewares from './housewares/housewares';
import WallMounted from './wallmounted/wallmounted';
import Miscellaneous from './misc/misc';

const TopTab = createMaterialTopTabNavigator();

export default function Furnitures() {
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
                    fontSize: 13,
                },
                indicatorStyle: {
                    backgroundColor: Colors.white
                }
            }}
        >
            <TopTab.Screen name="Housewares" component={Housewares} />
            <TopTab.Screen name="Wall-mounted" component={WallMounted} />
            <TopTab.Screen name="Miscellaneous" component={Miscellaneous} />
        </TopTab.Navigator>
    );
}
