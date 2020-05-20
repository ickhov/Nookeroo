import React, { Component } from 'react';
import Colors from '../../assets/colors';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

export default class CustomStatusBar extends Component {
    render() {
        return (
            <View style={[styles.statusBar, this.props.style || {}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
        backgroundColor: Colors.primary,
    }
});