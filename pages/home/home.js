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
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import PopUpDialog from '../components/popUpDialog';
import ProgressBar from '../components/progressBar';
import CONSTANTS from '../constants';
import TextWithProgressBar from '../components/textWithProgressBar';

export default function Home({ navigation }) {

    const [artCollected, setArtCollected] = useState([0, 1]);
    const [bugCollected, setBugCollected] = useState([0, 1]);
    const [fishCollected, setFishCollected] = useState([0, 1]);
    const [fossilCollected, setFossilCollected] = useState([0, 1]);
    const [arts, setArts] = useState([0, 1]);
    const [bugs, setBugs] = useState([0, 1]);
    const [fishes, setFishes] = useState([0, 1]);
    const [fossils, setFossils] = useState([0, 1]);

    const [data, setData] = useState([]);
    const [museum, setMuseum] = useState([]);
    const [songs, setSongs] = useState([]);
    const [clothing, setClothing] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [furniture, setFurniture] = useState([]);

    const constants = [
        // MUSEUM: 0-3
        CONSTANTS.art,
        CONSTANTS.bug,
        CONSTANTS.fish,
        CONSTANTS.fossil,
        // SONG: 4
        CONSTANTS.song,
        // CLOTHING: 5-13
        CONSTANTS.clothing.accessories,
        CONSTANTS.clothing.bag,
        CONSTANTS.clothing.bottoms,
        CONSTANTS.clothing.dress,
        CONSTANTS.clothing.hat,
        CONSTANTS.clothing.shoes,
        CONSTANTS.clothing.socks,
        CONSTANTS.clothing.tops,
        CONSTANTS.clothing.umbrella,
        // FURNITURE: 14-19
        CONSTANTS.furniture.houseware,
        CONSTANTS.furniture.wallmounted,
        CONSTANTS.furniture.misc,
        CONSTANTS.furniture.rug,
        CONSTANTS.furniture.flooring,
        CONSTANTS.furniture.wallpaper,
        // RECIPE: 20-26
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
            setData([]);
            fetchData();
        });

        return unsubscribe;
    }, [navigation]);

    const fetchData = useCallback(async () => {
        try {
            {/* Fetch bug data from Nookeroo API */ }
            for (var i = 0; i < constants.length; i++) {
                const progressKey = constants[i].progressKey;
                const totalKey = constants[i].totalKey;
                const progress = await AsyncStorage.getItem(progressKey);
                const total = await AsyncStorage.getItem(totalKey);
                var value = 0;
                if (progress !== null) {
                    value = parseInt(progress);
                }

                setData(data => [...data, value, parseInt(total)]);
            }
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    }, [data]);

    useEffect(() => {
        const tmpMuseum = [];
        for (var i = 0; i < 8; i+=2) {
            tmpMuseum.push(
            <TextWithProgressBar
                key={constants[i / 2].allKey}
                title={constants[i / 2].text}
                progress={data[i] ?? 0}
                total={data[i+1] ?? 1} />);
        }
        setMuseum(tmpMuseum);

        const tmpSongs = [];
        tmpSongs.push(
            <TextWithProgressBar
                key={constants[4].allKey}
                title={constants[4].text}
                progress={data[8] ?? 0}
                total={data[9] ?? 1} />);
        setSongs(tmpSongs);

        const tmpClothing = [];
        for (var i = 10; i < 28; i+=2) {
            tmpClothing.push(
            <TextWithProgressBar
                key={constants[i / 2].allKey}
                title={constants[i / 2].text}
                progress={data[i] ?? 0}
                total={data[i+1] ?? 1} />);
        }
        setClothing(tmpClothing);

        const tmpRecipe = [];
        for (var i = 28; i < 40; i+=2) {
            tmpRecipe.push(
            <TextWithProgressBar
                key={constants[i / 2].allKey}
                title={constants[i / 2].text}
                progress={data[i] ?? 0}
                total={data[i+1] ?? 1} />);
        }
        setRecipe(tmpRecipe);

        const tmpFurniture = [];
        for (var i = 40; i < 54; i+=2) {
            tmpFurniture.push(
            <TextWithProgressBar
                key={constants[i / 2].allKey}
                title={constants[i / 2].text}
                progress={data[i] ?? 0}
                total={data[i+1] ?? 1} />);
        }
        setFurniture(tmpFurniture);
    }, [data]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootStyle}
                contentContainerStyle={styles.rootContainer}>
                <View style={styles.container}>
                    {/* Museum Tab */}
                    <Text style={styles.titleText}>Museum Progress</Text>
                    <View style={styles.tabContainer}>
                        {museum}
                    </View>
                </View>

                <View style={styles.container}>
                    {/* Songs Tab */}
                    <Text style={styles.titleText}>Songs Progress</Text>
                    <View style={styles.tabContainer}>
                        {songs}
                    </View>

                </View>

                <View style={styles.container}>
                    {/* Songs Tab */}
                    <Text style={styles.titleText}>Clothing Progress</Text>
                    <View style={styles.tabContainer}>
                        {clothing}
                    </View>

                </View>

                <View style={styles.container}>
                    {/* Museum Tab */}
                    <Text style={styles.titleText}>Recipe Progress</Text>
                    <View style={styles.tabContainer}>
                        {recipe}
                    </View>
                </View>

                <View style={styles.container}>
                    {/* Songs Tab */}
                    <Text style={styles.titleText}>Furniture Progress</Text>
                    <View style={styles.tabContainer}>
                        {furniture}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    rootStyle: {
        backgroundColor: Colors.background,
        width: '100%',
    },
    rootContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        width: '90%',
        borderRadius: 20,
        marginTop: 20,
    },
    titleText: {
        width: '100%',
        fontFamily: Fonts.bold,
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        color: Colors.white,
    },
    tabContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        width: '100%',
        marginBottom: 20,
        paddingBottom: 10
    }
});