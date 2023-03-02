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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 14,
    paddingHorizontal: 16,
  },
  leftSide: {
    width: '80%',
    flexDirection: 'row',
  },
  textContainer: {
    width: '90%',
  },
});

export {styles};
