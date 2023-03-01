import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  totalReviews: {
    flexDirection: 'row',
  },
  ratingText: {
    paddingHorizontal: 4,
    ...FONTS.smallHighlight,
  },
  timeText: {
    ...FONTS.body,
  },
  infoItem: {
    ...FONTS.body,
    paddingVertical: 6,
  },
  reviewsContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  reviewContainer: {
    width: '100%',
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textContentContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  reviewHeader: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewDescription: {
    ...FONTS.body,
  },
});

export {styles};
