import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationRoot from './src/navigation/MainNavigator';

export default class App extends Component{
  render() {
    return (
      <NavigationRoot />
    );
  }
}

