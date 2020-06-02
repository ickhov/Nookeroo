/**
 * Fossil detail page
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import RoundBorderText from '../../components/roundBorderText';
import TextWithImages from '../../components/textWithImages';
import CONSTANTS from '../../constants';

export default function FossilDetail({ route, navigation }) {

    const data = route.params.data;
    const name = lowercasetoUppercase(route.params.name);

    function lowercasetoUppercase(str) {
        var splitString = str.split(' ');
        for (i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        }
        return splitString.join(' ');
    };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {/* Fossil Image */}
                    <Image
                        source={{ uri: data['image_uri'] ?? data['icon_uri'] }}
                        style={styles.image} />
                    {/* Name Tab */}
                    <RoundBorderText
                        text={name}
                        containerStyle={styles.nameContainer}
                        textStyle={styles.nameText} />
                </View>

                {/* Price Tab */}
                <RoundBorderText
                    text="Price"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <View style={styles.bellContainer}>
                    <TextWithImages
                        containerStyle={{ width: '45%' }}
                        leftImageSource={require('../../../assets/icons/miscellaneous/cranny.png')}
                        rightImageSource={require('../../../assets/icons/miscellaneous/bells.png')}
                        text={data.price} />
                </View>

                {/* Blathers' Description Tab */}
                <RoundBorderText
                    text={data['museum-phrase'] + '\n' + `\t\t\t\t\t\t\t - Blathers`}
                    containerStyle={styles.descriptionContainer}
                    textStyle={styles.descriptionText} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background,
        width: '100%',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        width: '90%',
        borderRadius: 20,
        marginVertical: 20,
    },
    imageContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: Colors.tertiary,
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    nameContainer: {
        flex: 1,
        backgroundColor: Colors.none,
        borderRadius: 0,
    },
    nameText: {
        fontFamily: Fonts.bold,
        fontSize: 20,
    },
    descriptionContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        marginVertical: 20,
    },
    descriptionText: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        padding: 20,
        textAlign: 'left',
    },
    infoTitleContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        borderWidth: 0,
        marginTop: 20,
    },
    infoTitle: {
        fontFamily: Fonts.bold,
        fontSize: 18,
        padding: 10,
    },
    bellContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.tertiary,
        width: '100%',
        padding: 10,
    }
});