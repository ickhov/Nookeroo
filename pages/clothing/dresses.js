/**
 * Dresses list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Dresses({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.dress}
            navigation={navigation}
            nextScreen='ClothingDressDetail' />
    );

}