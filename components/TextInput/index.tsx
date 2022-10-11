import React from 'react';
import {
  TextStyle,
  StyleProp,
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
} from 'react-native';
import { View } from '../View';
import { Text } from '../Text';

type CustomTextInputProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>,
  containerStyle?: StyleProp<TextStyle>,
};

type TextInputProps = CustomTextInputProps & BaseTextInputProps;

export const TextInput = ({
  title,
  value,
  style,
  onChange,
  titleStyle,
  placeholder,
  containerStyle,
  ...otherProps
}: TextInputProps) => (
  <View style={[styles.container, containerStyle]}>
    {Boolean(title) && (
      <Text style={[styles.title, titleStyle]}>
        {title}
      </Text>
    )}
    <BaseTextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={[
        styles.textInput,
        otherProps.multiline ? styles.multiLine : styles.singleLine,
        style,
      ]}
      multiline={otherProps.multiline}
      {...otherProps}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 8,
  },
  singleLine: {
    height: 50,
  },
  multiLine: {
    height: 150,
  },
});
