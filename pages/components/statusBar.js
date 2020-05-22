import React from 'react';
import Colors from '../../assets/colors';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

export default function CustomStatusBar({
    style
}) {
    return (
        <View style={[styles.statusBar, style]}>
        </View>
    );

}

const styles = StyleSheet.create({
    statusBar: {
        height: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: Colors.primary,
    }
});