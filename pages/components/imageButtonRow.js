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
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Fonts from '../../assets/fonts';


export default function ImageButtonRow({
    style,
    onPress,
    imageSource,
    imageStyle,
    textStyle,
    text,
    setTextLeft = false
}) {

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            activeOpacity={0.5}
            onPress={onPress}>

            {/* Switch the position of text and image */}

            {
                setTextLeft ?
                    <Text style={[styles.textStyle, textStyle]} >{text ?? "Raymond"}</Text>
                    :
                    <Image
                        source={imageSource ?? require('../../assets/icons/menu/villagers.png')}
                        style={[styles.imageStyle, imageStyle]}
                    />
            }

            {
                setTextLeft ?
                    <Image
                        source={imageSource ?? require('../../assets/icons/menu/villagers.png')}
                        style={[styles.imageStyle, imageStyle]}
                    />
                    :
                    <Text style={[styles.textStyle, textStyle]} >{text ?? "Raymond"}</Text>
            }

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    imageStyle: {
        width: '35%',
        resizeMode: 'contain',
    },
    textStyle: {
        width: '40%',
        fontSize: Fonts.size.text,
        textAlign: 'left',
        color: '#fff',
    }
});