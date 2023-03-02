import {useRoute} from '@react-navigation/native';
import {Label} from '@src/Components/Label';
import {RestaurantRowItem} from '@src/Components/RestaurantRowItem';
import {RootStackRouteProp} from '@src/navigators/RootStackNavigator/types';
import {useGetNearRestaurantsQuery} from '@src/store/apis/googleMapsApi';
import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {COLORS} from '@src/styles/foundations/colors';
import {useCallback} from 'react';
import {FlatList, Text} from 'react-native';
import {styles} from './style';

const RestaurantsByRating = () => {
  const {params} = useRoute<RootStackRouteProp<'RestaurantsByRating'>>();
  const {data} = useGetNearRestaurantsQuery(params.coordinates, {
    skip: !params.coordinates,
  });

  const listHeaderComponent = () => {
    return <Text style={styles.title}>Restaurants sorted by rating</Text>;
  };

  const renderItem = useCallback(({item}: {item: Restaurant}) => {
    return (
      <RestaurantRowItem
        item={item}
        key={item.place_id}
        prependItem={
          <Label
            text={`${item?.rating ?? 0}`}
            iconName="star"
            reversed
            containerStyle={styles.label}
            fill="primary"
          />
        }
      />
    );
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data ?? []}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={15}
      ListHeaderComponent={listHeaderComponent}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export {RestaurantsByRating};
