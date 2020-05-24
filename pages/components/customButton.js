import React from 'react';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

function convertJSONString(str) {
    var splitString = str.split('_');
    for (i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
};

export default function CustomButton({
    name,
    onPress,
    imageSource,
    isIcon = true,
    hasCollected = false,
}) {

    const text = convertJSONString(name);
    const source = isIcon ? 'https://ickhov.github.io/nookeroo/icons/' : 'https://ickhov.github.io/nookeroo/images/';

    return (

        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={onPress}>

            <Image
                source={imageSource ? { uri: source + imageSource + '.png' } : require('../../assets/icons/menu/villagers.png')}
                style={styles.imageStyle}
            />

            <Text style={styles.textStyle}>{text}</Text>

            <View style={hasCollected ? styles.collectedStyle : styles.missingStyle}>
                <Text style={styles.collectedTextStyle}>{hasCollected ? 'Collected' : ''}</Text>
            </View>

            <Text style={styles.arrowStyle}>
                <Icons name={'chevron-right'} size={26} color={Colors.white} />;
            </Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 10,
        paddingLeft: 20,
        backgroundColor: Colors.subBackground,
        marginTop: 10
    },
    imageStyle: {
        width: '10%',
        height: 50,
        resizeMode: 'contain'
    },
    textStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        textAlign: 'left',
        color: Colors.white,
        paddingLeft: 20,
        width: '55%',
    },
    collectedStyle: {
        width: '25%',
        backgroundColor: Colors.primary,
        borderRadius: 20,
    },
    missingStyle: {
        width: '25%',
        height: 0,
    },
    collectedTextStyle: {
        fontFamily: Fonts.medium,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
        padding: 10,
    },
    arrowStyle: {
        width: '10%',
        textAlign: 'right',
        color: Colors.none,
    }
});