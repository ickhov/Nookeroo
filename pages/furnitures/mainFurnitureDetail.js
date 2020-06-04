/**
 * Art detail page
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import RoundBorderText from '../components/roundBorderText';
import ContentWithHeader from '../components/contentWithHeader';
import TextWithImages from '../components/textWithImages';
import {CachedImage} from "react-native-img-cache";

export default function MainFurnitureDetail({ route, navigation }) {

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
                        {/* Image */}
                        <CachedImage
                            source={{ uri: data[0]['image_uri'] ?? data[0]['icon_uri'] }}
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
                                leftImageSource={require('../../assets/icons/miscellaneous/cranny.png')}
                                rightImageSource={require('../../assets/icons/miscellaneous/bells.png')}
                                text={data[0]['buy-price'] ?? '-'} />
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
                                leftImageSource={require('../../assets/icons/miscellaneous/cranny.png')}
                                rightImageSource={require('../../assets/icons/miscellaneous/bells.png')}
                                text={data[0]['sell-price'] ?? '-'} />
                        </View>

                    </View>

                    {/* Source Tab */}
                    <ContentWithHeader title={'Source'}
                        text={data[0]['isDIY'] ? 'DIY Recipes' : data[0]['isCatalog'] ? 'Catalog' : 'Special Events'}
                        containerStyle={[styles.miscContainer, {
                            marginTop: 20,
                        }]}
                        titleContainerStyle={styles.miscTitle}
                        textContainerStyle={styles.miscText} />
                    {/* Type Tab */}
                    <ContentWithHeader title={'Type'}
                        text={data[0]['tag'] ?? '-'}
                        containerStyle={styles.miscContainer}
                        titleContainerStyle={styles.miscTitle}
                        textContainerStyle={styles.miscText} />
                    {/* Customizable Tab */}
                    <ContentWithHeader title={'Customizable'}
                        text={data[0]['canCustomizeBody'] || data[0]['canCustomizePattern'] ? 'Yes' : 'No'}
                        containerStyle={styles.miscContainer}
                        titleContainerStyle={styles.miscTitle}
                        textContainerStyle={styles.miscText} />

                    {
                        data.length > 1 &&
                        <RoundBorderText
                        text="Variance"
                        containerStyle={styles.infoTitleContainer}
                        textStyle={styles.infoTitle} />
                    }

                    {data.length > 1 && data.map((item, index) => {
                        return (
                            <View style={styles.varianceContainer} key={index}>
                            {/* Image */}
                            <CachedImage
                                source={{ uri: item['image_uri'] ?? item['icon_uri'] }}
                                style={[styles.image, {
                                    width: '50%'
                                }]} />
                            {/* Name Tab */}
                            <RoundBorderText
                                text={item['variant']}
                                containerStyle={[styles.nameContainer, {
                                    width: '50%'
                                }]}
                                textStyle={[styles.nameText, {
                                    textAlign: 'left'
                                }]} />
                        </View>
                        );
                     })}

                     <View style={{
                         marginBottom: 20,
                     }}></View>
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
        fontSize: 20,
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
    obtainableImage: {
        width: '100%',
        height: 40,
        resizeMode: 'contain',
    },
    obtainableText: {
        width: '100%',
        fontSize: 18,
        fontFamily: Fonts.medium,
        textAlign: 'center',
        paddingVertical: 10,
        color: Colors.white,
        backgroundColor: Colors.tertiary
    },
    miscContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        borderWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.primary,
    },
    miscTitle: {
        width: '50%',
        textAlign: 'center',
    },
    miscText: {
        width: '50%',
        textAlign: 'left',
        paddingLeft: 20,
    },
    varianceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: Colors.tertiary,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: Colors.primary,
    },
});