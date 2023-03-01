import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  AddressAutocompleteResponse,
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
  }),
});

export const {
  useGetAdressByCoordinatesQuery,
  useLazyGetAutocompletedPlacesbyTextQuery,
} = googleMapsApi;
