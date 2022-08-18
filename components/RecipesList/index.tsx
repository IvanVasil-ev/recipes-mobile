import * as React from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';

import { View } from '../View';
import { Text } from '../Text';
import { RecipeItem } from './RecipeItem';

export const RecipesList = () => {
  const data = [];

  return data.length ? (
    <FlatList
      data={[]}
      style={styles.container}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { title }, index }) => (
        <RecipeItem
          title={title}
          isLastItem={index === (data.length - 1)}
        />
      )}
    />
  ) : (
    <View style={styles.noContent}>
      <Text style={styles.noContentText}>
        У вас еще нет рецептов
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  noContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' ? 100 : 150,
  },
  noContentText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
