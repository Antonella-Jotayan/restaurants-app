import {Image, ScrollView} from 'react-native';
import {styles} from './styles';

const ImageCarousel = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContentContainer}>
      <Image
        style={styles.carouselImage}
        source={{
          uri: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
        }}
      />
      <Image
        style={styles.carouselImage}
        source={{
          uri: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
        }}
      />
      <Image
        style={styles.carouselImage}
        source={{
          uri: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
        }}
      />
      <Image
        style={styles.carouselImage}
        source={{
          uri: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
        }}
      />
    </ScrollView>
  );
};

export {ImageCarousel};
