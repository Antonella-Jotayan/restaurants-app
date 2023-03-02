import {SvgImage} from '@src/Components';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface RestaurantRatingProps {
  restaurant: Restaurant;
}
const RestaurantRating: FC<RestaurantRatingProps> = ({restaurant}) => {
  return (
    <View style={styles.opinionsContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{restaurant.rating ?? 0}</Text>
        <SvgImage name="star" />
      </View>
      <View style={styles.totalReviews}>
        <Text style={styles.totalReviewsText}>
          {restaurant.user_ratings_total ?? 0} ratings
        </Text>
        <SvgImage name="book" />
      </View>
    </View>
  );
};
export {RestaurantRating};
