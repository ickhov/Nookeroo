/**
 * Villager list
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    SectionList,
} from 'react-native';

import CustomButton from '../../components/customButton';
import CONSTANTS from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';

export default function VillagerGuide({ navigation }) {

    const [collectedList, setCollectedList] = useState([]);
    const [rawData, setRawData] = useState([])
    const [data, setData] = useState([]);
    const constants = CONSTANTS.villager;

    const detailSelected = useCallback(item => {
        navigation.navigate('VillagerDetail', {
            name: item.name['name-en'],
            data: item
        })
    }, []);

    const checkBoxToggle = useCallback((item) => {
        // no data if first toggled, set to true if not in the list
        const data = Array.from(collectedList);

        const index = data.indexOf(item['file-name']);
        // if name is in the list, then remove it
        // else add it
        if (index > -1) {
            data.splice(index, 1);
        } else {
            data.push(item['file-name']);
        }

        setCollectedList(data);
        storeCollectedList(data);

    }, [collectedList]);

    const storeCollectedList = useCallback(async (value) => {
        try {
            const values = JSON.stringify(value);
            await AsyncStorage.setItem(constants.collectedKey, values);
        } catch (e) {
            console.error("Storing Error: " + e);
        }
    }, []);

    const getCollectedList = useCallback(async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(constants.collectedKey);
            setCollectedList(values != null ? JSON.parse(values) : []);
        } catch (e) {
            console.error("Retrieving Error: " + e);
        }
    }, []);

    const storeAll = useCallback(async (value) => {
        try {
            const values = JSON.stringify(value);
            await AsyncStorage.setItem(constants.allKey, values);
        } catch (e) {
            console.error("Storing Error: " + e);
        }
    }, []);

    // only use when there's no internet
    const getAll = useCallback(async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(constants.allKey);
            setRawData(values != null ? JSON.parse(values) : []);
        } catch (e) {
            console.error("Retrieving Error: " + e);
        }
    }, []);

    const fetchData = useCallback(() => {
        {/* Fetch bug data from Nookeroo API */ }
        fetch(constants.url)
            .then((response) => response.json())
            .then((json) => {
                // set the data to use to populate the data after filtering
                const array = Object.values(json);
                setRawData(array);
                storeAll(array);
            })
            .catch(_ => getAll());
    }, []);

    useEffect(() => {
        {/* Fetch Data form server and storage (if any) */ }
        fetchData();
        getCollectedList();
    }, []);

    useEffect(() => {
        {/* Populate the tables */ }
        const items = Array.from(rawData);
        const collected = Array.from(collectedList);

        var collectedData = [];
        var missingData = [];

        items.forEach((element) => {
            if (collected.includes(element['file-name'])) {
                collectedData.push(element);
            } else {
                missingData.push(element);
            }
        })

        const collectedLength = collectedData.length;
        const totalLength = items.length;

        if (collectedLength == 0) {
            collectedData.push({
                id: -1,
                text: constants.none
            })
        }

        if (totalLength > 0) {
            setData([
                {
                    title: "Your Villagers",
                    data: collectedData
                },
                {
                    title: collectedLength > 0 ? "Other Villagers" : "All Villagers",
                    data: missingData
                }
            ]);
        }
        
    }, [collectedList, rawData]);

    return (
        <SafeAreaView style={styles.root}>
            <SectionList
                style={{ width: '100%' }}
                sections={data}
                keyExtractor={item => item['file-name']}
                initialNumToRender={10}
                renderItem={({ item }) => {
                    if (item.id == -1) {
                        return <Text style={styles.emptyTextStyle}>{item.text}</Text>
                    } else {
                        return <CustomButton
                            name={item.name['name-en']}
                            imageSource={constants.directory + item['file-name']}
                            onPress={() => detailSelected(item)}
                            hasCollected={Array.from(collectedList).includes(item['file-name'])}
                            toggleCheckBox={() => checkBoxToggle(item)}
                        />
                    }
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                extraData={data}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontFamily: Fonts.medium,
        fontSize: 20,
        backgroundColor: Colors.background,
        color: Colors.white,
        textAlign: 'center',
        padding: 10,
    },
    emptyTextStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
        backgroundColor: Colors.subBackground,
        padding: 20
    }
});
