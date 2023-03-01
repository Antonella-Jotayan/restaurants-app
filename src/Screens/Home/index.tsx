import {View} from 'react-native';
import {Map} from '@src/Components/Map';
import {SearchBottomSheet} from './components/SearchBottomSheet';
import {styles} from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Map />
      <SearchBottomSheet />
    </View>
  );
};

export {Home};
