import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const FloatButton = () => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>
      +
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ceaa45',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    zIndex: 1000,
  },
  text: {
    lineHeight: 60,
    fontSize: 25,
    color: '#ffffff',
  },
});
