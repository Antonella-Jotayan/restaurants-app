import {COLORS} from '@src/styles/foundations/colors';
import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftInfoContainer: {marginLeft: 10},
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
    ...FONTS.smallHighlight,
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
    paddingVertical: 20,
    borderBottomColor: COLORS.semiDark,
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
