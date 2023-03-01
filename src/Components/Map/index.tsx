import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={initialRegion}
    />
  );
};

export {Map};
