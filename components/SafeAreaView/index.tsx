import * as React from 'react';
import { SafeAreaView as DefaultSafeAreaView } from 'react-native';
import { useThemeColor } from '../../hooks';

type CustomSafeAreaViewProps = {
  lightColor?: string;
  darkColor?: string;
  otherProps?: any;
};

export type SafeAreaViewProps = CustomSafeAreaViewProps & DefaultSafeAreaView['props'];

export const SafeAreaView = ({
  style, lightColor, darkColor, ...otherProps
}: SafeAreaViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
};
