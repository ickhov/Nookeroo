/**
 * Song list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../constants';
import CollectionView from '../components/collectionView';

export default function Songs({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.song}
            navigation={navigation}
            nextScreen='SongDetail'
            haveID={true} />
    );

}