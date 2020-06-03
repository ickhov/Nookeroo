/**
 * Accessories list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Accessories({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.accessories}
            navigation={navigation}
            nextScreen='ClothingAccessoriesDetail' />
    );

}