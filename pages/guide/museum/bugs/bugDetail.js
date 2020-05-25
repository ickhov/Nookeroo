/**
 * Art detail page
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import RoundBorderText from '../../../components/roundBorderText';
import ContentWithHeader from '../../../components/contentWithHeader';
import TextWithImages from '../../../components/textWithImages';

export default function VillagerDetailGuide({ route, navigation }) {

    const data = route.params.data;
    const name = lowercasetoUppercase(route.params.name);
    const availability = data.availability;
    const [availabilityMonth, setAvailabilityMonth] = useState([]);
    const [monthColor, setMonthColor] = useState([]);

    function lowercasetoUppercase(str) {
        var splitString = str.split(' ');
        for (i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        }
        return splitString.join(' ');
    };

    function getAvailabilityMonths(north, south) {
        // initialize the array
        let size = 12;
        var months = [];
        while (size--) months[size] = '-';
        var colors = [];

        // split by ' & ' in case we found e.g. 9-6 & 12-3
        var northString = north.split(' & ');
        var southString = south.split(' & ');

        northString.forEach((item) => {
            _getAvailabilityMonths(item, true, months, colors);
        });

        southString.forEach((item) => {
            _getAvailabilityMonths(item, false, months, colors);
        });

        setAvailabilityMonth(months);
        setMonthColor(colors);
    }

    function _getAvailabilityMonths(str, isNorth, months, colors) {

        var splitString = str.split('-');
        let start = parseInt(splitString[0]);
        let end = parseInt(splitString[1]);
        var numMonths = 0;

        // e.g. 9-6
        // end month is lower than start month
        if (end < start) {
            numMonths = 13 + end - start;
        } else {
            // e.g. 3-12
            numMonths = end - start + 1;
        }

        // fill in the array with the 'N', 'S', or 'N & S' string for northern/southern hemisphere
        for (var i = 0; i < numMonths; i++) {
            let index = (start - 1 + i) % 12;

            if (isNorth) {
                // handle north months
                if (months[index] == 'S' || months[index] == 'N & S') {
                    months[index] = 'N & S';
                    colors[index] = Colors.purple;
                } else {
                    months[index] = 'N';
                    colors[index] = Colors.blue;
                }
            } else {
                // handle south months
                // make sure we don't override 'N' from previous operation
                if (months[index] == 'N' || months[index] == 'N & S') {
                    months[index] = 'N & S'
                    colors[index] = Colors.purple;
                }
                else {
                    months[index] = 'S';
                    colors[index] = Colors.red;
                }
            }
        }
    };

    useEffect(() => {
        {/* Fill in the month array data to populate the calender */ }
        getAvailabilityMonths(availability["month-northern"], availability["month-southern"]);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootStyle}
                contentContainerStyle={styles.rootContainer}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {/* Bug Image */}
                        <Image
                            source={{ uri: 'https://ickhov.github.io/nookeroo/images/bugs/' + data['file-name'] + '.png' }}
                            style={styles.image} />
                        {/* Name Tab */}
                        <RoundBorderText
                            text={name}
                            containerStyle={styles.nameContainer}
                            textStyle={styles.nameText} />
                    </View>

                    <View style={styles.bellContainer}>
                        <TextWithImages 
                        containerStyle={{ width: '50%' }}
                        leftImageSource={require('../../../../assets/icons/miscellaneous/cranny.png')}
                        rightImageSource={require('../../../../assets/icons/miscellaneous/bells.png')}
                        text={data['price']}/>
                        <TextWithImages
                        containerStyle={{ width: '50%' }}
                        leftImageSource={require('../../../../assets/icons/miscellaneous/flick.png')}
                        rightImageSource={require('../../../../assets/icons/miscellaneous/bells.png')}
                        text={data['price-flick']}/>
                    </View>

                    {/* Blathers' Description Tab */}
                    <RoundBorderText
                        text={data['museum-phrase'] + '\n' + `\t\t\t\t\t\t\t - Blathers`}
                        containerStyle={styles.descriptionContainer}
                        textStyle={styles.descriptionText} />

                    <ContentWithHeader title={'Time'}
                        text={availability.time}
                        containerStyle={styles.infoTitleContainer} />
                    <ContentWithHeader title={'Location'}
                        text={availability.location}
                        containerStyle={styles.infoTitleContainer} />

                    {/* Availablity (Calender) Tab */}
                    <View style={styles.calenderContainer}>
                        <RoundBorderText
                            text="Months"
                            containerStyle={styles.infoTitleContainer}
                            textStyle={styles.infoTitle} />
                        <ContentWithHeader title={'Jan'}
                            text={availabilityMonth[0]}
                            textStyle={{ backgroundColor: monthColor[0] }} />
                        <ContentWithHeader title={'Feb'}
                            text={availabilityMonth[1]}
                            textStyle={{ backgroundColor: monthColor[1] }} />
                        <ContentWithHeader title={'Mar'}
                            text={availabilityMonth[2]}
                            textStyle={{ backgroundColor: monthColor[2] }} />
                        <ContentWithHeader title={'Apr'}
                            text={availabilityMonth[3]}
                            textStyle={{ backgroundColor: monthColor[3] }} />
                        <ContentWithHeader title={'May'}
                            text={availabilityMonth[4]}
                            textStyle={{ backgroundColor: monthColor[4] }} />
                        <ContentWithHeader title={'Jun'}
                            text={availabilityMonth[5]}
                            textStyle={{ backgroundColor: monthColor[5] }} />
                        <ContentWithHeader title={'Jul'}
                            text={availabilityMonth[6]}
                            textStyle={{ backgroundColor: monthColor[6] }} />
                        <ContentWithHeader title={'Aug'}
                            text={availabilityMonth[7]}
                            textStyle={{ backgroundColor: monthColor[7] }} />
                        <ContentWithHeader title={'Sept'}
                            text={availabilityMonth[8]}
                            textStyle={{ backgroundColor: monthColor[8] }} />
                        <ContentWithHeader title={'Oct'}
                            text={availabilityMonth[9]}
                            textStyle={{ backgroundColor: monthColor[9] }} />
                        <ContentWithHeader title={'Nov'}
                            text={availabilityMonth[10]}
                            textStyle={{ backgroundColor: monthColor[10] }} />
                        <ContentWithHeader title={'Dec'}
                            text={availabilityMonth[11]}
                            textStyle={{ backgroundColor: monthColor[11] }} />
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
        borderWidth: 0,
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
    },
    infoText: {
        width: '95%',
        fontFamily: Fonts.medium,
        fontSize: 16,
        padding: 10,
        color: Colors.white,
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
    },
    bellContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.tertiary,
        width: '100%',
        marginVertical: 20,
        padding: 10,
    }
});