const CONSTANTS = {
    art: {
        text: 'Arts',
        collectedKey: 'art-collected',
        allKey: 'art',
        url: 'https://acnhapi.com/v1/art',
        none: "You haven't collected any art yet.",
    },
    bug: {
        text: 'Bugs',
        collectedKey: 'bug-collected',
        allKey: 'bug',
        url: 'https://acnhapi.com/v1/bugs',
        none: "You haven't caught any bug yet.",
    },
    fish: {
        text: 'Fishes',
        collectedKey: 'fish-collected',
        allKey: 'fish',
        url: 'https://acnhapi.com/v1/fish',
        none: "You haven't caught any fish yet.",
    },
    fossil: {
        text: 'Fossils',
        collectedKey: 'fossil-collected',
        allKey: 'fossil',
        url: 'https://acnhapi.com/v1/fossils',
        none: "You haven't found any fossil yet.",
    },
    villager: {
        text: 'Villagers',
        collectedKey: 'villager-obtained',
        allKey: 'villager',
        url: 'https://acnhapi.com/v1/villagers',
        none: "You don't have any villagers.",
    },
    song: {
        text: 'Songs',
        collectedKey: 'song-obtained',
        allKey: 'song',
        url: 'https://acnhapi.com/v1/songs',
        none: "You haven't collected any K.K. Slider's song yet.",
    },
    error: {
        retrieving: "There was a problem retrieving your saved data. Please restart the app to make sure it doesn't happen again.",
        storing: "There was a problem storing your data. Please restart the app to make sure it doesn't happen again."
    },
    // CLOTHINGS
    clothing: {
        accessories: {
            text: 'Accessories',
            collectedKey: 'clothing-accessories-collected',
            allKey: 'clothing-accessories',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/accessories.json',
            none: "You haven't collected any accessories yet.",
        },
        bag: {
            text: 'Bags',
            collectedKey: 'clothing-bag-collected',
            allKey: 'clothing-bag',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/bags.json',
            none: "You haven't collected any bag yet.",
        },
        bottoms: {
            text: 'Bottoms',
            collectedKey: 'clothing-bottoms-collected',
            allKey: 'clothing-bottoms',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/bottoms.json',
            none: "You haven't collected any bottoms yet.",
        },
        dress: {
            text: 'Dresses',
            collectedKey: 'clothing-dress-collected',
            allKey: 'clothing-dress',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/dresses.json',
            none: "You haven't collected any dress yet.",
        },
        hat: {
            text: 'Hats',
            collectedKey: 'clothing-hat-collected',
            allKey: 'clothing-hat',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/hats.json',
            none: "You haven't collected any hat yet.",
        },
        shoes: {
            text: 'Shoes',
            collectedKey: 'clothing-shoes-collected',
            allKey: 'clothing-shoes',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/shoes.json',
            none: "You haven't collected any shoes yet.",
        },
        socks: {
            text: 'Socks',
            collectedKey: 'clothing-socks-collected',
            allKey: 'clothing-socks',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/socks.json',
            none: "You haven't collected any socks yet.",
        },
        tops: {
            text: 'Tops',
            collectedKey: 'clothing-tops-collected',
            allKey: 'clothing-tops',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/tops.json',
            none: "You haven't collected any tops yet.",
        },
        umbrella: {
            text: 'Umbrellas',
            collectedKey: 'clothing-umbrella-collected',
            allKey: 'clothing-umbrella',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/clothing/umbrellas.json',
            none: "You haven't collected any umbrella yet.",
        },
    },
    // RECIPES
    recipe: {
        clothing: {
            text: 'Clothing',
            collectedKey: 'recipe-clothing-collected',
            allKey: 'recipe-clothing',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/equipments.json',
            none: "You haven't collected any clothing recipe yet.",
        },
        fence: {
            text: 'Fences',
            collectedKey: 'recipe-fence-collected',
            allKey: 'recipe-fence',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/others.json',
            none: "You haven't collected any fence recipe yet.",
        },
        houseware: {
            text: 'Housewares',
            collectedKey: 'recipe-houseware-collected',
            allKey: 'recipe-houseware',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/housewares.json',
            none: "You haven't collected any houseware recipe yet.",
        },
        decoration: {
            text: 'Decorations',
            collectedKey: 'recipe-decoration-collected',
            allKey: 'recipe-decoration',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/wallpaper_rugs_floorings.json',
            none: "You haven't collected any wall decoration yet.",
        },
        tool: {
            text: 'Tools',
            collectedKey: 'recipe-tool-collected',
            allKey: 'recipe-tool',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/tools.json',
            none: "You haven't collected any tool recipe yet.",
        },
        wallmounted: {
            text: 'Qall-mounted',
            collectedKey: 'recipe-wallmounted-collected',
            allKey: 'recipe-wallmounted',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/wall_mounteds.json',
            none: "You haven't collected any wall-mounted recipe yet.",
        },
        miscellaneous: {
            text: 'Miscellaneous',
            collectedKey: 'recipe-miscellaneous-collected',
            allKey: 'recipe-miscellaneous',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/crafting/miscellaneous.json',
            none: "You haven't collected any miscellaneous recipe yet.",
        }
    },
    // FURNITURE
    furniture: {
        flooring: {
            text: 'Floorings',
            collectedKey: 'furniture-flooring-collected',
            allKey: 'flooring',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/furniture/floorings.json',
            none: "You haven't collected any flooring yet.",
        },
        houseware: {
            text: 'Housewares',
            collectedKey: 'furniture-houseware-collected',
            allKey: 'houseware',
            url: 'https://acnhapi.com/v1/houseware',
            none: "You haven't collected any houseware yet.",
        },
        rug: {
            text: 'Rugs',
            collectedKey: 'furniture-rug-collected',
            allKey: 'rug',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/furniture/rugs.json',
            none: "You haven't collected any rug yet.",
        },
        wallmounted: {
            text: 'Wall-mounted',
            collectedKey: 'furniture-wallmounted-collected',
            allKey: 'wallmounted',
            url: 'https://acnhapi.com/v1/wallmounted',
            none: "You haven't collected any wall-mounted furniture yet.",
        },
        wallpaper: {
            text: 'Wallpapers',
            collectedKey: 'furniture-wallpaper-collected',
            allKey: 'wallpaper',
            url: 'https://raw.githubusercontent.com/sungyeonu/animal-crossing-scraper/master/data/furniture/wallpapers.json',
            none: "You haven't collected any wallpaper yet.",
        },
        misc: {
            text: 'Miscellaneous',
            collectedKey: 'furniture-misc-collected',
            allKey: 'misc',
            url: 'http://acnhapi.com/v1/misc',
            none: "You haven't collected any miscellaneous furniture yet.",
        },
    }
};

export default CONSTANTS;