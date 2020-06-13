const CONSTANTS = {
    completed: 'You completed this collection!',
    data_timestamp: 'data-timestamp',
    art: {
        text: 'Arts',
        collectedKey: 'art-collected',
        allKey: 'art',
        url: 'https://acnhapi.com/v1/art',
        none: "You haven't collected any art yet.",
        progressKey: 'art-progress'
    },
    bug: {
        text: 'Bugs',
        collectedKey: 'bug-collected',
        allKey: 'bug',
        url: 'https://acnhapi.com/v1/bugs',
        none: "You haven't caught any bug yet.",
        progressKey: 'bug-progress'
    },
    fish: {
        text: 'Fishes',
        collectedKey: 'fish-collected',
        allKey: 'fish',
        url: 'https://acnhapi.com/v1/fish',
        none: "You haven't caught any fish yet.",
        progressKey: 'fish-progress'
    },
    fossil: {
        text: 'Fossils',
        collectedKey: 'fossil-collected',
        allKey: 'fossil',
        url: 'https://acnhapi.com/v1/fossils',
        none: "You haven't found any fossil yet.",
        progressKey: 'fossil-progress'
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
        progressKey: 'song-progress'
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
            url: 'https://ickhov.github.io/nookeroo/clothing/accessories.json',
            none: "You haven't collected any accessories yet.",
            progressKey: 'clothing-accessories-progress'
        },
        bag: {
            text: 'Bags',
            collectedKey: 'clothing-bag-collected',
            allKey: 'clothing-bag',
            url: 'https://ickhov.github.io/nookeroo/clothing/bags.json',
            none: "You haven't collected any bag yet.",
            progressKey: 'clothing-bag-progress'
        },
        bottoms: {
            text: 'Bottoms',
            collectedKey: 'clothing-bottoms-collected',
            allKey: 'clothing-bottoms',
            url: 'https://ickhov.github.io/nookeroo/clothing/bottoms.json',
            none: "You haven't collected any bottoms yet.",
            progressKey: 'clothing-bottoms-progress'
        },
        dress: {
            text: 'Dresses',
            collectedKey: 'clothing-dress-collected',
            allKey: 'clothing-dress',
            url: 'https://ickhov.github.io/nookeroo/clothing/dresses.json',
            none: "You haven't collected any dress yet.",
            progressKey: 'clothing-dress-progress'
        },
        hat: {
            text: 'Hats',
            collectedKey: 'clothing-hat-collected',
            allKey: 'clothing-hat',
            url: 'https://ickhov.github.io/nookeroo/clothing/hats.json',
            none: "You haven't collected any hat yet.",
            progressKey: 'clothing-hat-progress'
        },
        shoes: {
            text: 'Shoes',
            collectedKey: 'clothing-shoes-collected',
            allKey: 'clothing-shoes',
            url: 'https://ickhov.github.io/nookeroo/clothing/shoes.json',
            none: "You haven't collected any shoes yet.",
            progressKey: 'clothing-shoes-progress'
        },
        socks: {
            text: 'Socks',
            collectedKey: 'clothing-socks-collected',
            allKey: 'clothing-socks',
            url: 'https://ickhov.github.io/nookeroo/clothing/socks.json',
            none: "You haven't collected any socks yet.",
            progressKey: 'clothing-socks-progress'
        },
        tops: {
            text: 'Tops',
            collectedKey: 'clothing-tops-collected',
            allKey: 'clothing-tops',
            url: 'https://ickhov.github.io/nookeroo/clothing/tops.json',
            none: "You haven't collected any tops yet.",
            progressKey: 'clothing-tops-progress'
        },
        umbrella: {
            text: 'Umbrellas',
            collectedKey: 'clothing-umbrella-collected',
            allKey: 'clothing-umbrella',
            url: 'https://ickhov.github.io/nookeroo/clothing/umbrellas.json',
            none: "You haven't collected any umbrella yet.",
            progressKey: 'clothing-umbrella-progress'
        },
    },
    // RECIPES
    recipe: {
        clothing: {
            text: 'Clothing',
            collectedKey: 'recipe-clothing-collected',
            allKey: 'recipe-clothing',
            url: 'https://ickhov.github.io/nookeroo/recipe/equipments.json',
            none: "You haven't collected any clothing recipe yet.",
            progressKey: 'recipe-clothing-progress'
        },
        fence: {
            text: 'Fences',
            collectedKey: 'recipe-fence-collected',
            allKey: 'recipe-fence',
            url: 'https://ickhov.github.io/nookeroo/recipe/others.json',
            none: "You haven't collected any fence recipe yet.",
            progressKey: 'recipe-fence-progress'
        },
        houseware: {
            text: 'Housewares',
            collectedKey: 'recipe-houseware-collected',
            allKey: 'recipe-houseware',
            url: 'https://ickhov.github.io/nookeroo/recipe/housewares.json',
            none: "You haven't collected any houseware recipe yet.",
            progressKey: 'recipe-houseware-progress'
        },
        decoration: {
            text: 'Decorations',
            collectedKey: 'recipe-decoration-collected',
            allKey: 'recipe-decoration',
            url: 'https://ickhov.github.io/nookeroo/recipe/wallpaper_rugs_floorings.json',
            none: "You haven't collected any wall decoration yet.",
            progressKey: 'recipe-decoration-progress'
        },
        tool: {
            text: 'Tools',
            collectedKey: 'recipe-tool-collected',
            allKey: 'recipe-tool',
            url: 'https://ickhov.github.io/nookeroo/recipe/tools.json',
            none: "You haven't collected any tool recipe yet.",
            progressKey: 'recipe-tool-progress'
        },
        wallmounted: {
            text: 'Qall-mounted',
            collectedKey: 'recipe-wallmounted-collected',
            allKey: 'recipe-wallmounted',
            url: 'https://ickhov.github.io/nookeroo/recipe/wall_mounteds.json',
            none: "You haven't collected any wall-mounted recipe yet.",
            progressKey: 'recipe-wallmounted-progress'
        },
        miscellaneous: {
            text: 'Miscellaneous',
            collectedKey: 'recipe-miscellaneous-collected',
            allKey: 'recipe-miscellaneous',
            url: 'https://ickhov.github.io/nookeroo/recipe/miscellaneous.json',
            none: "You haven't collected any miscellaneous recipe yet.",
            progressKey: 'recipe-miscellaneous-progress'
        }
    },
    // FURNITURE
    furniture: {
        flooring: {
            text: 'Floorings',
            collectedKey: 'furniture-flooring-collected',
            allKey: 'furniture-flooring',
            url: 'https://ickhov.github.io/nookeroo/furniture/floorings.json',
            none: "You haven't collected any flooring yet.",
            progressKey: 'furniture-flooring-progress'
        },
        houseware: {
            text: 'Housewares',
            collectedKey: 'furniture-houseware-collected',
            allKey: 'furniture-houseware',
            url: 'https://acnhapi.com/v1/houseware',
            none: "You haven't collected any houseware yet.",
            progressKey: 'furniture-houseware-progress'
        },
        rug: {
            text: 'Rugs',
            collectedKey: 'furniture-rug-collected',
            allKey: 'furniture-rug',
            url: 'https://ickhov.github.io/nookeroo/furniture/rugs.json',
            none: "You haven't collected any rug yet.",
            progressKey: 'furniture-rug-progress'
        },
        wallmounted: {
            text: 'Wall-mounted',
            collectedKey: 'furniture-wallmounted-collected',
            allKey: 'furniture-wallmounted',
            url: 'https://acnhapi.com/v1/wallmounted',
            none: "You haven't collected any wall-mounted furniture yet.",
            progressKey: 'furniture-wallmounted-progress'
        },
        wallpaper: {
            text: 'Wallpapers',
            collectedKey: 'furniture-wallpaper-collected',
            allKey: 'furniture-wallpaper',
            url: 'https://ickhov.github.io/nookeroo/furniture/wallpapers.json',
            none: "You haven't collected any wallpaper yet.",
            progressKey: 'furniture-wallpaper-progress'
        },
        misc: {
            text: 'Miscellaneous',
            collectedKey: 'furniture-misc-collected',
            allKey: 'furniture-misc',
            url: 'http://acnhapi.com/v1/misc',
            none: "You haven't collected any miscellaneous furniture yet.",
            progressKey: 'furniture-misc-progress'
        },
    }
};

export default CONSTANTS;