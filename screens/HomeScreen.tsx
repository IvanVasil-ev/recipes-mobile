import * as React from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView,
  FloatButton,
  CategorySlider,
  RecipesList,
} from '../components';

export const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <CategorySlider />
    <RecipesList />
    <FloatButton />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});
