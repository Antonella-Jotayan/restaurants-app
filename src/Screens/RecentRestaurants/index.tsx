import {RestaurantRowItem} from '@src/Components/RestaurantRowItem';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {selectRecents} from '@src/store/slices/recentRestaurants';
import {useAppSelector} from '@src/store/store';
import {FC, useCallback} from 'react';
import {FlatList, Text} from 'react-native';
import {styles} from './styles';

const RecentRestaurants: FC = () => {
  const recents = useAppSelector(selectRecents);

  const hasRecents = !!recents.length;

  const listHeaderComponent = () => {
    if (!hasRecents) {
      return null;
    }
    return <Text style={styles.title}>Recent Viewed Restaurants</Text>;
  };

  const listEmptyComponent = () => {
    return <Text style={styles.emptyRecents}>No recents yet 🙁</Text>;
  };

  const renderItem = useCallback(({item}: {item: Restaurant}) => {
    return <RestaurantRowItem item={item} key={item.place_id} />;
  }, []);

  return (
    <FlatList
      data={recents}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={15}
      ListHeaderComponent={listHeaderComponent}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={!hasRecents && styles.flatlistContainer}
    />
  );
};
export {RecentRestaurants};
