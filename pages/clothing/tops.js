/**
 * Tops list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Tops({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.tops}
            navigation={navigation}
            nextScreen='ClothingTopsDetail' />
    );

}