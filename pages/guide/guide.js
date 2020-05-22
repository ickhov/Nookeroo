/**
 * Stack market list
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';

import {
    StyleSheet,
    View,
} from 'react-native';

import ImageButton from '../components/imageButton';

export default function Guide({ navigation }) {

    const artSelected = useCallback(() => {
        navigation.navigate('GuideArts');
    }, []);

    const bugSelected = useCallback(() => {
        navigation.navigate('GuideBugs');
    }, []);

    const fishSelected = useCallback(() => {
        navigation.navigate('GuideFishes');
    }, []);

    const fossilSelected = useCallback(() => {
        navigation.navigate('GuideFossils');
    }, []);

    const villagerSelected = useCallback(() => {
        navigation.navigate('GuideVillagers');
    }, []);

    return (
        <View style={styles.container}>
            {/* Menu for selecting the guide options */}
            <View style={styles.optionContainer}>

                <ImageButton
                    style={styles.btn}
                    onPress={artSelected}
                    imageSource={require('../../assets/icons/art/amazing_painting.png')}
                    imageStyle={styles.image}
                    textStyle={styles.btnTextWhite}
                    text={'Arts'} />

                <ImageButton
                    style={styles.btn}
                    onPress={bugSelected}
                    imageSource={require('../../assets/icons/bugs/queen_alexandras_birdwing.png')}
                    imageStyle={styles.image}
                    textStyle={styles.btnTextWhite}
                    text={'Bugs'} />

                <ImageButton
                    style={styles.btn}
                    onPress={fishSelected}
                    imageSource={require('../../assets/icons/fish/koi.png')}
                    imageStyle={styles.image}
                    textStyle={styles.btnTextWhite}
                    text={'Fishes'} />

                <ImageButton
                    style={styles.btn}
                    onPress={fossilSelected}
                    imageSource={require('../../assets/images/fossils/trilobite.png')}
                    imageStyle={styles.image}
                    textStyle={styles.btnTextWhite}
                    text={'Fossils'} />

                <ImageButton
                    style={styles.btn}
                    onPress={villagerSelected}
                    imageSource={require('../../assets/icons/villagers/cat23.png')}
                    imageStyle={styles.image}
                    textStyle={styles.btnTextWhite}
                    text={'Villagers'} />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    optionContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 70,
        height: 70,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 20,
        width: '40%',
        marginBottom: 10
    },
    btnTextWhite: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.black,
    },
});
