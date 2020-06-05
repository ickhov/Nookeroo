/**
 * Recipe detail page
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

export default function RecipeDetail({ route, navigation }) {

    const data = route.params.data;
    const name = lowercasetoUppercase(route.params.name);

    function lowercasetoUppercase(str) {
        var splitString = str.split(' ');
        for (i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        }
        return splitString.join(' ');
    };

    const sources = data['obtained_from'] != [] ? data['obtained_from'].join(' & ') : '-';

    const materialNames = Object.keys(data['materials']);
    const materialValues = Object.values(data['materials']);

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
                            source={{ uri: data['image_url'] ?? data['size_image_url']}}
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
                            leftImageSource={require('../../assets/icons/miscellaneous/cranny.png')}
                            rightImageSource={require('../../assets/icons/miscellaneous/bells.png')}
                            text={data['price']} />
                    </View>

                    {/* Sources Tab */}
                    <ContentWithHeader title={'Sources'}
                        text={sources === '' ? '-' : sources}
                        containerStyle={[styles.miscContainer, {
                            marginTop: 20,
                        }]}
                        titleContainerStyle={styles.miscTitle}
                        textContainerStyle={styles.miscText} />

                    {/* Materials Tab */}
                    <RoundBorderText
                        text="Materials"
                        containerStyle={styles.infoTitleContainer}
                        textStyle={styles.infoTitle} />

                    {materialNames.map((item, index) => {
                        return (
                            <View style={styles.materialContainer} key={index}>
                            {/* Image */}
                            <CachedImage
                                source={{ uri: materialValues[index]['image_url']}}
                                style={{
                                    width: '30%',
                                    height: 50,
                                    resizeMode: 'contain',
                                }} />
                            
                            {/* Name Tab */}
                            <RoundBorderText
                                text={materialValues[index]['amount'] + ' ' + item}
                                containerStyle={[styles.nameContainer, {
                                    width: '70%'
                                }]}
                                textStyle={[styles.nameText, {
                                    textAlign: 'left',
                                    fontFamily: Fonts.medium,
                                    fontSize: Fonts.size.text,
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
        fontSize: Fonts.size.title,
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
        paddingHorizontal: 20,
    },
    materialContainer: {
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