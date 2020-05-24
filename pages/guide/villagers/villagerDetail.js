/**
 * Stack market list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import RoundBorderText from '../../components/roundBorderText';



export default function VillagerDetailGuide({ route, navigation }) {

    const data = route.params.data;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {/* Villager Image */}
                <Image
                    source={{ uri: 'http://acnhapi.com/images/villagers/' + data.id }}
                    style={styles.image} />
                {/* Name Tab */}
                <RoundBorderText
                    text={route.params.name}
                    containerStyle={styles.nameContainer}
                    textStyle={styles.nameText} />
            </View>

            {/* Species Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="SPECIES"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data.species}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

            {/* Personality Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="PERSONALITY"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data.personality}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

            {/* Birthday Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="BIRTHDAY"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data['birthday-string']}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

            {/* Gender Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="GENDER"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data.gender}
                    containerStyle={styles.infoTextContainer}
                    textStyle={styles.infoText} />
            </View>

            {/* Catchphrase Tab */}
            <View style={styles.infoContainer}>
                <RoundBorderText
                    text="CATCHPHRASE"
                    containerStyle={styles.infoTitleContainer}
                    textStyle={styles.infoTitle} />
                <RoundBorderText
                    text={data['catch-phrase']}
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
        borderRadius: 75,
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
        fontSize: 30,
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
        fontSize: 20,
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
        fontSize: 18,
        padding: 0,
        paddingBottom: 10,
        paddingHorizontal: 10,
        color: Colors.black
    }
});
