import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  infoItemsContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  infoItem: {
    ...FONTS.smallHighlight,
  },
  infoItemLink: {
    paddingVertical: 6,
    ...FONTS.link,
  },
  infoValue: {...FONTS.body},
  infoItemContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
export {styles};
