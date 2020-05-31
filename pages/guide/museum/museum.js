/**
 * Museum menu
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import ImageButtonRow from '../../components/imageButtonRow';

export default function Museum({ navigation }) {

    const data = [
        {
            title: 'Arts',
            imageSource: require('../../../assets/icons/museum-menu/arts.png'),
        },
        {
            title: 'Bugs',
            imageSource: require('../../../assets/icons/museum-menu/bugs.png'),
        },
        {
            title: 'Fishes',
            imageSource: require('../../../assets/icons/museum-menu/fishes.png'),
        },
        {
            title: 'Fossils',
            imageSource: require('../../../assets/icons/museum-menu/fossils.png'),
        }
    ]

    const artSelected = () => {
        navigation.navigate(data[0].title);
    };

    const bugSelected = () => {
        navigation.navigate(data[1].title);
    };

    const fishSelected = () => {
        navigation.navigate(data[2].title);
    };

    const fossilSelected = () => {
        navigation.navigate(data[3].title);
    };

    return (
        <View style={styles.container}>
            {/* Menu for selecting the guide options */}
            <ImageButtonRow
                style={styles.btn}
                onPress={artSelected}
                imageSource={data[0].imageSource}
                textStyle={styles.btnText}
                text={data[0].title} 
                setTextLeft={true} />
            <ImageButtonRow
                style={styles.btn}
                onPress={bugSelected}
                imageSource={data[1].imageSource}
                textStyle={styles.btnText}
                text={data[1].title} />
            <ImageButtonRow
                style={styles.btn}
                onPress={fishSelected}
                imageSource={data[2].imageSource}
                textStyle={styles.btnText}
                text={data[2].title}
                setTextLeft={true} />
            <ImageButtonRow
                style={styles.btn}
                onPress={fossilSelected}
                imageSource={data[3].imageSource}
                textStyle={styles.btnText}
                text={data[3].title} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.background,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 20,
        borderRadius: 20,
        width: '90%',
        height: '20%',
    },
    btnText: {
        fontFamily: Fonts.medium,
        fontSize: 25,
        textAlign: 'center',
        color: Colors.white,
    },
});
