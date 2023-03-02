import {useCallback} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgImage} from '@src/Components';
import {RootStackNavigatorProps} from '@src/navigators/RootStackNavigator/types';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {selectRestaurants} from '@src/store/slices/favoriteRestaurants';
import {useAppSelector} from '@src/store/store';
import {styles} from './styles';

const FavoriteRestaurants = () => {
  const favorites = useAppSelector(selectRestaurants);
  const navigation = useNavigation<RootStackNavigatorProps>();

  const hasFavorites = !!favorites.length;

  const navigateToDetail = (placeId: string) => {
    navigation.navigate('RestaurantDetail', {placeId});
  };

  const renderItem = useCallback(({item}: {item: Restaurant}) => {
    return (
      <TouchableOpacity
        style={styles.favoriteContainer}
        key={item.place_id}
        onPress={() => navigateToDetail(item.place_id)}>
        <View>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <Text style={styles.restaurantAddress} numberOfLines={1}>
            {item.formatted_address}
          </Text>
        </View>
        <SvgImage name="arrowRight" />
      </TouchableOpacity>
    );
  }, []);

  const listHeaderComponent = () => {
    if (!hasFavorites) {
      return null;
    }
    return <Text style={styles.title}>Favorite Restaurants</Text>;
  };

  const listEmptyComponent = () => {
    return <Text style={styles.emptyFavs}>No favorites yet 🙁</Text>;
  };

  return (
    <FlatList
      data={favorites}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={15}
      ListHeaderComponent={listHeaderComponent}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={!hasFavorites && styles.flatlistContainer}
    />
  );
};
export {FavoriteRestaurants};
