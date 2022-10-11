import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text } from '../components';
import { RootStackParamList } from '../types';

export const RecipeScreen = ({
  route: { params: { item } },
}: NativeStackScreenProps<RootStackParamList, 'Recipe'>) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      {item?.title}
    </Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
