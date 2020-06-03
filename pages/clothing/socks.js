/**
 * Socks list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from './collectionView';

export default function Socks({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.clothing.socks}
            navigation={navigation}
            nextScreen='ClothingSocksDetail' />
    );

}