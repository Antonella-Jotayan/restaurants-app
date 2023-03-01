import {SvgImage} from '@src/Components';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const ReviewRow = () => {
  return (
    <View style={styles.reviewContainer}>
      <Image
        style={styles.userImage}
        source={{
          uri: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
        }}
      />
      <View style={styles.textContentContainer}>
        <View style={styles.reviewHeader}>
          <View>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>4.5</Text>
              <SvgImage name="star" />
            </View>
            <Text style={styles.infoItem}>Sean Allen</Text>
          </View>
          <Text style={styles.timeText}>a year ago</Text>
        </View>
        <Text style={styles.reviewDescription}>
          This restaurant is amazing because food is delicious, waiting times
          are very short and people is very kind.
        </Text>
      </View>
    </View>
  );
};

export {ReviewRow};
