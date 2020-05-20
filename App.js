/**
 * Nookeroo app
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar
} from 'react-native';

import CustomStatusBar from './pages/components/statusBar';
import StalkMarketList from './pages/stalk-market/stalk-market-new-listing';

const App = () => {
  return (
    <>
      <CustomStatusBar/>
      <StalkMarketList/>
    </>
  );
};

export default App;
