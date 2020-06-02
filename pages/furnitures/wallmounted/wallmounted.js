/**
 * Wall-mounted list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Wallmounted({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.wallmounted}
            navigation={navigation}
            nextScreen='FurnitureDetail' />
    );

}