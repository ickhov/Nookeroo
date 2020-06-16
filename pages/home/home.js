/**
 * Dashboard
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import PopUpDialog from '../components/popUpDialog';
import ProgressBar from '../components/progressBar';
import CONSTANTS from '../constants';
import TextWithProgressBar from '../components/textWithProgressBar';

export default function Home({ navigation }) {

    const [artCollected, setArtCollected] = useState(0);
    const [bugCollected, setBugCollected] = useState(0);
    const [fishCollected, setFishCollected] = useState(0);
    const [fossilCollected, setFossilCollected] = useState(0);
    const [arts, setArts] = useState(0);
    const [bugs, setBugs] = useState(0);
    const [fishes, setFishes] = useState(0);
    const [fossils, setFossils] = useState(0);

    const constants = [
        // MUSEUM
        CONSTANTS.art,
        CONSTANTS.bug,
        CONSTANTS.fish,
        CONSTANTS.fossil,
        // SONG
        CONSTANTS.song,
        // CLOTHING
        CONSTANTS.clothing.accessories,
        CONSTANTS.clothing.bag,
        CONSTANTS.clothing.bottoms,
        CONSTANTS.clothing.dress,
        CONSTANTS.clothing.hat,
        CONSTANTS.clothing.shoes,
        CONSTANTS.clothing.socks,
        CONSTANTS.clothing.tops,
        CONSTANTS.clothing.umbrella,
        // FURNITURE
        CONSTANTS.furniture.houseware,
        CONSTANTS.furniture.wallmounted,
        CONSTANTS.furniture.misc,
        CONSTANTS.furniture.rug,
        CONSTANTS.furniture.flooring,
        CONSTANTS.furniture.wallpaper,
        // RECIPE
        CONSTANTS.recipe.clothing,
        CONSTANTS.recipe.fence,
        CONSTANTS.recipe.houseware,
        CONSTANTS.recipe.decoration,
        CONSTANTS.recipe.tool,
        CONSTANTS.recipe.wallmounted,
        CONSTANTS.recipe.miscellaneous,
    ];

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
            // // arts
            // getData(CONSTANTS.art.allKey, 0, CONSTANTS.art.url);
            // getCollectedData(CONSTANTS.art.collectedKey, 0);
            // // bugs
            // getData(CONSTANTS.bug.allKey, 1, CONSTANTS.bug.url);
            // getCollectedData(CONSTANTS.bug.collectedKey, 1);
            // // fishes
            // getData(CONSTANTS.fish.allKey, 2, CONSTANTS.fish.url);
            // getCollectedData(CONSTANTS.fish.collectedKey, 2);
            // // fossils
            // getData(CONSTANTS.fossil.allKey, 3, CONSTANTS.fossil.url);
            // getCollectedData(CONSTANTS.fossil.collectedKey, 3);
        });

        return unsubscribe;
    }, [navigation]);

    // useEffect(() => {
    //     {/* Fetch async data for progress tracking */ }
    //     // arts
    //     getData(CONSTANTS.art.allKey, 0, CONSTANTS.art.url);
    //     getCollectedData(CONSTANTS.art.collectedKey, 0);
    //     // bugs
    //     getData(CONSTANTS.bug.allKey, 1, CONSTANTS.bug.url);
    //     getCollectedData(CONSTANTS.bug.collectedKey, 1);
    //     // fishes
    //     getData(CONSTANTS.fish.allKey, 2, CONSTANTS.fish.url);
    //     getCollectedData(CONSTANTS.fish.collectedKey, 2);
    //     // fossils
    //     getData(CONSTANTS.fossil.allKey, 3, CONSTANTS.fossil.url);
    //     getCollectedData(CONSTANTS.fossil.collectedKey, 3);
    // }, []);

    const fetchData = async () => {
        try {
            {/* Fetch bug data from Nookeroo API */ }
            for (var i = 0; i < constants.length; i++) {
                const progressKey = constants[i].progressKey;
                const totalKey = constants[i].totalKey;
                const progress = await AsyncStorage.getItem(progressKey);
                const total = await AsyncStorage.getItem(totalKey);
                if (progress !== null) {
                    console.log('Progress: ' + progress.split('/')[0]);
                } else {
                    // no data so need to load them
                    console.log('Progress: 0');
                }

                if (total !== null) {
                    console.log('Total: ' + total);
                } else {
                    // no data so need to load them
                    console.log('Total: 0');
                }
            }
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    };

    const artPercent = arts == 0 ? 0 : ((artCollected * 1.0 / arts) * 100).toFixed(0);
    const bugPercent = bugs == 0 ? 0 : ((bugCollected * 1.0 / bugs) * 100).toFixed(0);
    const fishPercent = fishes == 0 ? 0 : ((fishCollected * 1.0 / fishes) * 100).toFixed(0);
    const fossilPercent = fossils == 0 ? 0 : ((fossilCollected * 1.0 / fossils) * 100).toFixed(0);

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {/* Name Tab */}
                <Text style={styles.titleText}>Museum Progress</Text>

                <View style={styles.museumContainer}>

                    <TextWithProgressBar
                        title={'Arts'}
                        progress={artPercent}
                        progressText={`${artCollected}/${arts} | ${artPercent}%`} />

                    <TextWithProgressBar
                        title={'Bugs'}
                        progress={bugPercent}
                        progressText={`${bugCollected}/${bugs} | ${bugPercent}%`} />

                    <TextWithProgressBar
                        title={'Fishes'}
                        progress={fishPercent}
                        progressText={`${fishCollected}/${fishes} | ${fishPercent}%`} />

                    <TextWithProgressBar
                        title={'Fossils'}
                        progress={fossilPercent}
                        progressText={`${fossilCollected}/${fossils} | ${fossilPercent}%`}
                        containerStyle={{
                            marginBottom: 10,
                        }} />

                </View>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background,
        width: '100%',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        width: '90%',
        borderRadius: 20,
        marginVertical: 20,
    },
    titleText: {
        width: '100%',
        fontFamily: Fonts.bold,
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        color: Colors.white,
    },
    museumContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        width: '100%',
        marginBottom: 20,
    }
});