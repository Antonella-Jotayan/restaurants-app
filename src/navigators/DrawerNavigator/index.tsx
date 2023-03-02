import {createDrawerNavigator} from '@react-navigation/drawer';
import {FavoriteRestaurants} from '@src/Screens/FavoriteRestaurants';
import {Home} from '@src/Screens/Home';
import {RecentRestaurants} from '@src/Screens/RecentRestaurants';
import {COLORS} from '@src/styles/foundations/colors';
import {DrawerParams} from './types';

const Drawer = createDrawerNavigator<DrawerParams>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: COLORS.primary,
        headerTitleStyle: {color: COLORS.dark},
        drawerInactiveTintColor: COLORS.dark,
        drawerActiveTintColor: COLORS.primary,
      }}>
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
