/**
 * Bottoms list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Bottoms({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.bottoms}
            navigation={navigation}
            nextScreen='ClothingBottomsDetail' />
    );

}