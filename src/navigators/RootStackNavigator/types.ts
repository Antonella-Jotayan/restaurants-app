import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Coordinates} from '@src/store/apis/googleMapsApi/types';

export type RootStackNavigatorParams = {
  Drawer: undefined;
  RestaurantDetail: {placeId: string};
  RestaurantsByRating: {coordinates: Coordinates};
};

export type RootStackNavigatorProps = NavigationProp<RootStackNavigatorParams>;

export type RootStackRouteProp<T extends keyof RootStackNavigatorParams> =
  RouteProp<RootStackNavigatorParams, T>;
