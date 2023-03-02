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
    backgroundColor: COLORS.light,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    justifyContent: 'flex-end',
    paddingLeft: 16,
    width: 60,
  },
  contentContainerStyle: {
    paddingBottom: 16,
    backgroundColor: COLORS.light,
  },
  container: {
    backgroundColor: COLORS.light,
  },
});

export {styles};
