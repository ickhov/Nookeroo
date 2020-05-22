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

import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

export default function ImageButton({
    style,
    onPress,
    imageSource,
    imageStyle,
    textStyle,
    text
}) {

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            activeOpacity={0.5}
            onPress={onPress}>
            <Image
                source={imageSource ?? require('../../assets/icons/villagers/cat23.png')}
                style={[styles.imageStyle, imageStyle]}
            />
            <View style={styles.lineSeparator} />
            <Text style={[styles.textStyle, textStyle]}>{text ?? "Raymond"}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
    },
    underlayColor: {
        backgroundColor: '#fff',
    },
    imageStyle: {
        width: 50,
        height: 50,
    },
    lineSeparator: {
        backgroundColor: '#fff',
        width: 0,
        height: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
    }
});