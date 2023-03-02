import {FC} from 'react';
import {Text, View} from 'react-native';
import {SvgImage} from '@src/Components';
import {RemoteImage} from '@src/Components/RemoteImage/RemoteImage';
import {Review} from '@src/store/apis/googleMapsApi/types';
import {styles} from './styles';
import {COLORS} from '@src/styles/foundations/colors';

interface ReviewRowProps {
  review: Review;
}

const ReviewRow: FC<ReviewRowProps> = ({review}) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.textContentContainer}>
        <View style={styles.reviewHeader}>
          <View style={styles.headerLeftContainer}>
            <RemoteImage
              style={styles.userImage}
              source={{uri: review.profile_photo_url}}
              fallbackBackImage="userDefault"
            />
            <View style={styles.headerLeftInfoContainer}>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{review.rating}</Text>
                <SvgImage name="starFilled" fill={COLORS.primary} />
              </View>
              <Text style={styles.infoItem}>{review.author_name}</Text>
            </View>
          </View>
          <Text style={styles.timeText}>
            {review.relative_time_description}
          </Text>
        </View>
        {review.text && (
          <Text style={styles.reviewDescription}>{review.text}</Text>
        )}
      </View>
    </View>
  );
};

export {ReviewRow};
