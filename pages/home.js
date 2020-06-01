/**
 * Dashboard
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import Colors from '../assets/colors';
import Fonts from '../assets/fonts';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Text,
} from 'react-native';

import CONSTANTS from './constants';
import TextWithProgressBar from './components/textWithProgressBar';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({ navigation }) {

    const [artCollected, setArtCollected] = useState(0);
    const [bugCollected, setBugCollected] = useState(0);
    const [fishCollected, setFishCollected] = useState(0);
    const [fossilCollected, setFossilCollected] = useState(0);
    const [arts, setArts] = useState(0);
    const [bugs, setBugs] = useState(0);
    const [fishes, setFishes] = useState(0);
    const [fossils, setFossils] = useState(0);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // arts
            getData(CONSTANTS.art.allKey, 0, CONSTANTS.art.url);
            getCollectedData(CONSTANTS.art.collectedKey, 0);
            // bugs
            getData(CONSTANTS.bug.allKey, 1, CONSTANTS.bug.url);
            getCollectedData(CONSTANTS.bug.collectedKey, 1);
            // fishes
            getData(CONSTANTS.fish.allKey, 2, CONSTANTS.fish.url);
            getCollectedData(CONSTANTS.fish.collectedKey, 2);
            // fossils
            getData(CONSTANTS.fossil.allKey, 3, CONSTANTS.fossil.url);
            getCollectedData(CONSTANTS.fossil.collectedKey, 3);
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        {/* Fetch async data for progress tracking */ }
        // arts
        getData(CONSTANTS.art.allKey, 0, CONSTANTS.art.url);
        getCollectedData(CONSTANTS.art.collectedKey, 0);
        // bugs
        getData(CONSTANTS.bug.allKey, 1, CONSTANTS.bug.url);
        getCollectedData(CONSTANTS.bug.collectedKey, 1);
        // fishes
        getData(CONSTANTS.fish.allKey, 2, CONSTANTS.fish.url);
        getCollectedData(CONSTANTS.fish.collectedKey, 2);
        // fossils
        getData(CONSTANTS.fossil.allKey, 3, CONSTANTS.fossil.url);
        getCollectedData(CONSTANTS.fossil.collectedKey, 3);
    }, []);

    const setData = (type, length) => {
        switch (type) {
            case 0: // arts
                setArts(length);
                break;
            case 1: // bugs
                setBugs(length);
                break;
            case 2: // fishes
                setFishes(length);
                break;
            case 3: // fossils
                setFossils(length);
                break;
        }
    };

    const getData = async (key, type, url) => {
        try {
            // type is a number
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    // set the data to use to populate the data after filtering
                    const array = Object.values(json);

                    setData(type, array.length)
                })
                .catch(async _ => {
                    const values = await AsyncStorage.getItem(key);
                    const array = values != null ? JSON.parse(values) : [];

                    setData(type, array.length)
                });

        } catch (e) {
            //error(CONSTANTS.error.retrieving);
        }
    };

    const getCollectedData = async (key, type) => {
        try {
            // type is a number
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(key);

            const array = values != null ? JSON.parse(values) : [];
            const length = array.length;

            switch (type) {
                case 0: // arts
                    setArtCollected(length);
                    break;
                case 1: // bugs
                    setBugCollected(length);
                    break;
                case 2: // fishes
                    setFishCollected(length);
                    break;
                case 3: // fossils
                    setFossilCollected(length);
                    break;
            }

        } catch (e) {
            //error(CONSTANTS.error.retrieving);
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