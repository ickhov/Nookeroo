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
    const source = isIcon ? 'http://acnhapi.com/icons/' : 'http://acnhapi.com/images/';

    return (

        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={onPress}>

            <Image
                source={imageSource ? { uri: source + imageSource } : require('../../assets/icons/villagers/cat23.png')}
                style={styles.imageStyle}
            />

            <Text style={styles.textStyle}>{text}</Text>

            <Text style={styles.collectedTextStyle}>{hasCollected ? 'Collected' : ''}</Text>

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
        fontFamily: Fonts.normal,
        fontSize: 16,
        textAlign: 'left',
        color: Colors.white,
        paddingLeft: 20,
        width: '50%',
    },
    collectedTextStyle: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.success,
        width: '20%',
    },
    arrowStyle: {
        width: '20%',
        textAlign: 'right',
        color: Colors.none,
    }
});