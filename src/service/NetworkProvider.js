import React, {PureComponent} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {StatusBar} from 'react-native';
import OfflineNotice from '../components/OfflineNotice';

export const NetworkContext = React.createContext({isConnected: true});

export class NetworkProvider extends PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }

  handleConnectivityChange = isConnected => {
    this.setState({isConnected});
    if (!isConnected) {
      StatusBar.setBarStyle('light-content');
      return StatusBar.setBackgroundColor('#E31515');
    }
    StatusBar.setBackgroundColor('#fafafa');
    StatusBar.setBarStyle('dark-content');
  };

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
        {!this.state.isConnected && <OfflineNotice />}
      </NetworkContext.Provider>
    );
  }
}
