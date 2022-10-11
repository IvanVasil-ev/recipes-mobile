import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { categories as C } from '../../constants/categories';

import { Text } from '../Text';
import { View } from '../View';
import { StarIcon } from '../../assets/icons';

type CategorySliderProps = {
  id: string;
  title: string;
  onPress: any;
  isFirstItem: boolean;
  isLastItem: boolean;
  isActiveItem: boolean;
};

const ItemIcons = {
  [C.FAVOURITES]: StarIcon,
  [C.HOT]: StarIcon,
  [C.SALADS]: StarIcon,
  [C.BAKING]: StarIcon,
  [C.DRINKS]: StarIcon,
};

export const CategorySliderItem = ({
  id,
  title,
  isFirstItem,
  isLastItem,
  onPress,
  isActiveItem,
}: CategorySliderProps) => {
  const IconImage = ItemIcons[id];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        !isLastItem && styles.itemSpace,
        isFirstItem && styles.leftSpace,
        isLastItem && styles.rightSpace,
      ]}
      onPress={() => onPress(isActiveItem ? null : { id, title })}
    >
      <View style={[styles.image, isActiveItem ? styles.active : styles.notActive]}>
        <IconImage width={40} height={40} color="#fff" />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSpace: {
    marginRight: 10,
  },
  leftSpace: {
    marginLeft: 10,
  },
  rightSpace: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 12,
  },
  image: {
    width: 65,
    height: 65,
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
