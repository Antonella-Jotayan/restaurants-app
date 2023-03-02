import {FC} from 'react';
import {Text, View} from 'react-native';
import {SvgImage} from '@src/Components';
import {RemoteImage} from '@src/Components/RemoteImage/RemoteImage';
import {Review} from '@src/store/apis/googleMapsApi/types';
import {styles} from './styles';

interface ReviewRowProps {
  review: Review;
}

const ReviewRow: FC<ReviewRowProps> = ({review}) => {
  return (
    <View style={styles.reviewContainer}>
      <RemoteImage
        style={styles.userImage}
        source={{uri: review.profile_photo_url}}
      />
      <View style={styles.textContentContainer}>
        <View style={styles.reviewHeader}>
          <View>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{review.rating}</Text>
              <SvgImage name="star" />
            </View>
            <Text style={styles.infoItem}>{review.author_name}</Text>
          </View>
          <Text style={styles.timeText}>{review.time}</Text>
        </View>
        <Text style={styles.reviewDescription}>{review.text}</Text>
      </View>
    </View>
  );
};

export {ReviewRow};
