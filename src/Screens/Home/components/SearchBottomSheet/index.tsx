import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {SearchBar} from '../SearchBar';
import {
  useLazyGetAutocompletedPlacesbyTextQuery,
  useLazyGetNearRestaurantsQuery,
  useLazyGetPlaceDetailQuery,
  useLazyGetRestaurantDetailQuery,
} from '@src/store/apis/googleMapsApi';
import {useDebounce} from '@src/hooks/useDebounce';
import {Row} from '@src/Components/Row';
import {
  AddressPrediction,
  Coordinates,
} from '@src/store/apis/googleMapsApi/types';

interface SearchBottomSheetProps {
  setCoordinates: (value: Coordinates) => void;
}

const snapPoints = ['15%', '100%'];

const SearchBottomSheet: FC<SearchBottomSheetProps> = ({setCoordinates}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const textInputRef = useRef<TextInput>(null);
  const shouldFetch = useRef<boolean>(true);
  const [locationInput, setLocationInput] = useState<string>('');

  const [getPlacesByText, {data: places}] =
    useLazyGetAutocompletedPlacesbyTextQuery();
  const [getPlaceDetail] = useLazyGetPlaceDetailQuery();

  const [getNearRestaurants, {data: nearRestaurants}] =
    useLazyGetNearRestaurantsQuery();

  const [getRestaurantDetail, {data: restaurantDetail}] =
    useLazyGetRestaurantDetailQuery();

  const debouncedValue = useDebounce<string>(locationInput);

  useEffect(() => {
    if (shouldFetch.current) {
      getPlacesByText(debouncedValue);
    }
  }, [debouncedValue, getPlacesByText]);

  useEffect(() => {
    console.log('near restaurants', JSON.stringify(nearRestaurants, null, 2));
  }, [nearRestaurants]);

  const handleSheetChange = useCallback((index: number) => {
    if (index === 0) {
      return Keyboard.dismiss();
    }
    if (index === 1) {
      return textInputRef.current?.focus();
    }
  }, []);

  const handleLocationPress = async (location: AddressPrediction) => {
    const {data} = await getPlaceDetail(location.place_id);
    const {lat: latitude, lng: longitude} = data?.result.geometry.location;
    shouldFetch.current = false;
    setLocationInput(location.structured_formatting.main_text);
    sheetRef.current?.collapse();
    setCoordinates({latitude, longitude});
    const {data: nearRestaurantsResponse} = await getNearRestaurants({
      latitude,
      longitude,
    });
    const jj = await getRestaurantDetail(
      nearRestaurantsResponse?.results[1]?.place_id,
    );

    console.log(JSON.stringify(jj, null, 2));
  };

  return (
    <BottomSheet
      keyboardBehavior="extend"
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}>
      <BottomSheetScrollView contentContainerStyle={styles.container}>
        <SearchBar
          value={locationInput}
          onChange={e => {
            setLocationInput(e.nativeEvent.text);
            shouldFetch.current = true;
          }}
          onPressIn={() => sheetRef.current?.expand()}
          ref={textInputRef}
        />
        {places?.predictions.map(location => {
          return (
            <Row
              onPress={() => handleLocationPress(location)}
              title={location.structured_formatting.main_text}
              caption={location.structured_formatting.secondary_text}
              iconName="mapPin"
              key={location.place_id}
            />
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export {SearchBottomSheet};
