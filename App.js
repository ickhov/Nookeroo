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
import HostingIsland from './pages/hosting-island/hosting-island';

const App = () => {
  return (
    <>
      <CustomStatusBar/>
      <HostingIsland/>
    </>
  );
};

export default App;
