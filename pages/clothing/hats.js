/**
 * Hats list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Hats({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.hat}
            navigation={navigation}
            nextScreen='ClothingHatDetail' />
    );

}