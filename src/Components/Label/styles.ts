import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    ...FONTS.body,
    paddingHorizontal: 4,
  },
  reversed: {flexDirection: 'row-reverse'},
});

export {styles};
