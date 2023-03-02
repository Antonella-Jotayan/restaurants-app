import {COLORS} from '@src/styles/foundations/colors';
import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textContainer: {
    width: '100%',
    marginLeft: 10,
    borderColor: COLORS.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
  },
  title: {
    ...FONTS.smallHighlight,
  },
  caption: {
    ...FONTS.lightText,
  },
});
export {styles};
