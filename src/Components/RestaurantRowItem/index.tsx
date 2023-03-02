import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorProps} from '@src/navigators/RootStackNavigator/types';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {SvgImage} from '../SvgImage';
import {styles} from './styles';
import {COLORS} from '@src/styles/foundations/colors';

interface RestaurantRowItemProps {
  item: Restaurant;
  icon?: string;
}

const RestaurantRowItem: FC<RestaurantRowItemProps> = ({item}) => {
  const navigation = useNavigation<RootStackNavigatorProps>();

  const navigateToDetail = (placeId: string) => {
    navigation.navigate('RestaurantDetail', {placeId});
  };

  return (
    <TouchableOpacity
      style={styles.favoriteContainer}
      key={item.place_id}
      onPress={() => navigateToDetail(item.place_id)}>
      <View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        {item.formatted_address && (
          <Text style={styles.restaurantAddress} numberOfLines={1}>
            {item.formatted_address}
          </Text>
        )}
      </View>
      <SvgImage name="arrowRight" fill={COLORS.primary} />
    </TouchableOpacity>
  );
};

export {RestaurantRowItem};
