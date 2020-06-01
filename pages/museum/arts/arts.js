/**
 * Art list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../../components/collectionView';

export default function ArtGuide({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.art}
            navigation={navigation}
            nextScreen='ArtDetail'
            haveID={true}
            isIcon={true} />
    );

}
