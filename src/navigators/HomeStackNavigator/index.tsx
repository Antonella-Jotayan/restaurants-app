import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@src/Screens/Home';
import {RestaurantDetail} from '@src/Screens/RestaurantDetail';
import {HomeStackNavigatorParams} from './types';

const Stack = createStackNavigator<HomeStackNavigatorParams>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator};
