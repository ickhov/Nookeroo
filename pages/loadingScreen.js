/**
 * Loading screen
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/colors';
import Fonts from '../assets/fonts';
import CustomButton from './components/customButton';
import PopUpDialog from './components/popUpDialog';
import ProgressBar from './components/progressBar';
import CONSTANTS from './constants';

export default function LoadingScreen({ route, navigation }) {

    var count = 0;
    const total = 28;
    const [percent, setPercent] = useState(0.0);
    const [completedCount, setCompletedCount] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

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
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isConnected, setIsConnected] = useState(true);

    const finishLoadingData = useCallback(_ => {
        navigation.navigate(route.params.nextScreen)
    }, []);

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

    useEffect(() => {
        {/* Fetch Data form server and storage (if any) */ }
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected && !isFetching) {
                setIsConnected(true);
                setIsFetching(true);
                fetchData();
            } else if (!isFetching) {
                setIsConnected(false);
                setIsFinished(true);
            }
        });

        // Unsubscribe
        return unsubscribe;
    }, [isFetching]);

    useEffect(() => {
        {/* Navigate to the main screen */ }
        if (isFinished) {
            navigation.navigate(route.params.nextScreen);
        }
    }, [isFinished]);

    useEffect(() => {
        // set the percent every time the completed count changes

        const percentage = ((completedCount * 1.0 / total) * 100).toFixed(2);
        setPercent(percentage);
        
        if (percentage == 100.00) {
            setTimeout(function(){
                setIsFinished(true);
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
                    isConnected &&
                    <Text style={styles.text}>{`Loading: ${percent}%`}</Text>
                }

                {
                    isConnected &&
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