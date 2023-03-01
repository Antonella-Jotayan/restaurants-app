import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flexGrow: 1},
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  title: {
    ...FONTS.title,
    alignSelf: 'center',
    marginVertical: 10,
  },

  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },

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
