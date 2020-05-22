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
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import PopUpDialog from '../components/popUpDialog';

export default class Marketplace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }

    render() {
        return (
            <View style={styles.container}>
                {/* Menu for selecting the purpose for hosting island */}
                <View style={styles.optionContainer}>
                    <TouchableHighlight
                        style={[styles.optionBtn, {
                            backgroundColor: this.state.optionTurnipsColor
                        }]}
                        activeOpacity={0.5}
                        underlayColor={Colors.primary}
                        onPress={this.turnipSelected}>
                        <Text style={styles.btnTextWhite}>Turnips</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.optionBtn, {
                            backgroundColor: this.state.optionCatalogingColor
                        }]}
                        activeOpacity={0.5}
                        underlayColor={Colors.primary}
                        onPress={this.catalogingSelected}>
                        <Text style={styles.btnTextWhite}>Cataloging</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.optionBtn, {
                            backgroundColor: this.state.optionCraftingColor
                        }]}
                        activeOpacity={0.5}
                        underlayColor={Colors.primary}
                        onPress={this.craftingSelected}>
                        <Text style={styles.btnTextWhite}>Crafting/DIY</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.optionBtn, {
                            backgroundColor: this.state.optionOtherColor
                        }]}
                        activeOpacity={0.5}
                        underlayColor={Colors.primary}
                        onPress={this.otherSelected}>
                        <Text style={styles.btnTextWhite}>Other</Text>
                    </TouchableHighlight>
                </View>

                {/* Show an alert when there's something wrong */}
                <PopUpDialog
                    showAlert={this.state.showAlert}
                    title="Something went wrong!"
                    message={this.state.errorMessage}
                    cancelText="Dismiss"
                    onCancelPressed={() => {
                        this.setState({ showAlert: false });
                    }}
                />
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
    title: {
        fontFamily: Fonts.bold,
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 24,
        paddingBottom: 8,
        backgroundColor: Colors.primary,
        width: '100%',
    },
    header: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
        padding: 10,
        marginTop: 16,
        color: Colors.white,
        backgroundColor: Colors.headerbackground
    },
    optionContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    optionBtn: {
        backgroundColor: Colors.none,
        padding: 8,
        borderRadius: 20,
        width: '30%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.headerbackground,
        marginBottom: 10,
    },
    inputHeader: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        width: '30%',
        color: Colors.white,
        padding: 10,
    },
    input: {
        fontFamily: Fonts.normal,
        width: '67%',
        height: '100%',
        backgroundColor: Colors.white,
        paddingLeft: 10,
        paddingRight: 10,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 16,
        width: '50%',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    btnTextWhite: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
    }
});
