/**
 * Art detail page
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import RoundBorderText from '../../../components/roundBorderText';

import Months from '../../../helper/month';
import ContentWithHeader from '../../../components/contentWithHeader';

export default function VillagerDetailGuide({ route, navigation }) {

    const data = route.params.data;
    const name = lowercasetoUppercase(route.params.name);
    const availability = data.availability;

    function lowercasetoUppercase(str) {
        var splitString = str.split(' ');
        for (i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        }
        return splitString.join(' ');
    };

    function convertNumtoMonth(str) {
        var splitString = str.split('-');
        splitString[0] = Months[splitString[0]];
        splitString[1] = Months[splitString[1]];
        return splitString.join(' - ');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootStyle}
                contentContainerStyle={styles.rootContainer}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {/* Art Image */}
                        <Image
                            source={{ uri: 'https://ickhov.github.io/nookeroo/images/bugs/' + data['file-name'] + '.png' }}
                            style={styles.image} />
                        {/* Name Tab */}
                        <RoundBorderText
                            text={name}
                            containerStyle={styles.nameContainer}
                            textStyle={styles.nameText} />
                    </View>

                    {/* Blathers' Description Tab */}
                    <RoundBorderText
                        text={data['museum-phrase'] + '\n' + `\t\t\t\t\t\t\t - Blathers`}
                        containerStyle={styles.descriptionContainer}
                        textStyle={styles.descriptionText} />

                    {/* Availablity (Calender) Tab */}
                    <View style={styles.calenderContainer}>
                        <ContentWithHeader title={'January'} text={'N'} />
                        <ContentWithHeader title={'Febuary'} text={'N'} />
                        <ContentWithHeader title={'March'} text={'N'} />
                        <ContentWithHeader title={'April'} text={'N'} />
                        <ContentWithHeader title={'May'} text={'N'} />
                        <ContentWithHeader title={'January'} text={'N'} />
                        <ContentWithHeader title={'January'} text={'N'} />
                        <ContentWithHeader title={'January'} text={'N'} />
                    </View>

                    {/* Information Tab */}
                    <View style={styles.infoContainer}>
                        <RoundBorderText
                            text="Availability"
                            containerStyle={styles.infoTitleContainer}
                            textStyle={styles.infoTitle} />
                        <RoundBorderText
                            text={'Month (North): ' + convertNumtoMonth(availability["month-northern"])}
                            containerStyle={styles.infoTextContainer}
                            textStyle={styles.infoText} />
                        <RoundBorderText
                            text={'Month (South): ' + convertNumtoMonth(availability["month-southern"])}
                            containerStyle={styles.infoTextContainer}
                            textStyle={styles.infoText} />
                        <RoundBorderText
                            text={'Time: ' + availability.time}
                            containerStyle={styles.infoTextContainer}
                            textStyle={styles.infoText} />
                    </View>

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
    },
    descriptionText: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        padding: 20,
        textAlign: 'left',
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginHorizontal: 10,
    },
    infoTitleContainer: {
        backgroundColor: Colors.secondary,
        borderRadius: 0,
        width: '100%',
    },
    infoTitle: {
        fontFamily: Fonts.bold,
        fontSize: 18,
        padding: 10,
    },
    infoTextContainer: {
        backgroundColor: Colors.tertiary,
        borderRadius: 0,
        width: '100%',
        borderColor: Colors.white,
        borderBottomWidth: 1,
    },
    infoText: {
        width: '95%',
        fontFamily: Fonts.medium,
        fontSize: 16,
        padding: 10,
        color: Colors.black,
        textAlign: 'left',
    },
    calenderContainer: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.tertiary,
        width: '100%',
        marginTop: 20,
    },
    calenderBox: {
        backgroundColor: Colors.tertiary,
        borderRadius: 0,
        borderColor: Colors.white,
        borderWidth: 1,
    }
});