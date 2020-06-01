/**
 * Custom imageButton component
 * 
 * Properties that can be initialize:
 * containerStyle
 * title
 * titleStyle
 * text
 * textStyle
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import RoundBorderText from './roundBorderText';

export default function contentWithHeader({
    containerStyle,
    title,
    titleContainerStyle,
    text,
    textContainerStyle,
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.infoTitle, titleContainerStyle]}>{title}</Text>
            <Text style={[styles.infoText, textContainerStyle]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.white,
        width: '25%',
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    infoTitle: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: Colors.white,
        textAlign: 'center',
        paddingVertical: 10,
    },
    infoText: {
        backgroundColor: Colors.tertiary,
        borderRadius: 0,
        width: '100%',
        borderColor: Colors.white,
        fontFamily: Fonts.medium,
        fontSize: 16,
        color: Colors.white,
        textAlign: 'center',
        paddingVertical: 10,
    },
});