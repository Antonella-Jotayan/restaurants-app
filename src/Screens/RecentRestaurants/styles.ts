import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    ...FONTS.subtitle,
    marginVertical: 10,
    paddingHorizontal: 16,
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
  },
});

export {styles};
