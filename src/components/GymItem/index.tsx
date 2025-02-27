import { Image, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-easy-icon';
import FavIcon from 'src/assets/svg/favorite.svg';
import FavSelectedIcon from 'src/assets/svg/favorite_selected.svg';
import PinIcon from 'src/assets/svg/location.svg';
import { IMAGES } from 'src/constants/Images';
import Colors from 'src/styles/colors';
import { styles } from './styles';

interface GymItemProps {
  item: {
    id: number;
    title: string;
    rating: number;
    price: number;
    favorite: boolean;
    date: string;
    popular_clasess: {
      title: string;
      price: number;
      favorite: boolean;
      location: string;
      time: string;
    }[];
  };
  index: number;
  onFavPress: (id: number) => void;
}
const GymItem = ({index, item, onFavPress}: GymItemProps) => {
  return (
    <View style={styles.item}>
      <View>
        <PinIcon style={styles.pin} />
        <Image source={IMAGES.MAP} style={styles.mapImg} />
      </View>
      <View>
        <TouchableOpacity onPress={() => onFavPress(item?.id)} style={styles.fav}>
          {item?.favorite ? <FavSelectedIcon /> : <FavIcon />}
        </TouchableOpacity>
        <Image
          source={
            Number(index % 2) === 0 ? IMAGES.GYM_NON_STOP : IMAGES.GYM_REBEL
          }
          style={styles.gymImg}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.itemTitle}>{item?.title}</Text>
        <View>
          <Text style={styles.price}>{`₹${item?.price}`}</Text>
          <Text style={styles.dayText}>/day</Text>
        </View>
      </View>
      <View style={styles.detailsContainer2}>
        <View style={styles.ratingContainer}>
          <Icon name="star" type="entypo" size={16} color={Colors.YELLOW} />
          <Text style={styles.ratingText}>{item?.rating}</Text>
        </View>
        <Text style={styles.dateText}>{item?.date}</Text>
      </View>
    </View>
  );
};

export default GymItem;
