import * as React from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView,
  FloatButton,
  CategorySlider,
  RecipesList,
} from '../components';
import { RootStackScreenProps } from '../types';

export const HomeScreen = ({ navigation }: RootStackScreenProps<'Root'>) => (
  <SafeAreaView style={styles.container}>
    <CategorySlider />
    <RecipesList navigation={navigation} />
    <FloatButton navigation={navigation} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});
