/**
 * Museum menu
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Colors from '../../assets/colors';
import ImageButtonRow from '../components/imageButtonRow';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Museum({ navigation }) {

    const screenSelected = name => {
        navigation.navigate(name)
    };

    return (
        <SafeAreaView style={styles.root}>

            <ImageButtonRow 
                style={styles.cardStyle}
                textStyle={styles.textStyle}
                imageSource={require('../../assets/icons/museum/art.png')} 
                text="Arts"
                onPress={() => screenSelected("Arts")} />
            <ImageButtonRow 
                style={styles.cardStyle}
                textStyle={styles.textStyle}
                imageSource={require('../../assets/icons/museum/bug.png')} 
                text="Bugs"
                onPress={() => screenSelected("Bugs")} />
            <ImageButtonRow
                style={styles.cardStyle}
                textStyle={styles.textStyle}
                imageSource={require('../../assets/icons/museum/fish.png')} 
                text="Fishes"
                onPress={() => screenSelected("Fishes")} />
            <ImageButtonRow 
                style={styles.cardStyle}
                textStyle={styles.textStyle}
                imageSource={require('../../assets/icons/museum/fossil.png')} 
                text="Fossils"
                onPress={() => screenSelected("Fossils")} />
            <ImageButtonRow 
                style={styles.cardStyle}
                textStyle={styles.textStyle}
                imageSource={require('../../assets/icons/museum/sea.png')} 
                text="Sea Creatures"
                onPress={() => screenSelected("Sea")} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    cardStyle: {
        backgroundColor: Colors.subBackground,
        width: '95%',
        height: '17%',
        borderRadius: 20,
    },
    textStyle: {
        fontSize: 20
    }
});
