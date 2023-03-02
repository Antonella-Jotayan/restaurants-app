import {COLORS} from '@src/styles/foundations/colors';
import {SvgProps} from 'react-native-svg';
import {SVG_IMAGES} from './constants';

export interface SvgImageProps extends SvgProps {
  name: keyof typeof SVG_IMAGES;
}

const SvgImage = ({name, fill = COLORS.dark, ...props}: SvgImageProps) => {
  const SVG = SVG_IMAGES[name];
  return <SVG fill={fill} {...props} />;
};

export {SvgImage};
