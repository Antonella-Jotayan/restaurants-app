import {Image, ScrollView, Text, View} from 'react-native';
import {DetailedInfo} from './components/DetailedInfo';
import {ImageCarousel} from './components/ImageCarousel';
import {RestaurantRating} from './components/RestaurantRating';
import {ReviewRow} from './components/ReviewRow';
import {styles} from './styles';

const RestaurantDetail = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
        }}
      />
      <Text style={styles.title}>Kansas Pilar</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.infoContainer}>
          <RestaurantRating />
          <DetailedInfo />
          <ImageCarousel />
          <View style={styles.reviewsContainer}>
            <Text style={styles.reviewsTitle}>Reviews</Text>
            <ReviewRow />
            <ReviewRow />
            <ReviewRow />
            <ReviewRow />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export {RestaurantDetail};
