import {BASE_GOOGLE_MAPS_IMAGE_URL, GOOGLE_MAPS_API_KEY} from '../../env';
import queryString from 'query-string';

const createGoogleImageUrl = (
  photoReference: string,
  maxwidth = 400,
): string => {
  return queryString.stringifyUrl({
    url: BASE_GOOGLE_MAPS_IMAGE_URL,
    query: {
      photo_reference: photoReference,
      maxwidth,
      key: GOOGLE_MAPS_API_KEY,
    },
  });
};

export const imageUtils = {createGoogleImageUrl};
