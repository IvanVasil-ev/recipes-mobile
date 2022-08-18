import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const FloatButton = ({ navigation }: any) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('NewRecipe')}>
    <Svg width={25} height={25} fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </Svg>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ceaa45',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    zIndex: 1000,
  },
});
