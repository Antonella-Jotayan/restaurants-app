import {createDrawerNavigator} from '@react-navigation/drawer';
import {FavoriteRestaurants} from '@src/Screens/FavoriteRestaurants';
import {RecentRestaurants} from '@src/Screens/RecentRestaurants';
import {HomeStackNavigator} from '../HomeStackNavigator';
import {DrawerParams} from './types';

const Drawer = createDrawerNavigator<DrawerParams>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{}}>
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
      <Drawer.Screen
        name="FavoriteRestaurants"
        component={FavoriteRestaurants}
      />
      <Drawer.Screen name="RecentRestaurants" component={RecentRestaurants} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigation};
