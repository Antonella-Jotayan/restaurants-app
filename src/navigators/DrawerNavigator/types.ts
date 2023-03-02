import {NavigationProp} from '@react-navigation/native';

export type DrawerParams = {
  Home: undefined;
  FavoriteRestaurants: undefined;
  RecentRestaurants: undefined;
};

export type DrawerNavigatorProps = NavigationProp<DrawerParams>;
