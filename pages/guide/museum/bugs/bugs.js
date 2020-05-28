/**
 * Bug list
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
    SectionList,
    Text,
} from 'react-native';

import CustomButton from '../../../components/customButton';
import AsyncStorage from '@react-native-community/async-storage';

export default function BugGuide({ navigation }) {

    const [collectedList, setCollectedList] = useState([]);
    const [data, setData] = useState([]);
    const storageKey = 'bug-collected';

    const detailSelected = useCallback(item => {
        navigation.navigate('BugDetail', {
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
            console.log("Storing Error: " + e);
        }
    }, []);

    const getCollectedList = useCallback(async () => {
        try {
            const values = await AsyncStorage.getItem(storageKey)
            const array = values != null ? JSON.parse(values) : []
            setCollectedList(array);
            populateData(array);
        } catch (e) {
            console.log("Retrieving Error: " + e);
        }
    }, []);

    const populateData = useCallback((collected) => {
        {/* Fetch bug data from Nookeroo API */ }
        fetch('https://ickhov.github.io/nookeroo/bugs.json')
            .then((response) => response.json())
            .then((json) => {
                const items = Object.values(json);

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
                        text: "You haven't caught any bug yet."
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
            })
            .catch((error) => console.error(error))
    }, []);

    useEffect(() => {
        {/* Fetch collected data from Async Storage and populate the tables */ }
        getCollectedList()
    }, []);

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
                            imageSource={'bugs/' + item['file-name']}
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
