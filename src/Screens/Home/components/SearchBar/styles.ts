import {COLORS} from '@src/styles/foundations/colors';
import {FONTS} from '@src/styles/foundations/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 100,
    width: '100%',
    padding: 10,
    ...FONTS.body,
  },
});

export {styles};
