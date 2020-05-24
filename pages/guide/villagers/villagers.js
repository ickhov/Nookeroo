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
    View,
    FlatList,
} from 'react-native';

import CustomButton from '../../components/customButton';
import ImageButton from '../../components/imageButton';

export default function VillagerGuide({ navigation }) {

    const [data, setData] = useState([]);

    const detailSelected = useCallback(item => {
        navigation.navigate('VillagerDetail', { 
            name: item.name['name-en'],
            data: item
        })
    }, []);

    useEffect(() => {
        {/* Fetch villager data from Nookeroo API */}
        fetch('https://ickhov.github.io/nookeroo/villagers.json')
            .then((response) => response.json())
            .then((json) => setData(Object.values(json)))
            .catch((error) => console.error(error))
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) =>
                <ImageButton
                    style={styles.btn}
                    onPress={() => detailSelected(item)}
                    imageSource={'villagers/' + item['file-name']}
                    imageStyle={styles.image}
                    textStyle={styles.btnTextWhite}
                    text={item.name['name-en']} 
                    />
                }
                keyExtractor={item => item.id.toString()}
                numColumns={2}
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
    btn: {
        backgroundColor: Colors.tertiary,
        padding: 8,
        borderRadius: 20,
        width: '45%',
        marginTop: 10,
        marginHorizontal: 10,
    },
    btnTextWhite: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.black,
    },
});
