/**
 * Villager list
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useCallback } from 'react';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    SectionList,
    TextInput,
    View,
    FlatList,
    Keyboard,
} from 'react-native';

import CustomButton from '../../components/customButton';
import CONSTANTS from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import PopUpDialog from '../../components/popUpDialog';

export default function VillagerGuide({ navigation }) {

    const [collectedList, setCollectedList] = useState([]);
    const [rawData, setRawData] = useState([])
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const constants = CONSTANTS.villager;
    const [dataLength, setDataLength] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const detailSelected = useCallback(item => {
        navigation.navigate('VillagerDetail', {
            name: item.name['name-en'],
            data: item
        })
    }, []);

    const checkBoxToggle = useCallback((item) => {
        // no data if first toggled, set to true if not in the list
        const data = Array.from(collectedList);

        const index = data.indexOf(item['file-name']);
        // if name is in the list, then remove it
        // else add it
        if (index > -1) {
            data.splice(index, 1);
        } else {
            data.push(item['file-name']);
        }

        setCollectedList(data);
        storeCollectedList(data);

    }, [collectedList]);

    const error = (message) => {
        setErrorMessage(message);
        setShowAlert(true);
    }

    const storeCollectedList = useCallback(async (value) => {
        try {
            const values = JSON.stringify(value);
            await AsyncStorage.setItem(constants.collectedKey, values);
        } catch (e) {
            error(CONSTANTS.error.storing);
        }
    }, []);

    const getCollectedList = useCallback(async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(constants.collectedKey);
            setCollectedList(values != null ? JSON.parse(values) : []);
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    }, []);

    const storeAll = useCallback(async (value) => {
        try {
            const values = JSON.stringify(value);
            await AsyncStorage.setItem(constants.allKey, values);
        } catch (e) {
            error(CONSTANTS.error.storing);
        }
    }, []);

    // only use when there's no internet
    const getAll = useCallback(async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(constants.allKey);
            setRawData(values != null ? JSON.parse(values) : []);
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    }, []);

    function compare(a, b) {
        let first = a.name['name-en'].toLowerCase();
        let second = b.name['name-en'].toLowerCase();

        if (first < second) {
            return -1;
        }
        if (first > second) {
            return 1;
        }
        return 0;
    }

    const fetchData = useCallback(() => {
        {/* Fetch bug data from Nookeroo API */ }
        fetch(constants.url)
            .then((response) => response.json())
            .then((json) => {
                // set the data to use to populate the data after filtering
                const array = Object.values(json);

                array.sort(compare);

                setRawData(array);
                storeAll(array);
            })
            .catch(_ => getAll());
    }, []);

    useEffect(() => {
        {/* Fetch Data form server and storage (if any) */ }
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected) {
                fetchData();
            } else {
                getAll();
            }

            getCollectedList();
        });

        // Unsubscribe
        return unsubscribe;
    }, []);

    useEffect(() => {
        {/* Populate the tables */ }
        const items = Array.from(rawData);
        const collected = Array.from(collectedList);

        var collectedData = [];
        var missingData = [];

        items.forEach((element) => {
            if (collected.includes(element['file-name'])) {
                collectedData.push(element);
            } else {
                missingData.push(element);
            }
        })

        const collectedLength = collectedData.length;
        const totalLength = items.length;

        setDataLength(totalLength);

        if (collectedLength == 0) {
            collectedData.push({
                id: -1,
                text: constants.none
            })
        }

        if (totalLength > 0) {
            setData([
                {
                    title: "Your Villagers",
                    data: collectedData
                },
                {
                    title: collectedLength > 0 ? "Other Villagers" : "All Villagers",
                    data: missingData
                }
            ]);
        }

    }, [collectedList, rawData]);

    const filterData = useCallback((text) => {
        {/* set search text as user is typing */ }
        const items = Array.from(rawData);

        const filterItems = items.filter((item) => {
            return item.name['name-en'].toLowerCase().includes(text.toLowerCase());
        })

        setSearchText(text);
        setSearchData(filterItems);
    }, [rawData]);

    if (dataLength > 0) {
        return (
            <SafeAreaView style={styles.root}>
                <View style={styles.searchBarContainer}>
                    <Text style={styles.searchBarIcon}>
                        <Icons name={'search'} size={26} color={Colors.black} />
                    </Text>
                    <TextInput
                        style={styles.searchBarText}
                        onChangeText={text => filterData(text)}
                        value={searchText}
                        underlineColorAndroid="transparent"
                        placeholder="Search"
                        placeholderTextColor={Colors.subBackground}
                    />
                    {/* Only show cancel icon when the user typed something */}
                    {
                        searchText === '' ?
                            <View style={styles.searchBarCancel}></View>
                            :
                            <View style={styles.searchBarCancel}>
                                <Icons.Button
                                    iconStyle={{ margin: 0 }}
                                    name="cancel"
                                    backgroundColor={Colors.none}
                                    color={Colors.black}
                                    size={24}
                                    activeOpacity={0.5}
                                    underlayColor={Colors.none}
                                    onPress={() => {
                                        setSearchText('');
                                        Keyboard.dismiss();
                                    }}
                                />
                            </View>

                    }
                </View>

                {/* Show either a section list or 
                flat list depending on whether the 
                user is searching something */}
                {
                    searchText === '' ?
                        <SectionList
                            style={{ width: '100%' }}
                            sections={data}
                            keyExtractor={item => item['file-name']}
                            initialNumToRender={10}
                            renderItem={({ item }) => {
                                if (item.id == -1) {
                                    return <Text style={styles.emptyTextStyle}>{item.text}</Text>
                                } else {
                                    return <CustomButton
                                        name={item.name['name-en']}
                                        imageSource={constants.directory + item['file-name']}
                                        onPress={() => detailSelected(item)}
                                        hasCollected={Array.from(collectedList).includes(item['file-name'])}
                                        toggleCheckBox={() => checkBoxToggle(item)}
                                    />
                                }
                            }}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.header}>{title}</Text>
                            )}
                            extraData={data}
                        />
                        :
                        <FlatList
                            style={{ width: '100%', marginTop: 10, }}
                            data={searchData}
                            renderItem={({ item }) => <CustomButton
                                name={item.name['name-en']}
                                imageSource={constants.directory + item['file-name']}
                                onPress={() => detailSelected(item)}
                                hasCollected={Array.from(collectedList).includes(item['file-name'])}
                                toggleCheckBox={() => checkBoxToggle(item)}
                            />}
                            keyExtractor={item => item.id.toString()}
                            extraData={searchData}
                        />
                }

                <PopUpDialog
                    showAlert={showAlert}
                    title='Something went wrong!'
                    message={errorMessage}
                    cancelText='Dismiss'
                    onCancelPressed={() => {
                        setShowAlert(false);
                        setErrorMessage('');
                    }}
                />
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.root}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Icons.Button
                        name="signal-wifi-off"
                        iconStyle={{ margin: 0 }}
                        backgroundColor={Colors.none}
                        color={Colors.gray}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: Fonts.medium,
                            fontSize: 20,
                            color: Colors.gray
                        }}>No Internet Connection</Text>
                    </Icons.Button>

                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontFamily: Fonts.medium,
        fontSize: 20,
        backgroundColor: Colors.background,
        color: Colors.white,
        textAlign: 'center',
        padding: 10,
    },
    emptyTextStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.white,
        backgroundColor: Colors.subBackground,
        padding: 20
    },
    searchBarContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginTop: 10,
        marginHorizontal: 10,
    },
    searchBarIcon: {
        width: '12%',
        textAlign: 'center',
    },
    searchBarText: {
        width: '76%',
        fontSize: 16,
        color: Colors.black,
        fontFamily: Fonts.medium,
    },
    searchBarCancel: {
        width: '12%',
    },
});