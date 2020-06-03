/**
 * Fish list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Fishes({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.fish}
            navigation={navigation}
            nextScreen='FishDetail'
            haveID={true} />
    );

}
