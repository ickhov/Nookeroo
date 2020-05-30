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
        fontSize: 16,
        textAlign: 'left',
        color: '#fff',
    }
});