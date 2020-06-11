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
            {
                leftImageSource && text !== '-' &&
                <Image
                source={leftImageSource}
                style={[styles.leftImage, leftImageStyle]} />
            }

            {/* Name Tab */}
            {
                text !== '-' ?
                <Text style={[styles.text, textStyle]}>{text}</Text>
                :
                <Text style={[styles.text, textStyle, {
                    paddingLeft: 0
                }]}>{text}</Text>
            }

            {/* Right Image */}
            {
                rightImageSource && text !== '-' &&
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
        fontSize: Fonts.size.text,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 5,
        color: Colors.white,
        textAlign: 'center',
    },
    rightImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});