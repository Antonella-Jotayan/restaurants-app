import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  opinionsContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  totalReviews: {
    flexDirection: 'row',
  },
  totalReviewsText: {
    ...FONTS.body,
    paddingHorizontal: 4,
  },
});

export {styles};
