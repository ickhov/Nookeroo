/**
 * Fish list
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
} from 'react-native';

import CustomButton from '../../../components/customButton';

export default function FishGuide({ navigation }) {

    const [data, setData] = useState([]);

    const detailSelected = useCallback(item => {
        navigation.navigate('FishDetail', { 
            name: item.name['name-en'],
            data: item
        })
    }, []);

    useEffect(() => {
        {/* Fetch fish data from Nookeroo API */}
        fetch('https://ickhov.github.io/nookeroo/fish.json')
            .then((response) => response.json())
            .then((json) => setData(Object.values(json)))
            .catch((error) => console.error(error))
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => <CustomButton
                    name={item.name['name-en']}
                    imageSource={'fish/' + item['file-name']}
                    onPress={() => detailSelected(item)}
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
