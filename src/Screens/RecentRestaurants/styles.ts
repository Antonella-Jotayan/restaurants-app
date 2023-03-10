import {COLORS} from '@src/styles/foundations/colors';
import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    ...FONTS.subtitle,
    marginVertical: 10,
  },
  emptyRecents: {
    ...FONTS.smallHighlight,
    alignSelf: 'center',
    marginVertical: 10,
  },

  flatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
});

export {styles};
