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

export type Geometry = {
  location: {
    lat: number;
    lng: number;
  };
};

export interface AddressDetailResponse {
  result: {
    geometry: Geometry;
    address_components: AddressComponents[];
    name: string;
    formatted_address: string;
  };
}

export interface NearRestaurantsResponse {
  results: Restaurant[];
}

type Photo = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

export type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: false;
};

export type Restaurant = {
  formatted_address: string;
  name: string;
  photos: Photo[];
  place_id: string;
  rating: number;
  reviews: Review[];
  types: string[];
  url: string;
  user_ratings_total: number;
  geometry: Geometry;
};

export type RestaurantDetailResponse = {
  result: Restaurant;
};
