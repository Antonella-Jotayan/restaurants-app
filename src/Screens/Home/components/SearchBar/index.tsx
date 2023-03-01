import {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

interface SearchBarProps extends TextInputProps {}

const SearchBar = forwardRef<TextInput, SearchBarProps>(({...props}, ref) => {
  return (
    <TextInput
      placeholder="Direction"
      style={styles.textInput}
      {...props}
      ref={ref}
    />
  );
});

export {SearchBar};
