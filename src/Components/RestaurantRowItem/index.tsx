import {FC, ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorProps} from '@src/navigators/RootStackNavigator/types';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {SvgImage} from '../SvgImage';
import {styles} from './styles';
import {COLORS} from '@src/styles/foundations/colors';
import {addRecent} from '@src/store/slices/recentRestaurants';
import {useAppDispatch} from '@src/store/store';

interface RestaurantRowItemProps {
  item: Restaurant;
  prependItem?: ReactNode;
}

const RestaurantRowItem: FC<RestaurantRowItemProps> = ({item, prependItem}) => {
  const navigation = useNavigation<RootStackNavigatorProps>();
  const dispatch = useAppDispatch();

  const navigateToDetail = (restaurant: Restaurant) => {
    dispatch(addRecent(restaurant));
    navigation.navigate('RestaurantDetail', {placeId: restaurant.place_id});
  };

  return (
    <TouchableOpacity
      style={styles.favoriteContainer}
      key={item.place_id}
      onPress={() => navigateToDetail(item)}>
      <View style={styles.leftSide}>
        {prependItem}
        <View style={styles.textContainer}>
          <Text style={styles.restaurantName} numberOfLines={1}>
            {item.name}
          </Text>
          {item.formatted_address && (
            <Text style={styles.restaurantAddress} numberOfLines={1}>
              {item.formatted_address}
            </Text>
          )}
        </View>
      </View>
      <SvgImage name="arrowRight" fill={COLORS.primary} />
    </TouchableOpacity>
  );
};

export {RestaurantRowItem};
