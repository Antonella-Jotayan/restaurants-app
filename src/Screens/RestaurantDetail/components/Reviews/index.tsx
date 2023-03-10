import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {ReviewRow} from '../ReviewRow';
import {styles} from './styles';

interface ReviewsProps {
  restaurant: Restaurant;
}

const Reviews: FC<ReviewsProps> = ({restaurant}) => {
  if (!restaurant.reviews?.length) {
    return null;
  }
  return (
    <View style={styles.reviewsContainer}>
      <Text style={styles.reviewsTitle}>Reviews</Text>
      {restaurant.reviews.map(review => {
        return <ReviewRow key={review.time} review={review} />;
      })}
    </View>
  );
};

export {Reviews};
