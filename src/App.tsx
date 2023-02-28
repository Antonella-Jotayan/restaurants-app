import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {Map} from './Screens/Map';
import {FavoriteRestaurants} from './Screens/FavoriteRestaurants';
import {RecentRestaurants} from './Screens/RecentRestaurants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantDetail} from './Screens/RestaurantDetail';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Map">
      <Drawer.Screen name="Map" component={Map} />
      <Drawer.Screen
        name="Favorite restaurants"
        component={FavoriteRestaurants}
      />
      <Drawer.Screen name="Recent Restaurants" component={RecentRestaurants} />
    </Drawer.Navigator>
  );
};

const SharedScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurant Detail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Shared Screens" component={SharedScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
