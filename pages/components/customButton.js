/**
 * Custom buttons component to use with museum list
 * 
 * Properties that can be initialize:
 * name
 * onPress
 * imageSource
 * isIcon = true
 * hasCollected = false,
 * toggleCheckBox
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CONSTANTS from '../constants';
import { CachedImage } from "react-native-img-cache";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

function convertJSONString(str) {
    var splitString = str.split('_');
    for (i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
};

const CustomCheckBox = (props) => {
    return (

        Platform.OS === 'ios' ?
            <CheckBox
                style={styles.checkBoxStyle}
                value={props.hasCollected}
                onValueChange={props.onPress}
                tintColor={Colors.white}
                onCheckColor={Colors.tertiary}
                onTintColor={Colors.tertiary}
            />
            :
            <CheckBox
                style={styles.checkBoxStyle}
                value={props.hasCollected}
                onValueChange={props.toggleCheckBox}
                tintColors={{ true: Colors.primary, false: Colors.white }}
            />

    )
}

export default class CustomButton extends PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            hasCollected: props.hasCollected ?? false
        }

    }

    render() {
        const text = convertJSONString(this.props.name);

        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    activeOpacity={0.5}
                    onPress={this.props.onPress}>

                    {
                        this.props.imageSource &&
                        <CachedImage
                            source={{ uri: this.props.imageSource }}
                            style={styles.imageStyle}
                        />
                    }

                    <Text style={styles.textStyle}>{text}</Text>

                </TouchableOpacity>

                <CustomCheckBox hasCollected={this.state.hasCollected} onPress={this.props.toggleCheckBox} />

                <TouchableOpacity
                    style={styles.arrowContainer}
                    activeOpacity={0.5}
                    onPress={this.props.onPress}>

                    <Text style={styles.arrowStyle}>
                        <Icons name={'chevron-right'} size={26} color={Colors.white} />;
                </Text>

                </TouchableOpacity>

            </View>

        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: Colors.subBackground,
        padding: 10,
        paddingLeft: 20,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: Colors.black
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    },
    imageStyle: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    textStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        textAlign: 'left',
        color: Colors.white,
        paddingLeft: 20,
    },
    checkBoxStyle: {
        width: '10%',
    },
    arrowContainer: {
        width: '10%',
    },
    arrowStyle: {
        textAlign: 'right',
        color: Colors.none,
    }
});