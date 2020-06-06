/**
 * Art detail page
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import RoundBorderText from '../../components/roundBorderText';
import ContentWithHeader from '../../components/contentWithHeader';
import TextWithImages from '../../components/textWithImages';
import CONSTANTS from '../../constants';
import { CachedImage } from 'react-native-img-cache';

export default function ArtDetail({ route, navigation }) {

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
                        {/* Bug Image */}
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
                    <View style={styles.bellContainer}>
                        <View style={[styles.bellInfoContainer, {
                            borderRightWidth: 1,
                            borderColor: Colors.primary
                        }]}>
                            <RoundBorderText
                                text="Buy"
                                containerStyle={styles.bellTitleContainer}
                                textStyle={styles.infoTitle} />
                            <TextWithImages
                                containerStyle={styles.bellInfo}
                                leftImageSource={require('../../../assets/icons/miscellaneous/redd.png')}
                                rightImageSource={require('../../../assets/icons/miscellaneous/bells.png')}
                                text={data['buy-price']} />
                        </View>

                        <View style={[styles.bellInfoContainer, {
                            borderLeftWidth: 1,
                            borderColor: Colors.primary
                        }]}>
                            <RoundBorderText
                                text="Sell"
                                containerStyle={styles.bellTitleContainer}
                                textStyle={styles.infoTitle} />
                            <TextWithImages
                                containerStyle={styles.bellInfo}
                                leftImageSource={require('../../../assets/icons/miscellaneous/cranny.png')}
                                rightImageSource={require('../../../assets/icons/miscellaneous/bells.png')}
                                text={data['sell-price']} />
                        </View>

                    </View>

                    {/* Authenticity Tab */}
                    <ContentWithHeader title={'Authenticity'}
                        text={data['hasFake'] ? 'CAN BE FAKE' : 'ALWAYS REAL'}
                        containerStyle={styles.availabilityContainer}
                        titleContainerStyle={styles.availabilityTitle}
                        textContainerStyle={styles.availabilityText} />
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
        fontSize: Fonts.size.header,
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
        marginTop: 20,
    },
    bellInfoContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '50%',
        borderWidth: 0,
    },
    bellTitleContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        borderWidth: 0,
    },
    bellInfo: {
        width: '100%',
        backgroundColor: Colors.tertiary,
        padding: 10,
    },
    availabilityContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        borderWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.primary,
        marginTop: 20,
        marginBottom: 20,
    },
    availabilityTitle: {
        width: '50%',
        textAlign: 'center',
    },
    availabilityText: {
        width: '50%',
        textAlign: 'left',
        paddingHorizontal: 20,
    },
});