import * as React from 'react';
import { Text as DefaultText } from 'react-native';
import { useThemeColor } from '../../hooks';

type CustomTextProps = {
  lightColor?: string;
  darkColor?: string;
  otherProps?: any;
};

export type TextProps = CustomTextProps & DefaultText['props'];

export const Text = ({
  style, lightColor, darkColor, ...otherProps
}: TextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};
