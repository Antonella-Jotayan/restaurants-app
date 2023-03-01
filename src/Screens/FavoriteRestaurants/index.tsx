import {SvgImage} from '@src/Components';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const FavoriteRestaurants = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Favorite Restaurants</Text>
      <TouchableOpacity style={styles.favoriteContainer}>
        <View>
          <Text style={styles.restaurantName}>Kansas pilar</Text>
          <Text style={styles.restaurantAddress}>
            Avenida regimiento de patricios
          </Text>
        </View>
        <SvgImage name="arrowRight" />
      </TouchableOpacity>
    </ScrollView>
  );
};
export {FavoriteRestaurants};
