import {COLORS} from '@src/styles/foundations/colors';
import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 32,
  },
  ratingButton: {
    position: 'absolute',
    left: 16,
    top: 16,
    backgroundColor: COLORS.light,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    padding: 16,
  },
  ratingButtonText: {...FONTS.smallHighlight, color: COLORS.primary},
});

export {styles};
