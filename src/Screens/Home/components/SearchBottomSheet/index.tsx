import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {SearchBar} from '../SearchBar';
import {
  useLazyGetAutocompletedPlacesbyTextQuery,
  useLazyGetPlaceDetailQuery,
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

  const debouncedValue = useDebounce<string>(locationInput);

  useEffect(() => {
    if (shouldFetch.current) {
      getPlacesByText(debouncedValue);
    }
  }, [debouncedValue, getPlacesByText]);

  const handleSheetChange = useCallback((index: number) => {
    if (index === 0) {
      return Keyboard.dismiss();
    }
    if (index === 1) {
      return textInputRef.current?.focus();
    }
  }, []);

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
