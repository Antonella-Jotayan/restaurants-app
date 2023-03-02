import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Restaurant} from '../apis/googleMapsApi/types';
import {RootState} from '../store';

export interface RecentRestaurantsState {
  restaurants: Restaurant[];
}

const initialState: RecentRestaurantsState = {
  restaurants: [],
};

export const recentRestaurants = createSlice({
  name: 'recentRestaurants',
  initialState,
  reducers: {
    addRecent: (state, action: PayloadAction<Restaurant>) => {
      const restaurantAlreadyIn = state.restaurants.some(({place_id}) => {
        return place_id === action.payload.place_id;
      });

      if (!restaurantAlreadyIn) {
        state.restaurants.push(action.payload);
      }
    },
    clearRecents: state => {
      state.restaurants = initialState.restaurants;
    },
  },
});

export const {addRecent, clearRecents} = recentRestaurants.actions;
export const selectRecents = (state: RootState) => {
  return state.recentRestaurants.restaurants;
};

export default recentRestaurants.reducer;
