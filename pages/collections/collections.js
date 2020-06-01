/**
 * Collections menu
 *
 * @format
 * @flow strict-local
 */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Songs from './songs/songs';

const TopTab = createMaterialTopTabNavigator();

export default function Collections() {
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
                    fontSize: 14,
                },
                indicatorStyle: {
                    backgroundColor: Colors.white
                }
            }}
        >
            <TopTab.Screen name="Songs" component={Songs} />
        </TopTab.Navigator>
    );
}
