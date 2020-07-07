const CONSTANTS = {
    version: {
        number: "1.3.0",
        key: "app-version"
    },
    completed: 'You completed this collection!',
    data_timestamp: 'data-timestamp',
    art: {
        text: 'Arts',
        collectedKey: 'art-collected',
        allKey: 'art',
        url: 'https://acnhapi.com/v1/art',
        none: "You haven't collected any art.",
        progressKey: 'art-progress',
        totalKey: 'art-total'
    },
    bug: {
        text: 'Bugs',
        collectedKey: 'bug-collected',
        allKey: 'bug',
        url: 'https://acnhapi.com/v1/bugs',
        none: "You haven't caught any bug.",
        progressKey: 'bug-progress',
        totalKey: 'bug-total'
    },
    fish: {
        text: 'Fishes',
        collectedKey: 'fish-collected',
        allKey: 'fish',
        url: 'https://acnhapi.com/v1/fish',
        none: "You haven't caught any fish.",
        progressKey: 'fish-progress',
        totalKey: 'fish-total'
    },
    fossil: {
        text: 'Fossils',
        collectedKey: 'fossil-collected',
        allKey: 'fossil',
        url: 'https://acnhapi.com/v1/fossils',
        none: "You haven't found any fossil.",
        progressKey: 'fossil-progress',
        totalKey: 'fossil-total'
    },
    sea: {
        text: 'Sea Creatures',
        collectedKey: 'sea-creature-collected',
        allKey: 'sea-creature',
        url: 'https://acnhapi.com/v1/sea',
        none: "You haven't caught any sea creature.",
        progressKey: 'sea-creature-progress',
        totalKey: 'sea-creature-total'
    },
    villager: {
        text: 'Villagers',
        collectedKey: 'villager-obtained',
        allKey: 'villager',
        url: 'https://acnhapi.com/v1/villagers',
        none: "You don't have any villagers.",
        totalKey: null
    },
    song: {
        text: 'Songs',
        collectedKey: 'song-obtained',
        allKey: 'song',
        url: 'https://acnhapi.com/v1/songs',
        none: "You haven't collected any K.K. Slider's song.",
        progressKey: 'song-progress',
        totalKey: 'song-total'
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
            none: "You haven't collected any accessories.",
            progressKey: 'clothing-accessories-progress',
            totalKey: 'clothing-accessories-total'
        },
        bag: {
            text: 'Bags',
            collectedKey: 'clothing-bag-collected',
            allKey: 'clothing-bag',
            url: 'https://ickhov.github.io/nookeroo/clothing/bags.json',
            none: "You haven't collected any bag.",
            progressKey: 'clothing-bag-progress',
            totalKey: 'clothing-bag-total'
        },
        bottoms: {
            text: 'Bottoms',
            collectedKey: 'clothing-bottoms-collected',
            allKey: 'clothing-bottoms',
            url: 'https://ickhov.github.io/nookeroo/clothing/bottoms.json',
            none: "You haven't collected any bottoms.",
            progressKey: 'clothing-bottoms-progress',
            totalKey: 'clothing-bottoms-total'
        },
        dress: {
            text: 'Dresses',
            collectedKey: 'clothing-dress-collected',
            allKey: 'clothing-dress',
            url: 'https://ickhov.github.io/nookeroo/clothing/dresses.json',
            none: "You haven't collected any dress.",
            progressKey: 'clothing-dress-progress',
            totalKey: 'clothing-dress-total'
        },
        hat: {
            text: 'Hats',
            collectedKey: 'clothing-hat-collected',
            allKey: 'clothing-hat',
            url: 'https://ickhov.github.io/nookeroo/clothing/hats.json',
            none: "You haven't collected any hat.",
            progressKey: 'clothing-hat-progress',
            totalKey: 'clothing-hat-total'
        },
        shoes: {
            text: 'Shoes',
            collectedKey: 'clothing-shoes-collected',
            allKey: 'clothing-shoes',
            url: 'https://ickhov.github.io/nookeroo/clothing/shoes.json',
            none: "You haven't collected any shoes.",
            progressKey: 'clothing-shoes-progress',
            totalKey: 'clothing-shoes-total'
        },
        socks: {
            text: 'Socks',
            collectedKey: 'clothing-socks-collected',
            allKey: 'clothing-socks',
            url: 'https://ickhov.github.io/nookeroo/clothing/socks.json',
            none: "You haven't collected any socks.",
            progressKey: 'clothing-socks-progress',
            totalKey: 'clothing-socks-total'
        },
        tops: {
            text: 'Tops',
            collectedKey: 'clothing-tops-collected',
            allKey: 'clothing-tops',
            url: 'https://ickhov.github.io/nookeroo/clothing/tops.json',
            none: "You haven't collected any tops.",
            progressKey: 'clothing-tops-progress',
            totalKey: 'clothing-tops-total'
        },
        umbrella: {
            text: 'Umbrellas',
            collectedKey: 'clothing-umbrella-collected',
            allKey: 'clothing-umbrella',
            url: 'https://ickhov.github.io/nookeroo/clothing/umbrellas.json',
            none: "You haven't collected any umbrella.",
            progressKey: 'clothing-umbrella-progress',
            totalKey: 'clothing-umbrella-total'
        },
    },
    // RECIPES
    recipe: {
        clothing: {
            text: 'Clothing',
            collectedKey: 'recipe-clothing-collected',
            allKey: 'recipe-clothing',
            url: 'https://ickhov.github.io/nookeroo/recipe/equipments.json',
            none: "You haven't collected any clothing recipe.",
            progressKey: 'recipe-clothing-progress',
            totalKey: 'recipe-clothing-total'
        },
        fence: {
            text: 'Fences',
            collectedKey: 'recipe-fence-collected',
            allKey: 'recipe-fence',
            url: 'https://ickhov.github.io/nookeroo/recipe/others.json',
            none: "You haven't collected any fence recipe.",
            progressKey: 'recipe-fence-progress',
            totalKey: 'recipe-fence-total'
        },
        houseware: {
            text: 'Housewares',
            collectedKey: 'recipe-houseware-collected',
            allKey: 'recipe-houseware',
            url: 'https://ickhov.github.io/nookeroo/recipe/housewares.json',
            none: "You haven't collected any houseware recipe.",
            progressKey: 'recipe-houseware-progress',
            totalKey: 'recipe-houseware-total'
        },
        decoration: {
            text: 'Decorations',
            collectedKey: 'recipe-decoration-collected',
            allKey: 'recipe-decoration',
            url: 'https://ickhov.github.io/nookeroo/recipe/wallpaper_rugs_floorings.json',
            none: "You haven't collected any wall decoration.",
            progressKey: 'recipe-decoration-progress',
            totalKey: 'recipe-decoration-total'
        },
        tool: {
            text: 'Tools',
            collectedKey: 'recipe-tool-collected',
            allKey: 'recipe-tool',
            url: 'https://ickhov.github.io/nookeroo/recipe/tools.json',
            none: "You haven't collected any tool recipe.",
            progressKey: 'recipe-tool-progress',
            totalKey: 'recipe-tool-total'
        },
        wallmounted: {
            text: 'Wall-mounted',
            collectedKey: 'recipe-wallmounted-collected',
            allKey: 'recipe-wallmounted',
            url: 'https://ickhov.github.io/nookeroo/recipe/wall_mounteds.json',
            none: "You haven't collected any wall-mounted recipe.",
            progressKey: 'recipe-wallmounted-progress',
            totalKey: 'recipe-wallmounted-total'
        },
        miscellaneous: {
            text: 'Miscellaneous',
            collectedKey: 'recipe-miscellaneous-collected',
            allKey: 'recipe-miscellaneous',
            url: 'https://ickhov.github.io/nookeroo/recipe/miscellaneous.json',
            none: "You haven't collected any miscellaneous recipe.",
            progressKey: 'recipe-miscellaneous-progress',
            totalKey: 'recipe-miscellaneous-total'
        }
    },
    // FURNITURE
    furniture: {
        flooring: {
            text: 'Floorings',
            collectedKey: 'furniture-flooring-collected',
            allKey: 'furniture-flooring',
            url: 'https://ickhov.github.io/nookeroo/furniture/floorings.json',
            none: "You haven't collected any flooring.",
            progressKey: 'furniture-flooring-progress',
            totalKey: 'furniture-flooring-total'
        },
        houseware: {
            text: 'Housewares',
            collectedKey: 'furniture-houseware-collected',
            allKey: 'furniture-houseware',
            url: 'https://acnhapi.com/v1/houseware',
            none: "You haven't collected any houseware.",
            progressKey: 'furniture-houseware-progress',
            totalKey: 'furniture-houseware-total'
        },
        rug: {
            text: 'Rugs',
            collectedKey: 'furniture-rug-collected',
            allKey: 'furniture-rug',
            url: 'https://ickhov.github.io/nookeroo/furniture/rugs.json',
            none: "You haven't collected any rug.",
            progressKey: 'furniture-rug-progress',
            totalKey: 'furniture-rug-total'
        },
        wallmounted: {
            text: 'Wall-mounted',
            collectedKey: 'furniture-wallmounted-collected',
            allKey: 'furniture-wallmounted',
            url: 'https://acnhapi.com/v1/wallmounted',
            none: "You haven't collected any wall-mounted furniture.",
            progressKey: 'furniture-wallmounted-progress',
            totalKey: 'furniture-wallmounted-total'
        },
        wallpaper: {
            text: 'Wallpapers',
            collectedKey: 'furniture-wallpaper-collected',
            allKey: 'furniture-wallpaper',
            url: 'https://ickhov.github.io/nookeroo/furniture/wallpapers.json',
            none: "You haven't collected any wallpaper.",
            progressKey: 'furniture-wallpaper-progress',
            totalKey: 'furniture-wallpaper-total'
        },
        misc: {
            text: 'Miscellaneous',
            collectedKey: 'furniture-misc-collected',
            allKey: 'furniture-misc',
            url: 'http://acnhapi.com/v1/misc',
            none: "You haven't collected any miscellaneous furniture.",
            progressKey: 'furniture-misc-progress',
            totalKey: 'furniture-misc-total'
        },
    }
};

export default CONSTANTS;