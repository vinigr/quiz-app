import React from 'react';
import {
  StatusBar,
} from 'react-native';
import NavigationRoot from './src/navigation/MainNavigator';
import './ReactotronConfig';

const App = () => (
  <>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <NavigationRoot />
  </>
);

export default App;
