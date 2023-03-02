import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantDetail} from '@src/Screens/RestaurantDetail';
import {HeaderRight} from '@src/Screens/RestaurantDetail/components/HeaderRight';
import {DrawerNavigation} from '../DrawerNavigator';
import {styles} from './styles';
import {RootStackNavigatorParams} from './types';

const Stack = createStackNavigator<RootStackNavigatorParams>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{
          title: 'Restaurant Detail',
          headerRight: HeaderRight,
          headerRightContainerStyle: styles.headerRightContainerStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export {RootStackNavigator};
