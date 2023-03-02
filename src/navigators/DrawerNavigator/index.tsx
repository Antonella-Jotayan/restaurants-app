import {createDrawerNavigator} from '@react-navigation/drawer';
import {FavoriteRestaurants} from '@src/Screens/FavoriteRestaurants';
import {Home} from '@src/Screens/Home';
import {RecentRestaurants} from '@src/Screens/RecentRestaurants';
import {DrawerParams} from './types';

const Drawer = createDrawerNavigator<DrawerParams>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{title: '📍 Map'}} />
      <Drawer.Screen
        name="FavoriteRestaurants"
        component={FavoriteRestaurants}
        options={{title: '❤️ Favorite Restaurants'}}
      />
      <Drawer.Screen
        name="RecentRestaurants"
        component={RecentRestaurants}
        options={{title: '⏱️ Recent Restaurants'}}
      />
    </Drawer.Navigator>
  );
};

export {DrawerNavigation};
