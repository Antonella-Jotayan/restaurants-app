import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  reviewsContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  reviewsTitle: {
    ...FONTS.subtitle,
  },
});

export {styles};
