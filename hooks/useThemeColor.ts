import { colors } from '../constants/colors';
import { useColorScheme } from './useColorScheme';

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof colors.light & keyof typeof colors.dark,
) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return colors[theme][colorName];
};
