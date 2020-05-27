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
    View,
    FlatList,
    SectionList,
    Text,
} from 'react-native';

import CustomButton from '../../../components/customButton';

export default function BugGuide({ navigation }) {

    const [data, setData] = useState([]);

    const detailSelected = useCallback(item => {
        navigation.navigate('BugDetail', {
            name: item.name['name-en'],
            data: item
        })
    }, []);

    useEffect(() => {
        {/* Fetch bug data from Nookeroo API */ }
        fetch('https://ickhov.github.io/nookeroo/bugs.json')
            .then((response) => response.json())
            .then((json) => {
                const items = Object.values(json);

                var collectedData = [];
                var missingData = [];

                items.forEach((element, index) => {
                    if (index < 5) {
                        collectedData.push(element);
                    } else {
                        missingData.push(element);
                    }
                })

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

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
            style={{ width: '100%' }}
                sections={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <CustomButton
                name={item.name['name-en']}
                imageSource={'bugs/' + item['file-name']}
                onPress={() => detailSelected(item)}
                toggleCheckBox={() => {}}
            />}
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
});
