import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {useDebounce} from '@src/hooks/useDebounce';
import {
  useLazyGetAutocompletedPlacesbyTextQuery,
  useLazyGetPlaceDetailQuery,
} from '@src/store/apis/googleMapsApi';
import {
  AddressPrediction,
  Coordinates,
} from '@src/store/apis/googleMapsApi/types';
import {useEffect, useRef, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

interface useGetPlacesProps {
  setCoordinates: (coordinates: Coordinates) => void;
}

const useGetPlaces = ({setCoordinates}: useGetPlacesProps) => {
  const sheetRef = useRef<BottomSheet>(null);
  const shouldFetch = useRef<boolean>(true);
  const [locationInput, setLocationInput] = useState<string>('');

  const [getPlacesByText, {data: places}] =
    useLazyGetAutocompletedPlacesbyTextQuery();
  const [getPlaceDetail] = useLazyGetPlaceDetailQuery();

  const debouncedValue = useDebounce<string>(locationInput);

  useEffect(() => {
    if (shouldFetch.current) {
      getPlacesByText(debouncedValue);
    }
  }, [debouncedValue, getPlacesByText]);

  const handleLocationPress = async (location: AddressPrediction) => {
    try {
      const {data, error} = await getPlaceDetail(location.place_id);
      if (error || !data) {
        throw new Error(String(error));
      }
      const {lat: latitude, lng: longitude} = data.result.geometry.location;
      shouldFetch.current = false;
      setLocationInput(location.structured_formatting.main_text);
      sheetRef.current?.collapse();
      setCoordinates({latitude, longitude});
    } catch (error) {
      console.error(error);
    }
  };
  const onSearchBarChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setLocationInput(e.nativeEvent.text);
    shouldFetch.current = true;
  };

  return {
    sheetRef,
    locationInput,
    setLocationInput,
    places,
    handleLocationPress,
    onSearchBarChange,
  };
};

export {useGetPlaces};
