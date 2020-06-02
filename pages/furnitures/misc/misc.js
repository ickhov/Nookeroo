/**
 * Miscellaneous list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Miscellaneous({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.misc}
            navigation={navigation}
            nextScreen='FurnitureDetail' />
    );

}