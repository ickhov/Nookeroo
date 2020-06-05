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
import { CachedImage } from 'react-native-img-cache';

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
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootStyle}
                contentContainerStyle={styles.rootContainer}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {/* Fossil Image */}
                        <CachedImage
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
                        text="Sell"
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
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    rootStyle: {
        backgroundColor: Colors.background,
        width: '100%',
    },
    rootContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        width: '40%',
        height: 100,
        resizeMode: 'contain',
    },
    nameContainer: {
        width: '60%',
        backgroundColor: Colors.none,
        borderRadius: 0,
    },
    nameText: {
        width: '100%',
        fontFamily: Fonts.bold,
        fontSize: Fonts.size.title,
    },
    descriptionContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        marginVertical: 20,
    },
    descriptionText: {
        fontFamily: Fonts.bold,
        fontSize: Fonts.size.text,
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
        fontSize: Fonts.size.text,
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