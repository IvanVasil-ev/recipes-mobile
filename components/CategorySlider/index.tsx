import * as React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, FlatList, Platform } from 'react-native';

import { getActiveCategory, getCategories } from '../../store/categories/selectors';
import { CategorySliderItem } from './CategorySliderItem';
import { Text } from '../Text';
import { View } from '../View';

export const CategorySlider = () => {
  const data = useSelector(getCategories) || [];
  const activeCategory = useSelector(getActiveCategory);

  return data.length ? (
    <FlatList
      horizontal
      data={data}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item: { id, title }, index }) => (
        <CategorySliderItem
          id={id}
          title={title}
          isLastItem={index === (data.length - 1)}
          isActiveItem={activeCategory?.id === id}
        />
      )}
    />
  ) : (
    <View>
      <Text>
        No content
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 20,
    maxHeight: Platform.OS === 'ios' ? 100 : 150,
  },
});
