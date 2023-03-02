import {NavigationProp, RouteProp} from '@react-navigation/native';

export type HomeStackNavigatorParams = {
  Home: undefined;
  RestaurantDetail: {placeId: string};
};

export type HomeStackNavigatorProps = NavigationProp<HomeStackNavigatorParams>;

export type HomeStackNavigatorRouteProp<
  T extends keyof HomeStackNavigatorParams,
> = RouteProp<HomeStackNavigatorParams, T>;
