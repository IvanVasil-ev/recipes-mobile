import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../Text';
import { View } from '../View';

export const CategorySliderItem = ({ id, title, isLastItem }: { id: number; title: string; isLastItem: boolean }) => (
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
  container: {
    width: 75,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSpace: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 21,
    backgroundColor: '#7c7c7c',
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#7e7c7c',
  },
  notActive: {
    backgroundColor: '#f5f6f8',
  },
});
