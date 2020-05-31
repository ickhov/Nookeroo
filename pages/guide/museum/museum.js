/**
 * Museum menu
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

import Bugs from './bugs/bugs';
import BugDetail from './bugs/bugDetail';
import Fishes from './fishes/fishes';
import FishDetail from './fishes/fishDetail';
import Fossils from './fossils/fossils';
import FossilDetail from './fossils/fossilDetail';
import Arts from './arts/arts';
import ArtDetail from './arts/artDetail';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

export default function MuseumTopTab() {
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
            <TopTab.Screen name="Arts" component={Arts} />
            <TopTab.Screen name="Bugs" component={Bugs} />
            <TopTab.Screen name="Fishes" component={Fishes} />
            <TopTab.Screen name="Fossils" component={Fossils} />
        </TopTab.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        fontFamily: Fonts.bold,
        fontSize: 30,
        color: Colors.white,
    }
});
