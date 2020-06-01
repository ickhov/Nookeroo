/**
 * Fish list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../../components/collectionView';

export default function FishGuide({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.fish}
            navigation={navigation}
            nextScreen='FishDetail'
            haveID={true}
            isIcon={true} />
    );

}
