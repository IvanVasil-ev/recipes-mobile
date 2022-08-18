import * as React from 'react';
import {
  Platform,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { View } from '../View';
import { Text } from '../Text';
import { RecipeItem } from './RecipeItem';

export const RecipesList = ({ activeCategory, navigation }: any) => {
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
      <TouchableOpacity style={styles.testRecipe} onPress={() => navigation.navigate('Recipe')}>
        <Text>
          Тестовый рецепт
        </Text>
      </TouchableOpacity>
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
  testRecipe: {
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
});
