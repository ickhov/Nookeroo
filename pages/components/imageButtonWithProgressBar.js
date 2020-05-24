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

export default function ImageButtonWithProgressBar({
    onPress,
    imageSource,
    text,
    _progress = 0,
}) {

    const [progress, setProgress] = useState(_progress);

    let animation = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation.current, {
            toValue: progress,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.5}
                onPress={onPress}>
                <Image
                    source={imageSource ?? require('../../assets/icons/villagers/cat23.png')}
                    style={styles.imageStyle}
                />
                <View style={styles.lineSeparator} />
                <Text style={styles.textStyle}>{text ?? "Raymond"}</Text>
            </TouchableOpacity>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: Colors.secondary, width }} />
            </View>
            <View style={styles.progressTextContainer}>
                <Text style={styles.progressTextStyle}>{`${progress}% Completed`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        padding: 8,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        width: '100%',
        marginTop: 20,
        marginHorizontal: 10,
    },
    imageStyle: {
        width: 50,
        height: 50,
    },
    lineSeparator: {
        width: 0,
        height: 10,
    },
    textStyle: {
        fontFamily: Fonts.medium,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.black,
    },
    progressBar: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: Colors.white,
    },
    progressTextContainer: {
        backgroundColor: Colors.tertiary,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        width: '100%'
    },
    progressTextStyle: {
        fontFamily: Fonts.regular,
        textAlign: 'center',
        color: Colors.black,
        padding: 10,
    }
});