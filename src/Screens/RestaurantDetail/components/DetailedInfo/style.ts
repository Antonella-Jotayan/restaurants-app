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
  infoItem: {paddingVertical: 6, ...FONTS.smallHighlight},
  infoValue: {...FONTS.body},
});
export {styles};
