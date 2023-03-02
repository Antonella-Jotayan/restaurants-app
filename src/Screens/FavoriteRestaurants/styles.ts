import {COLORS} from '@src/styles/foundations/colors';
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

  flatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: COLORS.light,
  },
});

export {styles};
