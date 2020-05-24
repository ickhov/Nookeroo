import React from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function RoundBorderText({
    text,
    containerStyle,
    textStyle
}) {

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.subBackground,
        borderRadius: 20,
    },
    textStyle: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
        padding: 20,
    },
});