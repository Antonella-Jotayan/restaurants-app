import {FC, useState} from 'react';
import {Image, ImageProps} from 'react-native';

const FALLBACK_IMAGES = {
  default: require('@src/assets/images/fallback-image.jpg'),
  userDefault: require('@src/assets/images/fallback-user-image.png'),
};
interface RemoteImageProps extends ImageProps {
  fallbackBackImage?: keyof typeof FALLBACK_IMAGES;
}

const RemoteImage: FC<RemoteImageProps> = ({
  source,
  fallbackBackImage = 'default',
  ...props
}) => {
  const [imageSource, setImageSource] = useState(source);

  const onError = () => {
    setImageSource(FALLBACK_IMAGES[fallbackBackImage]);
  };
  return <Image {...props} source={imageSource} onError={onError} />;
};

export {RemoteImage};
