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
    StatusBar,
} from 'react-native';

import PopUpDialog from '../components/popUpDialog';

export default class StalkMarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: 0,
            optionTurnipsColor: Colors.primary,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.none,
            dodoCode: '',
            islandName: '',
            turnipPrice: '',
            entryFee: '',
            additionalInfo: '',
        };

        this.turnipSelected = this.turnipSelected.bind(this);
        this.catalogingSelected = this.catalogingSelected.bind(this);
        this.craftingSelected = this.craftingSelected.bind(this);
        this.otherSelected = this.otherSelected.bind(this);
    }

    turnipSelected = () => {
        this.setState({
            optionTurnipsColor: Colors.primary,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.none,
        })
    }

    catalogingSelected = () => {
        this.setState({
            optionTurnipsColor: Colors.none,
            optionCatalogingColor: Colors.primary,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.none,
        })
    }

    craftingSelected = () => {
        this.setState({
            optionTurnipsColor: Colors.none,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.primary,
            optionOtherColor: Colors.none,
        })
    }

    otherSelected = () => {
        this.setState({
            optionTurnipsColor: Colors.none,
            optionCatalogingColor: Colors.none,
            optionCraftingColor: Colors.none,
            optionOtherColor: Colors.primary,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Host Your Island</Text>

                <Text style={styles.header}>What are you hosting for?</Text>

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
                        <Text style={styles.btnTextWhite}>Crafting</Text>
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
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        fontFamily: Fonts.normal,
        width: '70%',
        height: '100%',
        backgroundColor: Colors.white,
        paddingLeft: 10,
        paddingRight: 10,
    },



    btn: {
        backgroundColor: Colors.dark,
        padding: 16,
        width: '50%',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    btnNoBackground: {
        backgroundColor: Colors.none,
        padding: 8,
        width: '90%',
    },
    btnTextWhite: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
    },
    btnTextBlack: {
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.black,
        textDecorationLine: 'underline',
    },
});
