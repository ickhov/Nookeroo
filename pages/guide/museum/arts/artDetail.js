/**
 * Art detail page
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import RoundBorderText from '../../../components/roundBorderText';

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
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {/* Art Image */}
                <Image
                    source={{ uri: 'https://ickhov.github.io/nookeroo/icons/art/' + data['file-name'] + '.png' }}
                    style={styles.image} />
                {/* Name Tab */}
                <RoundBorderText
                    text={name}
                    containerStyle={styles.nameContainer}
                    textStyle={styles.nameText} />
            </View>

            {/* Buy Price Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="BUY PRICE"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data['buy-price']}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

            {/* Sell Price Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="SELL PRICE"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data['sell-price']}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

            {/* Has Fake Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="Has Fake Version"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data['hasFake'] ? 'Yes' : 'No'}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    nameContainer: {
        flex: 1,
        width: '60%',
        backgroundColor: Colors.primary,
        marginLeft: 20,
        borderRadius: 100,
    },
    nameText: {
        fontFamily: Fonts.bold,
        fontSize: 25,
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '42%',
        marginTop: 20,
        marginHorizontal: 10,
    },
    infoTitleContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        width: '100%',
    },
    infoTitle: {
        fontFamily: Fonts.bold,
        fontSize: 18,
        padding: 0,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    infoTextContainer: {
        backgroundColor: Colors.tertiary,
        borderRadius: 0,
        width: '100%',
    },
    infoText: {
        fontFamily: Fonts.medium,
        fontSize: 16,
        padding: 0,
        paddingBottom: 10,
        paddingHorizontal: 10,
        color: Colors.black
    }
});