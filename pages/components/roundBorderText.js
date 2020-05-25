/**
 * Round border text component
 * 
 * Properties that can be initialize:
 * containerStyle
 * text
 * textStyle
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';


export default function RoundBorderText({
    text,
    containerStyle,
    textStyle
}) {

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.subBackground,
        borderRadius: 20,
    },
    textStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
        padding: 20,
    },
});