import {SvgImage} from '@src/Components';
import {Text, View} from 'react-native';
import {styles} from './styles';

const RestaurantRating = () => {
  return (
    <View style={styles.opinionsContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>4.5</Text>
        <SvgImage name="star" />
      </View>
      <View style={styles.totalReviews}>
        <Text style={styles.totalReviewsText}>20 ratings</Text>
        <SvgImage name="book" />
      </View>
    </View>
  );
};
export {RestaurantRating};
