import {FC} from 'react';
import {View} from 'react-native';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {Label} from '@src/Components/Label';
import {styles} from './styles';

interface RestaurantRatingProps {
  restaurant: Restaurant;
}
const RestaurantRating: FC<RestaurantRatingProps> = ({restaurant}) => {
  return (
    <View style={styles.opinionsContainer}>
      <Label text={`${restaurant.rating ?? 0}`} iconName="star" />
      <Label
        text={`${restaurant.user_ratings_total ?? 0} ratings`}
        iconName="book"
      />
    </View>
  );
};
export {RestaurantRating};
