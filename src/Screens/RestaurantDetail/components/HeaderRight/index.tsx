import {useRoute} from '@react-navigation/native';
import {IconButton} from '@src/Components';
import {RootStackRouteProp} from '@src/navigators/RootStackNavigator/types';
import {useGetRestaurantDetailQuery} from '@src/store/apis/googleMapsApi';
import {
  addFavorite,
  removeFavorite,
  selectRestaurants,
} from '@src/store/slices/favoriteRestaurants';
import {useAppDispatch, useAppSelector} from '@src/store/store';
import {COLORS} from '@src/styles/foundations/colors';

const HeaderRight = () => {
  const favorites = useAppSelector(selectRestaurants);
  const dispatch = useAppDispatch();
  const {params} = useRoute<RootStackRouteProp<'RestaurantDetail'>>();
  const {data} = useGetRestaurantDetailQuery(params.placeId);

  if (!data?.result) {
    return null;
  }

  const isFavorited = favorites.some(
    ({place_id}) => place_id === params.placeId,
  );

  const handleFavorite = () => {
    const {result: restaurant} = data;
    if (!restaurant) {
      return;
    }
    if (!isFavorited) {
      return dispatch(addFavorite(restaurant));
    }
    return dispatch(removeFavorite(params.placeId));
  };
  return (
    <IconButton
      name={isFavorited ? 'heartFilled' : 'heartOutlined'}
      fill={isFavorited ? COLORS.red : COLORS.dark}
      onPress={handleFavorite}
    />
  );
};

export {HeaderRight};
