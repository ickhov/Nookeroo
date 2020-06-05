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

import React, { PureComponent } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import ProgressBar from './progressBar';

export default class TextWithProgressBar extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
                <ProgressBar
                    containerStyle={{
                        width: '35%'
                    }}
                    progress={this.props.progress}
                    ProgressBarColor={Colors.tertiary} />
                <Text style={styles.progressTextStyle}>{this.props.progressText}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        backgroundColor: Colors.secondary,
    },
    textStyle: {
        fontFamily: Fonts.medium,
        fontSize: Fonts.size.header,
        textAlign: 'center',
        color: Colors.white,
        paddingVertical: 10,
        width: '27%'
    },
    progressTextStyle: {
        fontFamily: Fonts.regular,
        textAlign: 'left',
        color: Colors.white,
        paddingVertical: 10,
        paddingLeft: 20,
        fontSize: Fonts.size.text,
        width: '38%'
    }
});