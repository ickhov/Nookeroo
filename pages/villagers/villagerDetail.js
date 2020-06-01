/**
 * Villager Detail
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import ContentWithHeader from '../components/contentWithHeader';

export default function VillagerDetail({ route, navigation }) {

    const data = route.params.data;

    return (
        <View style={styles.rootContainer}>
            <View style={styles.container}>

                {/* Villager Image */}
                <Image
                    source={{ uri: 'https://ickhov.github.io/nookeroo/images/villagers/' + data['file-name'] + '.png' }}
                    style={styles.image} />

                {/* Name Tab */}
                <Text style={styles.nameText}>{route.params.name}</Text>

                {/* Species Tab */}
                <ContentWithHeader title={"SPECIES"}
                    text={data.species}
                    containerStyle={[styles.infoContainer, {
                        marginTop: 20,
                    }]}
                    titleContainerStyle={styles.infoTitle}
                    textContainerStyle={styles.infoText} />
                {/* Personality Tab */}
                <ContentWithHeader title={"PERSONALITY"}
                    text={data.personality}
                    containerStyle={styles.infoContainer}
                    titleContainerStyle={styles.infoTitle}
                    textContainerStyle={styles.infoText} />
                {/* Birthday Tab */}
                <ContentWithHeader title={"BIRTHDAY"}
                    text={data['birthday-string']}
                    containerStyle={styles.infoContainer}
                    titleContainerStyle={styles.infoTitle}
                    textContainerStyle={styles.infoText} />
                {/* Gender Tab */}
                <ContentWithHeader title={"GENDER"}
                    text={data.gender}
                    containerStyle={styles.infoContainer}
                    titleContainerStyle={styles.infoTitle}
                    textContainerStyle={styles.infoText} />
                {/* Catchphrase Tab */}
                <ContentWithHeader title={"CATCHPHRASE"}
                    text={`"${data['catch-phrase']}"`}
                    containerStyle={[styles.infoContainer, {
                        marginBottom: 20,
                    }]}
                    titleContainerStyle={styles.infoTitle}
                    textContainerStyle={styles.infoText} />

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
        padding: 20,
        backgroundColor: Colors.tertiary,
        width: '100%',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 75,
        marginVertical: 20,
    },
    nameText: {
        width: '100%',
        fontFamily: Fonts.bold,
        fontSize: 25,
        backgroundColor: Colors.tertiary,
        textAlign: 'center',
        padding: 10,
        color: Colors.white,
    },
    infoContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
        borderWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.primary,
    },
    infoTitle: {
        width: '40%',
        textAlign: 'center',
    },
    infoText: {
        width: '60%',
        textAlign: 'left',
        paddingLeft: 20,
    },
});
