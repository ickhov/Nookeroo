/**
 * Sea Creatures list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Sea({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.sea}
            navigation={navigation}
            nextScreen='SeaDetail'
            haveID={true} />
    );

}
