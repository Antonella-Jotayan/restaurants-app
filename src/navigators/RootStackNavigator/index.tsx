import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigation} from '../DrawerNavigator';
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
    </Stack.Navigator>
  );
};

export {RootStackNavigator};
