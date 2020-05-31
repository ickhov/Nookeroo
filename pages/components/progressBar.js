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

import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Animated,
} from 'react-native';

import Colors from '../../assets/colors';

export default class ProgressBar extends Component {

    constructor(props) {
        super(props);

        this.animation = new Animated.Value(0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.progress !== this.props.progress) {
            Animated.timing(this.animation, {
                toValue: this.props.progress,
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    }

    render() {
        const width = this.animation.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.progressBarContainer}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: Colors.primary, width }} />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    progressBarContainer: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: Colors.white,
    }
});