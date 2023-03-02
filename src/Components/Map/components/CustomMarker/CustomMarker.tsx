import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {MapMarkerProps, Marker} from 'react-native-maps';
import {View} from 'react-native';
import {FC} from 'react';
import {SvgImage} from '@src/Components/SvgImage';
import {styles} from './styles';
import {imageUtils} from '@src/utils/imageUtils';
import {RemoteImage} from '@src/Components/RemoteImage/RemoteImage';

interface CustomMarkerProps {
  restaurant: Restaurant;
  onPress: MapMarkerProps['onPress'];
}

const CustomMarker: FC<CustomMarkerProps> = ({restaurant, onPress}) => {
  return (
    <Marker
      coordinate={{
        latitude: restaurant.geometry.location.lat,
        longitude: restaurant.geometry.location.lng,
      }}
      title={restaurant.name}
      description={restaurant.name}
      onPress={onPress}>
      <View style={styles.markerContainer}>
        <SvgImage
          name="mapMarkerShape"
          style={styles.markerShape}
          width={65}
          height={65}
        />

        <RemoteImage
          style={styles.markerImage}
          source={{
            uri: imageUtils.createGoogleImageUrl(
              restaurant?.photos?.[0]?.photo_reference,
            ),
          }}
        />
      </View>
    </Marker>
  );
};
export {CustomMarker};
