import {COLORS} from '@src/styles/foundations/colors';
import {FC} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {SvgImageProps, SvgImage} from '../SvgImage';
import {styles} from './styles';

interface LabelProps {
  text: string;
  iconName?: SvgImageProps['name'];
  reversed?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  fill?: keyof typeof COLORS;
}

const Label: FC<LabelProps> = ({
  text,
  iconName,
  reversed = false,
  containerStyle,
  fill = 'dark',
}) => {
  return (
    <View
      style={[
        styles.ratingContainer,
        reversed && styles.reversed,
        containerStyle,
      ]}>
      <Text style={styles.ratingText}>{text}</Text>
      {!!iconName && <SvgImage name={iconName} fill={COLORS[fill]} />}
    </View>
  );
};

export {Label};
