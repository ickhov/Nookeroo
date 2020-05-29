/**
 * Museum menu
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-community/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../../../assets/colors';
import ImageButtonWithProgressBar from '../../components/imageButtonWithProgressBar';

export default function Museum({ navigation }) {

    // store the data needed to render progress bar
    const [data, setData] = useState([]);
    const [artCounts, setArtCounts] = useState([]);
    const [bugCounts, setBugCounts] = useState([]);
    const [fishCounts, setFishCounts] = useState([]);
    const [fossilCounts, setFossilCounts] = useState([]);

    const CONSTANTS = {
        art: {
            text: 'Arts',
            collectedCountStorageKey: 'art-collected-count',
            totalCountStorageKey: 'art-total-count',
            url: 'https://ickhov.github.io/nookeroo/art.json'
        },
        bug: {
            text: 'Bugs',
            collectedCountStorageKey: 'bug-collected-count',
            totalCountStorageKey: 'bug-total-count',
            url: 'https://ickhov.github.io/nookeroo/bugs.json'
        },
        fish: {
            text: 'Fishes',
            collectedCountStorageKey: 'fish-collected-count',
            totalCountStorageKey: 'fish-total-count',
            url: 'https://ickhov.github.io/nookeroo/fish.json'
        },
        fossil: {
            text: 'Fossils',
            collectedCountStorageKey: 'fossil-collected-count',
            totalCountStorageKey: 'fossil-total-count',
            url: 'https://ickhov.github.io/nookeroo/fossils.json'
        }
    };

    const artSelected = () => {
        navigation.navigate(CONSTANTS.art.text);
    };

    const bugSelected = () => {
        navigation.navigate(CONSTANTS.bug.text);
    };

    const fishSelected = () => {
        navigation.navigate(CONSTANTS.fish.text);
    };

    const fossilSelected = () => {
        navigation.navigate(CONSTANTS.fossil.text);
    };

    // get the collected and total count
    const getCount = async (totalCountStorageKey, collectedCountStorageKey, url, index) => {
        try {
            // store the list as string and count separately for faster reading
            var totalCount = await AsyncStorage.getItem(totalCountStorageKey);
            const collectedCount = await AsyncStorage.getItem(collectedCountStorageKey);

            const realCollectedCount = collectedCount != null ? parseInt(collectedCount) : 0;

            // if null, then it's the first time loading so retrieve it from server
            if (totalCount == null) {
                // fetch bug data to read total count
                fetch(url)
                    .then((response) => response.json())
                    .then((json) => {
                        return([realCollectedCount, Object.values(json).length]);
                    })
                    .then((object) => setCount(index, object))
                    .catch((error) => console.error(error))
            } else {
                setCount(index, [realCollectedCount, parseInt(totalCount)]);
            }
        } catch (e) {
            console.error("Retrieving Error: " + e);
        }
    };

    // set the collected and total count
    const setCount = (index, array) => {
        switch (index) {
            case 0:
                setArtCounts(array);
                break;
            case 1:
                setBugCounts(array);
                break;
            case 2:
                setFishCounts(array);
                break;
            case 3:
                setFossilCounts(array);
                break;
        }
    };

    const finalizeData = useCallback(() => {
        const artPercent = (artCounts[0] * 1.0 / artCounts[1]) * 100;
        const bugPercent = (bugCounts[0] * 1.0 / bugCounts[1]) * 100;
        const fishPercent = (fishCounts[0] * 1.0 / fishCounts[1]) * 100;
        const fossilPercent = (fossilCounts[0] * 1.0 / fossilCounts[1]) * 100;

        setData([
            {
                id: 1,
                title: 'Arts',
                onPress: artSelected,
                imageSource: require('../../../assets/icons/museum-menu/arts.png'),
                progress: artPercent
            },
            {
                id: 2,
                title: 'Bugs',
                onPress: bugSelected,
                imageSource: require('../../../assets/icons/museum-menu/bugs.png'),
                progress: bugPercent
            },
            {
                id: 3,
                title: 'Fishes',
                onPress: fishSelected,
                imageSource: require('../../../assets/icons/museum-menu/fishes.png'),
                progress: fishPercent
            },
            {
                id: 4,
                title: 'Fossils',
                onPress: fossilSelected,
                imageSource: require('../../../assets/icons/museum-menu/fossils.png'),
                progress: fossilPercent
            }
        ]);
    }, [artCounts, bugCounts, fishCounts, fossilCounts]);

    const fetchArtData = () => {
        getCount(CONSTANTS.art.totalCountStorageKey,
            CONSTANTS.art.collectedCountStorageKey,
            CONSTANTS.art.url, 0);
    }

    const fetchBugData = () => {
        getCount(CONSTANTS.bug.totalCountStorageKey,
            CONSTANTS.bug.collectedCountStorageKey,
            CONSTANTS.bug.url, 1);
    }

    const fetchFishData = () => {
        getCount(CONSTANTS.fish.totalCountStorageKey,
            CONSTANTS.fish.collectedCountStorageKey,
            CONSTANTS.fish.url, 2);
    }

    const fetchFossilData = () => {
        getCount(CONSTANTS.fossil.totalCountStorageKey,
            CONSTANTS.fossil.collectedCountStorageKey,
            CONSTANTS.fossil.url, 3);
    }

    useEffect(() => {
        {/* Fetch async data for progress tracking */ }
        fetchArtData();
        fetchBugData();
        fetchFishData();
        fetchFossilData();
    }, []);

    useEffect(() => {
        {/* Fetch async data for progress tracking */ }
        if (artCounts.length > 0 &&
            bugCounts.length > 0 &&
            fishCounts.length > 0 &&
            fossilCounts.length > 0) {
            finalizeData();
        }

    }, [artCounts, bugCounts, fishCounts, fossilCounts]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ width: '85%' }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) =>
                    <ImageButtonWithProgressBar
                        onPress={item.onPress}
                        imageSource={item.imageSource}
                        text={item.title}
                        _progress={item.progress}
                    />}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
});
