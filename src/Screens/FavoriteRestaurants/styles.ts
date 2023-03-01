import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    ...FONTS.subtitle,
    marginVertical: 10,
  },
  favoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  restaurantName: {
    ...FONTS.smallHighlight,
  },
  restaurantAddress: {
    ...FONTS.lightText,
    marginVertical: 3,
  },
});

export {styles};
