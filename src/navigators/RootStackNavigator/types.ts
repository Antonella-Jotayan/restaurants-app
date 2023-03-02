import {NavigationProp, RouteProp} from '@react-navigation/native';

export type RootStackNavigatorParams = {
  Drawer: undefined;
  RestaurantDetail: {placeId: string};
};

export type RootStackNavigatorProps = NavigationProp<RootStackNavigatorParams>;

export type RootStackRouteProp<T extends keyof RootStackNavigatorParams> =
  RouteProp<RootStackNavigatorParams, T>;
