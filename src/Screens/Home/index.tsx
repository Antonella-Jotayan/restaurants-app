import {View} from 'react-native';
import {Map} from '@src/Components/Map';
import {SearchBottomSheet} from './components/SearchBottomSheet';
import {styles} from './styles';
import {useState} from 'react';
import {Coordinates} from '@src/store/apis/googleMapsApi/types';

const Home = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  return (
    <View style={styles.container}>
      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
      <SearchBottomSheet setCoordinates={setCoordinates} />
    </View>
  );
};

export {Home};
