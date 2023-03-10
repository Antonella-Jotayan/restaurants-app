import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ENV from 'react-native-config';
import {
  AddressAutocompleteResponse,
  AddressDetailResponse,
  AddressGeocodeResponse,
  Coordinates,
  NearRestaurantsResponse,
  Restaurant,
  RestaurantDetailResponse,
} from './types';
import {sortByRating} from './utils';

export const googleMapsApi = createApi({
  reducerPath: 'googleMaps',
  tagTypes: ['GoogleMaps'],
  baseQuery: fetchBaseQuery({baseUrl: ENV.BASE_GOOGLE_MAPS_URL}),
  endpoints: builder => ({
    getAdressByCoordinates: builder.query<AddressGeocodeResponse, Coordinates>({
      query: ({latitude, longitude}) => ({
        url: '/geocode/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          latlng: `${latitude},${longitude}`,
          key: ENV.GOOGLE_MAPS_API_KEY,
        },
      }),
      providesTags: (result, _1, {latitude, longitude}) => {
        return result
          ? [{type: 'GoogleMaps', id: `${latitude}-${longitude}`}]
          : ['GoogleMaps'];
      },
    }),
    getAutocompletedPlacesbyText: builder.query<
      AddressAutocompleteResponse,
      string
    >({
      query: inputText => ({
        url: '/place/autocomplete/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          input: inputText,
          language: 'en',
          strictBounds: true,
          types: ['address'],
          fields: ['address_components', 'geometry'],
          key: ENV.GOOGLE_MAPS_API_KEY,
        },
      }),
    }),
    getPlaceDetail: builder.query<AddressDetailResponse, string>({
      query: placeId => ({
        url: '/place/details/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          placeid: placeId,
          language: 'en',
          key: ENV.GOOGLE_MAPS_API_KEY,
        },
      }),
      providesTags: (result, _1, placeId) => {
        return result ? [{type: 'GoogleMaps', id: placeId}] : ['GoogleMaps'];
      },
    }),
    getNearRestaurants: builder.query<Restaurant[], Coordinates>({
      query: ({latitude, longitude}) => ({
        url: '/place/nearbysearch/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          location: `${latitude},${longitude}`,
          type: 'restaurant',
          rankby: 'distance',
          language: 'en',
          key: ENV.GOOGLE_MAPS_API_KEY,
        },
      }),
      transformResponse(response: NearRestaurantsResponse) {
        if (!response?.results) {
          return [];
        }
        const firstTenClosestResults = response?.results.slice(0, 10);
        return sortByRating(firstTenClosestResults);
      },
      providesTags: (response, _1, coordinates) => {
        return response
          ? [{type: 'GoogleMaps', id: JSON.stringify(coordinates)}]
          : ['GoogleMaps'];
      },
    }),
    getRestaurantDetail: builder.query<RestaurantDetailResponse, string>({
      query: placeId => ({
        url: '/place/details/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          place_id: placeId,
          fields: [
            'name',
            'formatted_address',
            'type',
            'reviews',
            'rating',
            'user_ratings_total',
            'photos',
            'place_id',
            'url',
          ],
          key: ENV.GOOGLE_MAPS_API_KEY,
        },
      }),
      providesTags: (response, _1, placeId) => {
        return response ? [{type: 'GoogleMaps', id: placeId}] : ['GoogleMaps'];
      },
    }),
  }),
});

export const {
  useGetAdressByCoordinatesQuery,
  useLazyGetAutocompletedPlacesbyTextQuery,
  useLazyGetPlaceDetailQuery,
  useLazyGetNearRestaurantsQuery,
  useGetNearRestaurantsQuery,
  useGetRestaurantDetailQuery,
} = googleMapsApi;
