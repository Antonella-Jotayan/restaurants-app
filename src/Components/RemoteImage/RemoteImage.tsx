import {FC, useState} from 'react';
import {Image, ImageProps} from 'react-native';

interface RemoteImageProps extends ImageProps {}

const FALLBACK_IMAGES = {
  default: require('@src/assets/images/fallback-image.jpg'),
};

const RemoteImage: FC<RemoteImageProps> = ({source, ...props}) => {
  const [imageSource, setImageSource] = useState(source);

  const onError = () => {
    setImageSource(FALLBACK_IMAGES.default);
  };
  return <Image {...props} source={imageSource} onError={onError} />;
};

export {RemoteImage};
