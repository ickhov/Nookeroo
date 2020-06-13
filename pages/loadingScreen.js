/**
 * Loading screen
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from '../assets/colors';
import Fonts from '../assets/fonts';
import PopUpDialog from './components/popUpDialog';
import ProgressBar from './components/progressBar';
import CONSTANTS from './constants';

export default function LoadingScreen({ route, navigation }) {

    var count = 0;
    const total = 28;
    const [percent, setPercent] = useState(0.0);
    const [completedCount, setCompletedCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const constants = [
        // VILLAGERS
        CONSTANTS.villager,
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

    const error = (message) => {
        setErrorMessage(message);
        setShowAlert(true);
    }

    const storeAll = useCallback(async (value, key) => {
        try {
            const values = JSON.stringify(value);
            await AsyncStorage.setItem(key, values)
                .then(_ => {
                    count += 1;
                    setCompletedCount(count);
                });
        } catch (e) {
            error(CONSTANTS.error.storing);
        }
    }, [completedCount]);

    const fetchData = () => {
        {/* Fetch bug data from Nookeroo API */ }
        for (var i = 0; i < constants.length; i++) {
            const url = constants[i].url;
            const key = constants[i].allKey;
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    // set the data to use to populate the data after filtering
                    const array = Object.values(json);

                    storeAll(array, key);
                })
                .catch(e => {
                    error(CONSTANTS.error.retrieving);
                });
        }
    };

    // only use when there's no internet
    const getDataTimestamp = async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(CONSTANTS.data_timestamp);
            if (values !== null) {
                const oldDate = values.split('/');
                const first = moment([moment().year(), 0, moment().date()]);
                const second = moment([parseInt(oldDate[0]), 0, parseInt(oldDate[1])]);
                const difference = first.diff(second, 'days');

                if (difference > 0) {
                    setShowLoading(true);
                    fetchData();
                } else {
                    navigation.navigate('Main');
                }
            } else {
                setShowLoading(true);
                fetchData();
            }
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    };

    const storeDataTimestamp = async _ => {
        try {
            const date = moment().year() + '/' + moment().date();
            await AsyncStorage.setItem(CONSTANTS.data_timestamp, date);
        } catch (e) {
            error(CONSTANTS.error.storing);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            count = 0;
            setShowLoading(false);
            NetInfo.fetch().then(state => {
                // ensure we retrieve data only once per day
                if (state.isConnected) {
                    getDataTimestamp();
                } else {
                    navigation.navigate('Main');
                }
            });
        });

        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        // set the percent every time the completed count changes

        const percentage = ((completedCount * 1.0 / total) * 100).toFixed(2);
        setPercent(percentage);

        if (completedCount == total) {
            storeDataTimestamp();
            setTimeout(_ => {
                navigation.navigate('Main');
            }, 2000);
        }

    }, [completedCount]);

    return (
        <SafeAreaView style={styles.root}>

            <View style={styles.container}>
                <Image
                    source={require('../assets/icons/miscellaneous/nookeroo-app-icon-transparent.png')}
                    style={styles.image}
                />

                {
                    showLoading &&
                    <Text style={styles.text}>{`Loading: ${percent}%`}</Text>
                }

                {
                    showLoading &&
                    <ProgressBar progress={percent} progressBarColor={Colors.background} duration={500} />
                }
            </View>

            <PopUpDialog
                showAlert={showAlert}
                title='Something went wrong!'
                message={errorMessage}
                cancelText='Dismiss'
                onCancelPressed={() => {
                    setShowAlert(false);
                    setErrorMessage('');
                }}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    header: {
        fontFamily: Fonts.medium,
        fontSize: Fonts.size.header,
        backgroundColor: Colors.background,
        color: Colors.white,
        textAlign: 'center',
        padding: 10,
    },
    text: {
        width: '100%',
        fontFamily: Fonts.medium,
        fontSize: Fonts.size.header,
        textAlign: 'center',
        padding: 10,
        color: Colors.white,
    },
});