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
 * isIcon = true,
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CachedImage } from "react-native-img-cache";
import Fonts from '../../assets/fonts';
import CONSTANTS from '../constants';



export default class ImageButton extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity
                style={[styles.container, this.props.style]}
                activeOpacity={0.5}
                onPress={this.props.onPress}>

                {
                    this.props.imageSource &&
                    <CachedImage
                        source={{ uri: CONSTANTS.icons.link + this.props.imageSource }}
                        style={[styles.imageStyle, this.props.imageStyle]}
                    />
                }

                <View style={styles.lineSeparator} />
                <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.text ?? "Raymond"}</Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
    },
    underlayColor: {
        backgroundColor: '#fff',
    },
    imageStyle: {
        width: 50,
        height: 50,
    },
    lineSeparator: {
        backgroundColor: '#fff',
        width: 0,
        height: 10,
    },
    textStyle: {
        fontSize: Fonts.size.text,
        textAlign: 'center',
        color: '#fff',
    }
});