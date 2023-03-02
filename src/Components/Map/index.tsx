import {FC, useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {useGetNearRestaurantsQuery} from '@src/store/apis/googleMapsApi';
import {Coordinates, Restaurant} from '@src/store/apis/googleMapsApi/types';
import {CustomMarker} from './components/CustomMarker/CustomMarker';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

import {IconButton} from '../IconButton';
import {useGeolocation} from '@src/hooks/useGeolocation';
import {RootStackNavigatorProps} from '@src/navigators/RootStackNavigator/types';
import {useAppDispatch} from '@src/store/store';
import {addRecent} from '@src/store/slices/recentRestaurants';
import {COLORS} from '@src/styles/foundations/colors';

interface MapProps {
  coordinates: Coordinates;
  setCoordinates: (value: Coordinates) => void;
}

const deltas = {
  latitudeDelta: 0.015,
  longitudeDelta: 0.015,
};

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  ...deltas,
};

const Map: FC<MapProps> = ({coordinates, setCoordinates}) => {
  const {data} = useGetNearRestaurantsQuery(coordinates, {
    skip: !coordinates,
  });

  const navigation = useNavigation<RootStackNavigatorProps>();
  const {getLocation, location} = useGeolocation();
  const mapRef = useRef<MapView>(null);
  const dispatch = useAppDispatch();

  const navigateToDetail = (restaurant: Restaurant) => {
    dispatch(addRecent(restaurant));
    navigation.navigate('RestaurantDetail', {placeId: restaurant.place_id});
    console.log('restaurant', JSON.stringify(restaurant, null, 2));
  };

  const onPressUserLocation = () => {
    getLocation();
    mapRef.current?.animateToRegion({...coordinates, ...deltas}, 1000);
  };

  useEffect(() => {
    if (location) {
      setCoordinates({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }, [location, setCoordinates]);

  return (
    <>
      <MapView
        ref={mapRef}
        region={{
          ...deltas,
          latitude: coordinates?.latitude ?? initialRegion.latitude,
          longitude: coordinates?.longitude ?? initialRegion.longitude,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}>
        {data?.results.slice(0, 10).map(restaurant => {
          return (
            <CustomMarker
              key={restaurant.place_id}
              restaurant={restaurant}
              onPress={() => navigateToDetail(restaurant)}
            />
          );
        })}
      </MapView>
      <IconButton
        name="location"
        style={styles.locationButton}
        onPress={onPressUserLocation}
        fill={COLORS.primary}
      />
    </>
  );
};

export {Map};
