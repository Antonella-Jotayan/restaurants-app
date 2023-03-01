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

export interface AddressComponents {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface AddressDetailResponse {
  result: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    address_components: AddressComponents[];
    name: string;
    formatted_address: string;
  };
}

export interface NearRestaurantsResponse {
  html_attributions: [];
  results: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    name: string;
    photos: {
      height: number;
      html_attributions: string[];
      photo_reference: string;
      width: number;
    }[];
    rating: number;
    reviews: {
      author_name: string;
      author_url: string;
      language: string;
      profile_photo_url: string;
      rating: number;
      relative_time_description: string;
      text: string;
      time: number;
    }[];
    types: string[];
  }[];
}
