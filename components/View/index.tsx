import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { useThemeColor } from '../../hooks';

type CustomViewProps = {
  lightColor?: string;
  darkColor?: string;
  otherProps?: any;
};

export type ViewProps = CustomViewProps & DefaultView['props'];

export const View = ({
  style, lightColor, darkColor, ...otherProps
}: ViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
