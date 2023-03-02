import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  markerContainer: {},
  markerShape: {position: 'relative'},
  markerImage: {
    ...StyleSheet.absoluteFillObject,
    width: 40,
    height: 40,
    borderRadius: 50,
    left: 13,
    top: 7,
  },
});
export {styles};
