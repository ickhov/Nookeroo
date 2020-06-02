/**
 * Houseware list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Housewares({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.houseware}
            navigation={navigation}
            nextScreen='FurnitureDetail' />
    );

}