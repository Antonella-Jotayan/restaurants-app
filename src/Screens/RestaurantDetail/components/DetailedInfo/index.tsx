import {FONTS} from '@src/styles/foundations/fonts';
import {Text, View} from 'react-native';
import {styles} from './style';

const DetailedInfo = () => {
  return (
    <View style={styles.infoItemsContainer}>
      <Text style={styles.infoItem}>
        Adress: <Text style={styles.infoValue}>av regimiento de patricios</Text>
      </Text>
      <Text style={styles.infoItem}>
        Type: <Text style={styles.infoValue}>restaurant | bar | disco</Text>
      </Text>
      <Text style={styles.infoItem}>
        url: <Text style={styles.infoValue}>http://www.web.com</Text>
      </Text>
    </View>
  );
};

export {DetailedInfo};
