/**
 * 
 * More Page
 * 
 * Host additonal menu options
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text } from 'react-native';
import Colors from '../assets/colors';
import Fonts from '../assets/fonts';
import CustomButton from './components/customButton';

export default function More({ navigation }) {

    const data = [
        {
            title: "Clothing",
            data: [
                {
                    name: 'Accessories',
                    image: require('../assets/icons/miscellaneous/accessories.png')
                },
                {
                    name: 'Bags',
                    image: require('../assets/icons/miscellaneous/bag.png')
                },
                {
                    name: 'Bottoms',
                    image: require('../assets/icons/miscellaneous/bottoms.png')
                },
                {
                    name: 'Dresses',
                    image: require('../assets/icons/miscellaneous/dress.png')
                },
                {
                    name: 'Hats',
                    image: require('../assets/icons/miscellaneous/hat.png')
                },
                {
                    name: 'Shoes',
                    image: require('../assets/icons/miscellaneous/shoes.png')
                },
                {
                    name: 'Socks',
                    image: require('../assets/icons/miscellaneous/socks.png')
                },
                {
                    name: 'Tops',
                    image: require('../assets/icons/miscellaneous/tops.png')
                },
                {
                    name: 'Umbrellas',
                    image: require('../assets/icons/miscellaneous/umbrella.png')
                }
            ]
        },
        {
            title: "Recipes",
            data: [
                {
                    name: 'Clothing',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeClothing'
                },
                {
                    name: 'Fences',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeFences'
                },
                {
                    name: 'Housewares',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeHousewares'
                },
                {
                    name: 'Rugs/Wallpapers/Floorings',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeDecorations'
                },
                {
                    name: 'Tools',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeTools'
                },
                {
                    name: 'Wall-mounted',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeWall-mounted'
                },
                {
                    name: 'Miscellaneous',
                    image: require('../assets/icons/miscellaneous/recipe.png'),
                    screen: 'RecipeMiscellaneous'
                }
            ]
        },
        {
            title: "Furnitures",
            data: [
                {
                    name: 'Floorings',
                    image: require('../assets/icons/miscellaneous/flooring.png')
                },
                {
                    name: 'Housewares',
                    image: require('../assets/icons/menu/furniture.png')
                },
                {
                    name: 'Rugs',
                    image: require('../assets/icons/miscellaneous/rug.png')
                },
                {
                    name: 'Wall-mounted',
                    image: require('../assets/icons/menu/furniture.png')
                },
                {
                    name: 'Wallpapers',
                    image: require('../assets/icons/miscellaneous/wallpaper.png')
                },
                {
                    name: 'Miscellaneous',
                    image: require('../assets/icons/menu/furniture.png')
                }
            ]
        }
    ];

    const detailSelected = name => {
        navigation.navigate(name)
    };

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                style={{ width: '100%' }}
                sections={data}
                keyExtractor={item => item.name}
                initialNumToRender={10}
                renderItem={({ item }) => {
                    if (item.id == -1) {
                        return <Text style={styles.emptyTextStyle}>{item.text}</Text>
                    } else {
                        return <CustomButton
                            name={item.name}
                            fileImageSource={item.image}
                            onPress={() => detailSelected(item.screen ?? item.name)}
                            noCheckBox={true}
                        />
                    }
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                extraData={data} />
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
});
