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
  results: Restaurant[];
}

export type Restaurant = {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: {
    open_now: true;
  };
  photos: [
    {
      height: number;
      html_attributions: string[];
      photo_reference: string;
      width: number;
    },
  ];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
};
