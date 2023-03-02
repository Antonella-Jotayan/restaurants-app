import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantDetail} from '@src/Screens/RestaurantDetail';
import {HeaderRight} from '@src/Screens/RestaurantDetail/components/HeaderRight';
import {RestaurantsByRating} from '@src/Screens/RestaurantsByRating';
import {COLORS} from '@src/styles/foundations/colors';
import {DrawerNavigation} from '../DrawerNavigator';
import {styles} from './styles';
import {RootStackNavigatorParams} from './types';

const Stack = createStackNavigator<RootStackNavigatorParams>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.primary,
        headerTitleStyle: {color: COLORS.dark},
      }}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{headerShown: false, title: 'Home'}}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{
          title: 'Restaurant Detail',
          headerRight: HeaderRight,
          headerTitleStyle: styles.headerTitleStyle,
          headerRightContainerStyle: styles.headerRightContainerStyle,
        }}
      />
      <Stack.Screen
        name="RestaurantsByRating"
        component={RestaurantsByRating}
        options={{title: 'Restaurants By Rating'}}
      />
    </Stack.Navigator>
  );
};

export {RootStackNavigator};
