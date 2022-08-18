import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, FlatList, Platform } from 'react-native';

import { getCategories } from '../../store/categories/selectors';
import { CategorySliderItem } from './CategorySliderItem';
import { Text } from '../Text';
import { View } from '../View';

export const CategorySlider = ({
  activeCategory,
  onPress,
}: any) => {
  const data = useSelector(getCategories) || [];

  return data.length ? (
    <FlatList
      horizontal
      data={data}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { id, title }, index }) => (
        <CategorySliderItem
          id={id}
          title={title}
          isFirstItem={index === 0}
          isLastItem={index === (data.length - 1)}
          onPress={onPress}
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
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    maxHeight: Platform.OS === 'ios' ? 100 : 140,
  },
});
