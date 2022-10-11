import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, TextInput } from '../components';

// Картинка, Описание, Название, Игредиенты: { название, кол-во/вес }
export const NewRecipeScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredient, setIngredient] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput title="Название" value={title} onChange={setTitle} />
      <TextInput title="Ингредиент" value={ingredient} onChange={setIngredient} />
      <TextInput title="Описание" multiline value={description} onChange={setDescription} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
