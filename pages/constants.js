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
        none: "You haven't collected any K.K. Slider's music yet.",
    },
    furniture: {
        text: 'Furnitures',
        collectedKey: 'furniture-obtained',
        allKey: 'furniture',
        none: "You haven't collected any furniture yet.",
        url1: 'https://acnhapi.com/v1/houseware',
        url2: 'https://acnhapi.com/v1/wallmounted',
        url3: 'https://acnhapi.com/v1/misc'
    },
    houseware: {
        text: 'Housewares',
        collectedKey: 'houseware-collected',
        allKey: 'houseware',
        url: 'https://acnhapi.com/v1/houseware',
        none: "You haven't collected any houseware yet.",
    },
    wallmounted: {
        text: 'Wall-mounted',
        collectedKey: 'wallmounted-collected',
        allKey: 'wallmounted',
        url: 'https://acnhapi.com/v1/wallmounted',
        none: "You haven't collected any wall-mounted furniture yet.",
    },
    misc: {
        text: 'Miscellaneous',
        collectedKey: 'misc-collected',
        allKey: 'misc',
        url: 'https://acnhapi.com/v1/misc',
        none: "You haven't collected any miscellaneous furniture yet.",
    },
    error: {
        retrieving: "There was a problem retrieving your saved data. Please restart the app to make sure it doesn't happen again.",
        storing: "There was a problem storing your data. Please restart the app to make sure it doesn't happen again."
    }
};

export default CONSTANTS;