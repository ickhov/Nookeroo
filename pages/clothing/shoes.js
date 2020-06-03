/**
 * Shoes list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Shoes({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.shoes}
            navigation={navigation}
            nextScreen='ClothingShoesDetail' />
    );

}