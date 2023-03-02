import {locationUtils} from '@src/utils/locationUtils';
import {useState} from 'react';
import {Alert} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

const useGeolocation = () => {
  const [location, setLocation] = useState<GeoPosition | null>(null);

  const getLocation = async () => {
    const hasPermission = await locationUtils.hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.error(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: true,
        showLocationDialog: true,
      },
    );
  };
  return {location, getLocation};
};
export {useGeolocation};
