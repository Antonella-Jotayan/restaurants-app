export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type AddressGeocodeResponse = {
  results: {
    formatted_address: string;
    place_id: string;
  }[];
};

export interface AddressPrediction {
  description: string;
  id: string;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}
export interface AddressAutocompleteResponse {
  predictions: AddressPrediction[];
}
