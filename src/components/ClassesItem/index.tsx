import {Image, Text, TouchableOpacity, View} from 'react-native';

import FavIcon from 'src/assets/svg/favorite.svg';
import FavSelectedIcon from 'src/assets/svg/favorite_selected.svg';
import {IMAGES} from 'src/constants/Images';
import PinIcon from 'src/assets/svg/location_light_blue.svg';
import WatchIcon from 'src/assets/svg/watch.svg';
import {styles} from './styles';

interface ClassesItemProps {
  item: {
    title: string;
    price: number;
    favorite: boolean;
    location: string;
    time: string;
  };
  index: number;
  onFavPress: (title: string) => void;
}
const ClassesItem = ({index, item, onFavPress}: ClassesItemProps) => {
  const renderImage = () => {
    switch (index) {
      case 0:
        return IMAGES.FITNESS_CLASS;
      case 1:
        return IMAGES.FITNESS_WITH_FRIEND;
      case 2:
        return IMAGES.YOGA_CLASS;
      case 3:
        return IMAGES.CROSSFIT_CLASS;
      default:
        return;
    }
  };
  return (
    <View style={styles.item}>
      <View>
        <TouchableOpacity
          onPress={() => onFavPress(item?.title)}
          style={styles.fav}>
          {item?.favorite ? <FavSelectedIcon /> : <FavIcon />}
        </TouchableOpacity>
        <Image source={renderImage()} style={styles.gymImg} />
      </View>
      <View style={styles.detailsMainContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemTitle}>{item?.title}</Text>
          <View>
            <Text style={styles.price}>{`₹${item?.price}`}</Text>
            <Text style={styles.dayText}>/day</Text>
          </View>
        </View>
        <Text style={styles.gymText}>Gym "Seven"</Text>
        <View style={styles.descMainContainer}>
          <View style={styles.descContainer}>
            <PinIcon height={14} width={14} />
            <Text style={styles.descText}>{item?.location}</Text>
          </View>
          <View style={styles.descContainer}>
            <WatchIcon height={14} width={14} />
            <Text style={styles.descText}>{item?.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClassesItem;
