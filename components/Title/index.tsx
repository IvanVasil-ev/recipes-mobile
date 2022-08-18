import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../View';
import { Text } from '../Text';

export const Title = ({ title }: { title: string }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingHorizontal: 25,
    height: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
