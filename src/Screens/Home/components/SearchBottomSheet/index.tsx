import {FC, useCallback, useRef} from 'react';
import {Keyboard, TextInput} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {SearchBar} from '../SearchBar';
import {Row} from '@src/Components/Row';
import {Coordinates} from '@src/store/apis/googleMapsApi/types';
import {useGetPlaces} from '../../hooks/useGetPlaces';

interface SearchBottomSheetProps {
  setCoordinates: (value: Coordinates) => void;
}

const snapPoints = ['15%', '100%'];

const SearchBottomSheet: FC<SearchBottomSheetProps> = ({setCoordinates}) => {
  const textInputRef = useRef<TextInput>(null);
  const {
    sheetRef,
    locationInput,
    onSearchBarChange,
    places,
    handleLocationPress,
  } = useGetPlaces({setCoordinates});

  const handleSheetChange = useCallback((index: number) => {
    if (index === 0) {
      return Keyboard.dismiss();
    }
    if (index === 1) {
      return textInputRef.current?.focus();
    }
  }, []);

  return (
    <BottomSheet
      keyboardBehavior="extend"
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}>
      <BottomSheetScrollView contentContainerStyle={styles.container}>
        <SearchBar
          value={locationInput}
          onChange={onSearchBarChange}
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
