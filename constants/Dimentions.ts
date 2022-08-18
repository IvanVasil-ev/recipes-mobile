import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const window = {
  width,
  height,
  isSmallDevice: width < 375,
};
