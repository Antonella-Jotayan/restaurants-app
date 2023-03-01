import {useCallback, useRef} from 'react';
import {Keyboard, TextInput} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {SearchBar} from '../SearchBar';

const snapPoints = ['15%', '100%'];

const SearchBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const textInputRef = useRef<TextInput>(null);

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
          onPressIn={() => sheetRef.current?.expand()}
          ref={textInputRef}
        />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export {SearchBottomSheet};
