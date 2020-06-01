/**
 * Fossil list
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CONSTANTS from '../../constants';
import CollectionView from '../../components/collectionView';

export default function FossilGuide({ navigation }) {

    return (
        <CollectionView
            constants={CONSTANTS.fossil}
            navigation={navigation}
            nextScreen='FossilDetail'
            haveID={false}
            isIcon={false} />
    );

}
