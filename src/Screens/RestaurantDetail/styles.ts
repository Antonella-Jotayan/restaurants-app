import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollView: {flexGrow: 1, paddingBottom: 16},
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
});

export {styles};
