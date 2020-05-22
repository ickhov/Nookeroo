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

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PopUpDialog from '../components/popUpDialog';

export default class HostingIsland extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: 0,
            turnipSelected: true,
            optionTurnipsColor: Colors.primary,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.none,
            dodoCode: '',
            islandName: '',
            turnipPrice: '',
            maxQueueSize: '',
            maxIslandSize: '',
            entryFee: '',
            additionalInfo: '',
        };

        this.turnipSelected = this.turnipSelected.bind(this);
        this.catalogingSelected = this.catalogingSelected.bind(this);
        this.craftingSelected = this.craftingSelected.bind(this);
        this.otherSelected = this.otherSelected.bind(this);
    }

    // highlight 'Turnip' option
    turnipSelected = () => {
        this.setState({
            turnipSelected: true,
            optionTurnipsColor: Colors.primary,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.none,
        })
    }

    // highlight 'Cataloging' option
    catalogingSelected = () => {
        this.setState({
            turnipSelected: false,
            optionTurnipsColor: Colors.none,
            optionCatalogingColor: Colors.primary,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.none,
        })
    }

    // highlight 'Crafting/DIY' option
    craftingSelected = () => {
        this.setState({
            turnipSelected: false,
            optionTurnipsColor: Colors.none,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.primary,
            optionOtherColor: Colors.none,
        })
    }

    // highlight 'Other' option
    otherSelected = () => {
        this.setState({
            turnipSelected: false,
            optionTurnipsColor: Colors.none,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.primary,
        })
    }

    render() {
        return (
            <KeyboardAwareScrollView
                style={{ backgroundColor: Colors.background }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={true}>
                <Text style={styles.title}>Host Your Island</Text>

                <Text style={styles.header}>What are you hosting for?</Text>

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

                <Text style={[styles.header, {
                    marginTop: 0,
                    marginBottom: 10,
                }]}>* indicates a required field.</Text>

                {/* Dodo Code */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Dodo Code*</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(dodoCode) => this.setState({ dodoCode })}
                        value={this.state.dodoCode}
                        keyboardType="default"
                        autoCapitalize="characters"
                        returnKeyType="done"
                    />
                </View>

                {/* Island Name */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Island Name*</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(islandName) => this.setState({ islandName })}
                        value={this.state.islandName}
                        keyboardType="default"
                        autoCapitalize="words"
                        returnKeyType="done"
                    />
                </View>

                {/* Turnip Price (Only for hosting turnip) */}
                {
                    this.state.turnipSelected &&
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeader}>Turnip Price*</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(turnipPrice) => this.setState({ turnipPrice })}
                            value={this.state.turnipPrice}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            returnKeyType="done"
                        />
                    </View>
                }

                {/* Maximum number of people that can be in the queue */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Queue Size*</Text>
                    <TextInput
                        placeholder="Maximum queue size"
                        style={styles.input}
                        onChangeText={(turnipPrice) => this.setState({ turnipPrice })}
                        value={this.state.turnipPrice}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                </View>

                {/* Maximum number of people that can be on the island */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Max Vistors*</Text>
                    <TextInput
                        placeholder="Maximum visitors at a time"
                        style={styles.input}
                        onChangeText={(turnipPrice) => this.setState({ turnipPrice })}
                        value={this.state.turnipPrice}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                </View>

                {/* Entry fee (optional) */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Entry Fee</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(entryFee) => this.setState({ entryFee })}
                        value={this.state.entryFee}
                        keyboardType="default"
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                </View>

                {/* Additional info regarding hosting */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Additional Information</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(additionalInfo) => this.setState({ additionalInfo })}
                        value={this.state.additionalInfo}
                        keyboardType="default"
                        autoCapitalize="sentences"
                        returnKeyType="done"
                        blurOnSubmit={true}
                        multiline={true}
                    />
                </View>

                <TouchableHighlight
                    style={styles.btn}
                    activeOpacity={0.5}
                    underlayColor={Colors.primary}
                    onPress={this.signInUser}>
                    <Text style={styles.btnTextWhite}>Host My Island</Text>
                </TouchableHighlight>

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
            </KeyboardAwareScrollView>
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
