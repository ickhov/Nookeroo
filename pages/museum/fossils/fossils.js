/**
 * Fossil list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Fossils({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.fossil}
            navigation={navigation}
            nextScreen='FossilDetail'
            haveID={false} />
    );

}
