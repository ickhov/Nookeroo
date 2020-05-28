/**
 * Art list
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    SectionList,
    Text,
} from 'react-native';

import CustomButton from '../../../components/customButton';
import AsyncStorage from '@react-native-community/async-storage';

export default function ArtGuide({ navigation }) {

    const [collectedList, setCollectedList] = useState([]);
    const [rawData, setRawData] = useState([])
    const [data, setData] = useState([]);
    const storageKey = 'art-collected';

    const detailSelected = useCallback(item => {
        navigation.navigate('ArtDetail', { 
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
            await AsyncStorage.setItem(storageKey, values);
        } catch (e) {
            console.error("Storing Error: " + e);
        }
    }, []);

    const getCollectedList = useCallback(async () => {
        try {
            const values = await AsyncStorage.getItem(storageKey)
            setCollectedList(values != null ? JSON.parse(values) : [])
        } catch (e) {
            console.error("Retrieving Error: " + e);
        }
    }, []);

    const fetchData = useCallback(() => {
        {/* Fetch bug data from Nookeroo API */ }
        fetch('https://ickhov.github.io/nookeroo/art.json')
            .then((response) => response.json())
            .then((json) => setRawData(Object.values(json)))
            .catch((error) => console.error(error))
    }, [])

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

        if (collectedData.length == 0) {
            collectedData.push({
                id: -1,
                text: "You haven't collected any art yet."
            })
        }

        setData([
            {
                title: "Collected",
                data: collectedData
            },
            {
                title: "Missing",
                data: missingData
            }
        ]);
    }, [collectedList, rawData]);

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                style={{ width: '100%' }}
                sections={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    if (item.id == -1) {
                        return <Text style={styles.emptyTextStyle}>{item.text}</Text>
                    } else {
                        return <CustomButton
                            name={item.name['name-en']}
                            imageSource={'art/' + item['file-name']}
                            onPress={() => detailSelected(item)}
                            hasCollected={Array.from(collectedList).includes(item['file-name'])}
                            toggleCheckBox={() => checkBoxToggle(item)}
                        />
                    }
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
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
