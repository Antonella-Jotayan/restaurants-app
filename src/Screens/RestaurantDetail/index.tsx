import {useRoute} from '@react-navigation/native';
import {RemoteImage} from '@src/Components/RemoteImage/RemoteImage';
import {RootStackRouteProp} from '@src/navigators/RootStackNavigator/types';
import {useGetRestaurantDetailQuery} from '@src/store/apis/googleMapsApi';
import {imageUtils} from '@src/utils/imageUtils';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {DetailedInfo} from './components/DetailedInfo';
import {ImageCarousel} from './components/ImageCarousel';
import {RestaurantRating} from './components/RestaurantRating';
import {Reviews} from './components/Reviews';
import {styles} from './styles';

const RestaurantDetail = () => {
  const {params} = useRoute<RootStackRouteProp<'RestaurantDetail'>>();

  const {data, isLoading, isError} = useGetRestaurantDetailQuery(
    params.placeId,
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError || !data) {
    return <Text>There was an error with the restaurant</Text>;
  }

  const {result: restaurant} = data;

  return (
    <View style={styles.container}>
      <RemoteImage
        style={styles.image}
        source={{
          uri: imageUtils.createGoogleImageUrl(
            restaurant.photos?.[0]?.photo_reference,
          ),
        }}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <RestaurantRating restaurant={restaurant} />
          <DetailedInfo restaurant={restaurant} />
          <ImageCarousel restaurant={restaurant} />
          <Reviews restaurant={restaurant} />
        </View>
      </ScrollView>
    </View>
  );
};

export {RestaurantDetail};
