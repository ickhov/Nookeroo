/**
 * Stack market list
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';

import {
    StyleSheet,
    View,
} from 'react-native';

import ImageButton from '../components/imageButton';

export default class Marketplace extends Component {
    constructor(props) {
        super(props);

        this.artSelected = this.artSelected.bind(this);
        this.bugSelected = this.bugSelected.bind(this);
        this.fishSelected = this.fishSelected.bind(this);
        this.fossilSelected = this.fossilSelected.bind(this);
        this.villagerSelected = this.villagerSelected.bind(this);
    }

    artSelected = () => {
        this.props.navigation.navigate('GuideArts');
    };

    bugSelected = () => {
        this.props.navigation.navigate('GuideBugs');
    };

    fishSelected = () => {
        this.props.navigation.navigate('GuideFishes');
    };

    fossilSelected = () => {
        this.props.navigation.navigate('GuideFossils');
    };

    villagerSelected = () => {
        this.props.navigation.navigate('GuideVillagers');
    };

    render() {
        return (
            <View style={styles.container}>
                {/* Menu for selecting the purpose for hosting island */}
                <View style={styles.optionContainer}>

                    <ImageButton
                        style={styles.btn}
                        onPress={this.artSelected}
                        imageSource={require('../../assets/icons/art/amazing_painting.png')}
                        imageStyle={styles.image}
                        textStyle={styles.btnTextWhite}
                        text={'Stalk Market'} />

                    <ImageButton
                        style={styles.btn}
                        onPress={this.bugSelected}
                        imageSource={require('../../assets/icons/bugs/queen_alexandras_birdwing.png')}
                        imageStyle={styles.image}
                        textStyle={styles.btnTextWhite}
                        text={'Cataloging'} />

                    <ImageButton
                        style={styles.btn}
                        onPress={this.fishSelected}
                        imageSource={require('../../assets/icons/fish/koi.png')}
                        imageStyle={styles.image}
                        textStyle={styles.btnTextWhite}
                        text={'Crafting & DIY'} />

                    <ImageButton
                        style={styles.btn}
                        onPress={this.fossilSelected}
                        imageSource={require('../../assets/images/fossils/trilobite.png')}
                        imageStyle={styles.image}
                        textStyle={styles.btnTextWhite}
                        text={'Special Villagers'} />

                    <ImageButton
                        style={styles.btn}
                        onPress={this.villagerSelected}
                        imageSource={require('../../assets/icons/villagers/cat23.png')}
                        imageStyle={styles.image}
                        textStyle={styles.btnTextWhite}
                        text={'Other'} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    optionContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 70,
        height: 70,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 20,
        width: '40%',
        marginBottom: 10
    },
    btnTextWhite: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.black,
    },
});
