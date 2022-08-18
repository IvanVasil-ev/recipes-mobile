import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LinkingConfiguration } from './LinkingConfiguration';
import { RootStackParamList } from '../types';
import {
  HomeScreen,
  ModalScreen,
  NewRecipeScreen,
  RecipeScreen,
} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Root">
    <Stack.Screen name="NewRecipe" component={NewRecipeScreen} options={{ title: 'Новый рецепт' }} />
    <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: 'Название рецепта' }} />
    <Stack.Screen name="Root" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
);
