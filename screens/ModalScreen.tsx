import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import {
  EditScreenInfo,
  SafeAreaView,
  Text,
  View,
} from '../components';

export const ModalScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Modal</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <EditScreenInfo path="/screens/ModalScreen.tsx" />

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
