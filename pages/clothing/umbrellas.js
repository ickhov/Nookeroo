/**
 * Umbrellas list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Umbrellas({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.umbrella}
            navigation={navigation}
            nextScreen='ClothingUmbrellaDetail' />
    );

}