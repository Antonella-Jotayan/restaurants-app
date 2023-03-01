import {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {SvgImage, SvgImageProps} from '../SvgImage';
import {styles} from './styles';

interface RowProps extends TouchableOpacityProps {
  title: string;
  caption: string;
  iconName: SvgImageProps['name'];
}
const Row: FC<RowProps> = ({title, caption, iconName, ...props}) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <SvgImage name={iconName} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {Row};
