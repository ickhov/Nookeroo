/**
 * Museum menu
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
    ScrollView
} from 'react-native';

import ImageButtonWithProgressBar from '../../components/imageButtonWithProgressBar';

export default function Museum({ navigation }) {

    const [data, setData] = useState([]);

    const artSelected = useCallback(() => {
        navigation.navigate('Arts')
    }, []);

    const bugSelected = useCallback(() => {
        navigation.navigate('Bugs')
    }, []);

    const fishSelected = useCallback(() => {
        navigation.navigate('Fishes')
    }, []);

    const fossilSelected = useCallback(() => {
        navigation.navigate('Fossils')
    }, []);

    useEffect(() => {
        {/* Fetch async data for progress tracking */ }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootStyle}
                contentContainerStyle={styles.rootContainer}>
                    <ImageButtonWithProgressBar
                onPress={artSelected}
                imageSource={require('../../../assets/icons/museum-menu/arts.png')}
                text={"Arts"}
                _progress={50}
            />

            <ImageButtonWithProgressBar
                onPress={bugSelected}
                imageSource={require('../../../assets/icons/museum-menu/bugs.png')}
                text={"Bugs"}
            />

            <ImageButtonWithProgressBar
                onPress={fishSelected}
                imageSource={require('../../../assets/icons/museum-menu/fishes.png')}
                text={"Fishes"}
            />

            <ImageButtonWithProgressBar
                onPress={fossilSelected}
                imageSource={require('../../../assets/icons/museum-menu/fossils.png')}
                text={"Fossils"}
            />
                </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    rootStyle: {
        backgroundColor: Colors.background,
        width: '100%',
    },
    rootContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
