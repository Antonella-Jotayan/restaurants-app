import {RestaurantRowItem} from '@src/Components/RestaurantRowItem';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {clearRecents, selectRecents} from '@src/store/slices/recentRestaurants';
import {useAppSelector} from '@src/store/store';
import {COLORS} from '@src/styles/foundations/colors';
import {FC, useCallback} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from './styles';

const RecentRestaurants: FC = () => {
  const recents = useAppSelector(selectRecents);
  const dispatch = useDispatch();

  const handleClearRecents = () => {
    dispatch(clearRecents());
  };

  const hasRecents = !!recents.length;

  const listHeaderComponent = () => {
    if (!hasRecents) {
      return null;
    }
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Recent Viewed Restaurants</Text>
        <Button
          title="Clear All"
          color={COLORS.primary}
          onPress={handleClearRecents}
        />
      </View>
    );
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
