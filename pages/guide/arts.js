/**
 * Stack market list
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

import Art from '../objects/artObject';

function Item({ text }) {
    return (
        <View style={styles.cell}>
            <Text style={styles.cellText}>{text}</Text>
        </View>
    );
}

export default function ArtGuide({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://acnhapi.com/art')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item text={item.id} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    cell: {
        backgroundColor: Colors.subBackground,
        padding: 20,
    },
    cellText: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
    },
});
