/**
 * Custom imageButton component
 * 
 * Properties that can be initialize:
 * containerStyle
 * leftImageSource
 * rightImageSource
 * leftImageStyle
 * rightImageStyle
 * text
 * textStyle,
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';

export default function textWithImages({
    containerStyle,
    leftImageSource,
    rightImageSource,
    leftImageStyle,
    rightImageStyle,
    text,
    textStyle,
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            {/* Image */}
            <Image
                source={leftImageSource ?? require('../../assets/icons/menu/villagers.png')}
                style={[styles.leftImage, leftImageStyle]} />
            {/* Name Tab */}
            <Text style={[styles.text, textStyle]}>{text}</Text>

            {/* Right Image */}
            {
                rightImageSource &&
                <Image
                    source={rightImageSource}
                    style={[styles.rightImage, rightImageStyle]} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: Fonts.medium,
        fontSize: 18,
        paddingVertical: 10,
        paddingLeft: 10,
        color: Colors.white,
        textAlign: 'right',
    },
    rightImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});