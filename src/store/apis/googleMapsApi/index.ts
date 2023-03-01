import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  AddressAutocompleteResponse,
  AddressDetailResponse,
  AddressGeocodeResponse,
  Coordinates,
} from './types';

export const googleMapsApi = createApi({
  reducerPath: 'googleMaps',
  tagTypes: ['GoogleMaps'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://maps.googleapis.com/maps/api'}),
  endpoints: builder => ({
    getAdressByCoordinates: builder.query<AddressGeocodeResponse, Coordinates>({
      query: ({latitude, longitude}) => ({
        url: '/geocode/json',
        headers: {'Content-Type': 'application/json'},
        params: {
          latlng: `${latitude},${longitude}`,
          key: 'AIzaSyC1ReAIgwwPr2IGljrTB4UFuwpybvR0OLk',
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
          key: 'AIzaSyC1ReAIgwwPr2IGljrTB4UFuwpybvR0OLk',
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
          key: 'AIzaSyC1ReAIgwwPr2IGljrTB4UFuwpybvR0OLk',
        },
      }),
      providesTags: (result, _1, placeId) => {
        return result ? [{type: 'GoogleMaps', id: placeId}] : ['GoogleMaps'];
      },
    }),
  }),
});

export const {
  useGetAdressByCoordinatesQuery,
  useLazyGetAutocompletedPlacesbyTextQuery,
  useLazyGetPlaceDetailQuery,
} = googleMapsApi;
