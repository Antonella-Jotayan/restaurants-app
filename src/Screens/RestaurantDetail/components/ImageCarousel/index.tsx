import {RemoteImage} from '@src/Components/RemoteImage/RemoteImage';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {imageUtils} from '@src/utils/imageUtils';
import {FC} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';

interface ImageCarouselProps {
  restaurant: Restaurant;
}

const ImageCarousel: FC<ImageCarouselProps> = ({restaurant}) => {
  if (restaurant.photos?.length <= 1) {
    return null;
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContentContainer}>
      {restaurant.photos.slice(1).map(photo => {
        return (
          <RemoteImage
            key={photo.photo_reference}
            style={styles.carouselImage}
            source={{
              uri: imageUtils.createGoogleImageUrl(photo.photo_reference),
            }}
          />
        );
      })}
    </ScrollView>
  );
};

export {ImageCarousel};
