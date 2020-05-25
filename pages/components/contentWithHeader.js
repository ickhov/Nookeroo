/**
 * Custom imageButton component
 * 
 * Properties that can be initialize:
 * style
 * onPress
 * imageSource
 * imageStyle
 * textStyle
 * text
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated,
} from 'react-native';

import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import RoundBorderText from './roundBorderText';

export default function contentWithHeader({
    containerStyle,
    title,
    titleStyle,
    text,
    textStyle,
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            <RoundBorderText
                text={title}
                containerStyle={[styles.infoTitleContainer, titleStyle]}
                textStyle={styles.infoTitle} />
            <RoundBorderText
                text={text}
                containerStyle={[styles.infoTextContainer, textStyle]}
                textStyle={styles.infoText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.white,
        width: '25%',
    },
    infoTitleContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
    },
    infoTitle: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        padding: 10,
    },
    infoTextContainer: {
        backgroundColor: Colors.tertiary,
        borderRadius: 0,
        width: '100%',
        borderColor: Colors.white,
    },
    infoText: {
        width: '95%',
        fontFamily: Fonts.medium,
        fontSize: 16,
        padding: 10,
        color: Colors.white,
        textAlign: 'center',
    },
});