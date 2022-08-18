import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView,
  FloatButton,
  CategorySlider,
  RecipesList,
  Title,
} from '../components';
import { RootStackScreenProps } from '../types';

export const HomeScreen = ({ navigation }: RootStackScreenProps<'Root'>) => {
  const [activeCategory, setActiveCategory] = useState<any | null>(null);
  const title = useMemo(() => (activeCategory ? activeCategory?.title : 'Всё'), [activeCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <CategorySlider activeCategory={activeCategory} onPress={setActiveCategory} />
      <Title title={title} />
      <RecipesList activeCategory={activeCategory} navigation={navigation} />
      <FloatButton navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});
