import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from '../View';
import { Text } from '../Text';

export const RecipeItem = ({ title, isLastItem }: { title: string; isLastItem: boolean }) => (
  <TouchableOpacity style={[styles.container, !isLastItem && styles.itemSpace]} onPress={() => {}}>
    <View style={[styles.image, styles.notActive]}>
      <Text style={{ fontSize: 10 }}>
        Картинка
      </Text>
    </View>
    <Text style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {},
  title: {},
  itemSpace: {},
  image: {},
  notActive: {},
});
