import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text } from '../components';

export const RecipeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      Описание рецепта
    </Text>
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
});
