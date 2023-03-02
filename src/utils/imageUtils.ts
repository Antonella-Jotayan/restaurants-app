import ENV from 'react-native-config';
import queryString from 'query-string';

const createGoogleImageUrl = (
  photoReference: string,
  maxwidth = 400,
): string => {
  return queryString.stringifyUrl({
    url: ENV.BASE_GOOGLE_MAPS_IMAGE_URL,
    query: {
      photo_reference: photoReference,
      maxwidth,
      key: ENV.GOOGLE_MAPS_API_KEY,
    },
  });
};

export const imageUtils = {createGoogleImageUrl};
