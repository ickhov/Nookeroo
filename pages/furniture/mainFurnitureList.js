/**
 * 
 * Props: constants, navigation, nextScreen
 * 
 * Collection View for Furniture-related screens
 * Arts
 * Bugs
 * Fishes
 * Fossils
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Keyboard, SafeAreaView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import CustomButton from '../components/customButton';
import PopUpDialog from '../components/popUpDialog';
import ProgressBar from '../components/progressBar';
import CONSTANTS from '../constants';

export default function MainFurnitureList({ route, navigation }) {

    const [collectedList, setCollectedList] = useState([]);
    const [rawData, setRawData] = useState([])
    const [data, setData] = useState([]);
    const [progressData, setProgressData] = useState({});
    const [searchData, setSearchData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const constants = route.params.constants;
    const [dataLength, setDataLength] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isConnected, setIsConnected] = useState(true);
    const [requireUpdate, setRequireUpdate] = useState(false);

    const detailSelected = item => {
        navigation.navigate(route.params.nextScreen, {
            name: item[0].name['name-USen'],
            data: item
        })
    };

    const goToLoadingScreen = _ => {
        navigation.navigate('LoadingScreen')
    };

    const checkBoxToggle = useCallback((item) => {
        // no data if first toggled, set to true if not in the list
        const data = Array.from(collectedList);

        const index = data.indexOf(item[0].name['name-USen'].toLowerCase());
        // if name is in the list, then remove it
        // else add it
        if (index > -1) {
            data.splice(index, 1);
        } else {
            data.push(item[0].name['name-USen'].toLowerCase());
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

            const totalLength = Array.from(rawData).length;
            const collectedLength = value.length;
            const progressString = collectedLength + '/' + totalLength;
            await AsyncStorage.setItem(constants.progressKey, progressString);
        } catch (e) {
            error(CONSTANTS.error.storing);
        }
    }, []);

    const getCollectedList = useCallback(async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(constants.collectedKey);
            setCollectedList(values !== null ? JSON.parse(values) : []);
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    }, []);

    // only use when there's no internet
    const getAll = useCallback(async () => {
        try {
            // store the list as string and count separately for faster reading
            const values = await AsyncStorage.getItem(constants.allKey);
            if (values !== null) {
                setRawData(JSON.parse(values).sort(compare))
            } else {
                // no data so need to load them
                setRequireUpdate(true);
                setRawData([]);
            }
        } catch (e) {
            error(CONSTANTS.error.retrieving);
        }
    }, []);

    function compare(a, b) {
        let first = a[0].name['name-USen'].toLowerCase();
        let second = b[0].name['name-USen'].toLowerCase();

        if (first < second) {
            return -1;
        }
        if (first > second) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        {/* Fetch Data form server and storage (if any) */ }
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);

            // if there's internet and we need to update
            // then navigate to loading screen
            if (state.isConnected && requireUpdate) {
                goToLoadingScreen();
            } else {
                getAll();
                getCollectedList();
            }
        });

        // Unsubscribe
        return unsubscribe;
    }, [requireUpdate]);

    useEffect(() => {
        {/* Populate the tables */ }
        const items = Array.from(rawData);
        const collected = Array.from(collectedList);

        var collectedData = [];
        var missingData = [];

        items.forEach((element) => {
            if (collected.includes(element[0].name['name-USen'].toLowerCase())) {
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

        if (missingData.length == 0) {
            missingData.push({
                id: -1,
                text: CONSTANTS.completed
            })
        }

        if (totalLength > 0) {
            setProgressData({
                collected: collectedLength,
                total: totalLength,
                percent: ((collectedLength * 1.0 / totalLength) * 100).toFixed(2),
            });

            setData([
                {
                    title: "Collected",
                    data: collectedData
                },
                {
                    title: "Missing",
                    data: missingData
                }
            ]);
        }

    }, [collectedList, rawData]);

    const filterData = useCallback((text) => {
        {/* set search text as user is typing */ }
        const items = Array.from(rawData);

        const filterItems = items.filter((item) => {
            return item[0].name['name-USen'].toLowerCase().includes(text.toLowerCase());
        })

        if (filterItems.length == 0) {
            filterItems.push({
                id: -1,
                text: 'No Results'
            })
        }

        setSearchText(text);
        setSearchData(filterItems);
    }, [rawData]);

    if (dataLength > 0) {
        return (
            <SafeAreaView style={styles.container}>
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

                <Text style={styles.header}>{`Progress: ${progressData.percent}% (${progressData.collected}/${progressData.total})`}</Text>
                <ProgressBar progress={progressData.percent} />
                
                {/* Show either a section list or 
                flat list depending on whether the 
                user is searching something */}
                {
                    searchText === '' ?
                        <SectionList
                            style={{ width: '100%' }}
                            sections={data}
                            keyExtractor={item => Object.values(item)[0]['file-name']}
                            renderItem={({ item }) => {
                                if (item.id == -1) {
                                    return <Text style={styles.emptyTextStyle}>{item.text}</Text>
                                } else {
                                    return <CustomButton
                                        name={item[0].name['name-USen']}
                                        imageSource={item[0]['icon_uri'] ?? item[0]['image_uri']}
                                        onPress={() => detailSelected(item)}
                                        hasCollected={Array.from(collectedList).includes(item[0].name['name-USen'].toLowerCase())}
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
                            renderItem={({ item }) => {
                                if (item.id == -1) {
                                    return <Text style={styles.emptyTextStyle}>{item.text}</Text>
                                } else {
                                    return <CustomButton
                                        name={item[0].name['name-USen']}
                                        imageSource={item[0]['icon_uri'] ?? item[0]['image_uri']}
                                        onPress={() => detailSelected(item)}
                                        hasCollected={Array.from(collectedList).includes(item[0].name['name-USen'].toLowerCase())}
                                        toggleCheckBox={() => checkBoxToggle(item)}
                                    />
                                }
                            }}
                            keyExtractor={item => Object.values(item)[0]['file-name']}
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
            <SafeAreaView style={styles.container}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    {
                        isConnected ?
                            <Icons.Button
                                name="hourglass-full"
                                iconStyle={{ margin: 0 }}
                                backgroundColor={Colors.none}
                                color={Colors.gray}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontFamily: Fonts.medium,
                                    fontSize: Fonts.size.title,
                                    color: Colors.gray
                                }}>Loading</Text>
                            </Icons.Button>
                            :
                            <Icons.Button
                                name="signal-wifi-off"
                                iconStyle={{ margin: 0 }}
                                backgroundColor={Colors.none}
                                color={Colors.gray}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontFamily: Fonts.medium,
                                    fontSize: Fonts.size.title,
                                    color: Colors.gray
                                }}>No Internet Connection</Text>
                            </Icons.Button>
                    }

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    header: {
        fontFamily: Fonts.medium,
        fontSize: Fonts.size.header,
        backgroundColor: Colors.background,
        color: Colors.white,
        textAlign: 'center',
        padding: 10,
    },
    emptyTextStyle: {
        fontFamily: Fonts.regular,
        fontSize: Fonts.size.text,
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
        width: '73%',
        fontSize: Fonts.size.text,
        color: Colors.black,
        fontFamily: Fonts.medium,
    },
    searchBarCancel: {
        width: '15%',
    },
});
