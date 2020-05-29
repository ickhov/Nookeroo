/**
 * Custom imageButton component
 * 
 * Properties that can be initialize:
 * onPress
 * imageSource
 * text
 * _progress = 0,
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef, Component, createRef } from 'react';

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

export default function ImageButtonWithProgressBar(props) {

    let animation = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation.current, {
            toValue: props.progress,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [props.progress]);

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.progressBarContainer}>
            <Animated.View ref={this.animation} style={[StyleSheet.absoluteFill], { backgroundColor: Colors.primary, width }} />
        </View>
    );

};

const styles = StyleSheet.create({
    progressBarContainer: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: Colors.white,
    }
});