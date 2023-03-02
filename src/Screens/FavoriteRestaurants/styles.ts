import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    ...FONTS.subtitle,
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  emptyFavs: {
    ...FONTS.smallHighlight,
    alignSelf: 'center',
    marginVertical: 10,
  },
  favoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  flatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantName: {
    ...FONTS.smallHighlight,
  },
  restaurantAddress: {
    ...FONTS.lightText,
    marginVertical: 3,
    paddingRight: 20,
  },
});

export {styles};
