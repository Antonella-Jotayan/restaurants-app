import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Restaurant} from '../apis/googleMapsApi/types';
import {RootState} from '../store';

export interface favoriteRestaurantsState {
  restaurants: Restaurant[];
}

const initialState: favoriteRestaurantsState = {
  restaurants: [],
};

export const favoriteRestaurants = createSlice({
  name: 'favoriteRestaurants',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Restaurant>) => {
      state.restaurants.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Restaurant['place_id']>) => {
      const filteredRestaurants = state.restaurants.filter(
        ({place_id}) => place_id !== action.payload,
      );
      state.restaurants = filteredRestaurants;
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteRestaurants.actions;
export const selectRestaurants = (state: RootState) => {
  return state.favoriteRestaurants.restaurants;
};

export default favoriteRestaurants.reducer;
