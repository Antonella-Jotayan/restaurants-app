import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  restaurantAddress: {
    ...FONTS.lightText,
    marginVertical: 3,
    paddingRight: 20,
  },
  restaurantName: {
    ...FONTS.smallHighlight,
  },
  favoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
});

export {styles};
