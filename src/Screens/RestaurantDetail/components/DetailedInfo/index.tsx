import {Restaurant} from '@src/store/apis/googleMapsApi/types';
import {FC} from 'react';
import {Text, View, Linking} from 'react-native';
import {styles} from './style';

interface DetailedInfoProps {
  restaurant: Restaurant;
}

const DetailedInfo: FC<DetailedInfoProps> = ({restaurant}) => {
  const {formatted_address, types, url} = restaurant;

  const onPressLink = async () => {
    const isValid = await Linking.canOpenURL(url);
    if (!isValid) {
      return;
    }
    Linking.openURL(url);
  };

  return (
    <View style={styles.infoItemsContainer}>
      {formatted_address && (
        <View style={styles.infoItemContainer}>
          <Text style={styles.infoItem}>Adress: </Text>
          <Text style={styles.infoValue}>{formatted_address}</Text>
        </View>
      )}
      {types?.length && (
        <View style={styles.infoItemContainer}>
          <Text style={styles.infoItem}>Type: </Text>
          <Text style={styles.infoValue}>{getRestaurantTypes(types)}</Text>
        </View>
      )}
      {url && (
        <Text style={styles.infoItemLink} onPress={onPressLink}>
          Open in maps
        </Text>
      )}
    </View>
  );
};

export {DetailedInfo};

const getRestaurantTypes = (types: string[]): string => {
  return types.slice(0, 2).join(' | ');
};
