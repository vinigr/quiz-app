import React from 'react';
import {
  View, Text, Dimensions, StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>Sem conexão!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#E31515',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0,
  },
  offlineText: { color: '#fff' },
});

export default MiniOfflineSign;
