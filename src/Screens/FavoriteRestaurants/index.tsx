import {useCallback} from 'react';
import {FlatList, Text} from 'react-native';
import {selectRestaurants} from '@src/store/slices/favoriteRestaurants';
import {useAppSelector} from '@src/store/store';
import {styles} from './styles';
import {RestaurantRowItem} from '@src/Components/RestaurantRowItem';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';

const FavoriteRestaurants = () => {
  const favorites = useAppSelector(selectRestaurants);

  const hasFavorites = !!favorites.length;

  const listHeaderComponent = () => {
    if (!hasFavorites) {
      return null;
    }
    return <Text style={styles.title}>Favorite Restaurants</Text>;
  };

  const listEmptyComponent = () => {
    return <Text style={styles.emptyFavs}>No favorites yet 🙁</Text>;
  };

  const renderItem = useCallback(({item}: {item: Restaurant}) => {
    return <RestaurantRowItem item={item} key={item.place_id} />;
  }, []);

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
