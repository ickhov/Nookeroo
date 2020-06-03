/**
 * Bags list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Bags({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.bag}
            navigation={navigation}
            nextScreen='ClothingBagDetail' />
    );

}