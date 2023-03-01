import {Coordinates} from '@src/store/apis/googleMapsApi/types';
import {FC} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';
interface MapProps {
  coordinates: Coordinates;
}
const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map: FC<MapProps> = ({coordinates}) => {
  return (
    <MapView
      region={{
        ...initialRegion,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
    />
  );
};

export {Map};
