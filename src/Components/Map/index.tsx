import {useGetNearRestaurantsQuery} from '@src/store/apis/googleMapsApi';
import {Coordinates} from '@src/store/apis/googleMapsApi/types';
import {FC} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {CustomMarker} from './components/CustomMarker/CustomMarker';
import {styles} from './styles';
interface MapProps {
  coordinates: Coordinates;
}
const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.015,
};

const Map: FC<MapProps> = ({coordinates}) => {
  const {data} = useGetNearRestaurantsQuery(coordinates, {
    skip: !coordinates,
  });

  return (
    <MapView
      region={{
        ...initialRegion,
        latitude: coordinates?.latitude ?? initialRegion.latitude,
        longitude: coordinates?.longitude ?? initialRegion.longitude,
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}>
      {data?.results.slice(0, 10).map(restaurant => {
        return (
          <CustomMarker restaurant={restaurant} key={restaurant.place_id} />
        );
      })}
    </MapView>
  );
};

export {Map};
