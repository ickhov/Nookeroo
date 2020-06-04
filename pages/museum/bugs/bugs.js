/**
 * Bug list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../collectionView';

export default function Bugs({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.bug}
            navigation={navigation}
            nextScreen='BugDetail'
            haveID={true} />
    );

}