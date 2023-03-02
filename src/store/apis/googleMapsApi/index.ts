import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_GOOGLE_MAPS_URL, GOOGLE_MAPS_API_KEY} from '../../../../env';
import {
  AddressAutocompleteResponse,
  AddressDetailResponse,
  AddressGeocodeResponse,
  Coordinates,
  NearRestaurantsResponse,
  RestaurantDetailResponse,
} from './types';

export const googleMapsApi = createApi({
  reducerPath: 'googleMaps',
  tagTypes: ['GoogleMaps'],
  baseQuery: fetchBaseQuery({baseUrl: BASE_GOOGLE_MAPS_URL}),
  endpoints: builder => ({
    getAdressByCoordinates: builder.query<AddressGeocodeResponse, Coordinates>({
      query: ({latitude, longitude}) => ({
        url: '/geocode/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          latlng: `${latitude},${longitude}`,
          key: GOOGLE_MAPS_API_KEY,
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
          key: GOOGLE_MAPS_API_KEY,
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
          key: GOOGLE_MAPS_API_KEY,
        },
      }),
      providesTags: (result, _1, placeId) => {
        return result ? [{type: 'GoogleMaps', id: placeId}] : ['GoogleMaps'];
      },
    }),
    getNearRestaurants: builder.query<NearRestaurantsResponse, Coordinates>({
      query: ({latitude, longitude}) => ({
        url: '/place/nearbysearch/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          location: `${latitude},${longitude}`,
          type: 'restaurant',
          rankby: 'distance',
          limit: '10',
          language: 'en',
          key: GOOGLE_MAPS_API_KEY,
        },
      }),
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
          key: GOOGLE_MAPS_API_KEY,
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
