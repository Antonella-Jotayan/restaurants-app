import {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {SvgImage, SvgImageProps} from '../SvgImage';

interface IconButtonProps extends TouchableOpacityProps {
  name: SvgImageProps['name'];
  fill?: SvgImageProps['fill'];
  size?: SizeType;
}

type SizeType = 'sm' | 'md' | 'lg';

const SIZE: Record<SizeType, number> = {
  sm: 20,
  md: 30,
  lg: 40,
};

const IconButton: FC<IconButtonProps> = ({
  name,
  fill,
  size = 'sm',
  ...props
}) => {
  return (
    <TouchableOpacity
      hitSlop={{top: 15, bottom: 15, right: 15, left: 15}}
      style={{width: SIZE[size], height: SIZE[size]}}
      {...props}>
      <SvgImage
        name={name}
        fill={fill}
        height={SIZE[size]}
        width={SIZE[size]}
      />
    </TouchableOpacity>
  );
};

export {IconButton};
