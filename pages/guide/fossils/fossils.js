/**
 * Stack market list
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

import CustomButton from '../../components/customButton';

export default function FossilGuide({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        {/* Fetch fossil data from acnh API */}
        fetch('http://acnhapi.com/fossils')
            .then((response) => response.json())
            .then((json) => setData(Object.values(json)))
            .catch((error) => console.error(error))
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => <CustomButton
                    name={item.name['name-en']}
                    imageSource={'fossils/' + item['file-name']}
                    isIcon={false}
                />}
                keyExtractor={item => item['file-name']}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
});
