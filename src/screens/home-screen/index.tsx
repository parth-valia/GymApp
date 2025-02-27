import { Dimensions, FlatList, ScrollView, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import ClassesItem from 'src/components/ClassesItem';
import GymIconItem from 'src/components/GymIconItem';
import GymItem from 'src/components/GymItem';
import { IconData } from 'src/constants';
import { HomeContext } from 'src/context/HomeContext';
import { styles } from './styles';

const HomeScreen = () => {
  const {gyms, setGyms} = useContext(HomeContext);

  const handleFav = async (id: number) => {
    const updatedGyms = gyms.map(item =>
      item?.id === id ? {...item, favorite: !item?.favorite} : item,
    );
    setGyms(updatedGyms);
    AsyncStorage.setItem('gyms',JSON.stringify(updatedGyms));
  };

  const handleClassFav = async (title: string) => {
    const updatedClasses = gyms[0].popular_clasess.map(item =>
      item?.title === title ? {...item, favorite: !item?.favorite} : item,
    );
    const updatedGyms = gyms.map(item =>
        item?.id === 1 ? {...item, popular_clasess: updatedClasses} : item,
      );
    setGyms(updatedGyms);
    AsyncStorage.setItem('gyms',JSON.stringify(updatedGyms));
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>Recommended Gyms</Text>
      <Carousel
        data={gyms}
        modeConfig={{
          showLength: gyms?.length,
        }}
        loop={true}
        width={Dimensions.get('screen').width * 0.59}
        style={styles.gymList}
        renderItem={({item, index}) => (
          <GymItem
            item={item}
            index={index}
            key={item?.id}
            onFavPress={handleFav}
          />
        )}
      />
      <Text style={styles.title2}>Popular Classes</Text>
      <Carousel
        data={IconData}
        modeConfig={{
          showLength: IconData.length,
        }}
        loop={true}
        width={100}
        style={styles.iconList}
        renderItem={({item}) => (
          <GymIconItem
            item={item}
            selected={gyms[0]?.popular_clasess?.some(
              classes => classes?.title?.toLocaleLowerCase() === item?.name,
            )}
          />
        )}
      />
      <FlatList
        data={gyms[0]?.popular_clasess}
        scrollEnabled={false}
        contentContainerStyle={styles.classesList}
        renderItem={({item, index}) => (
          <ClassesItem item={item} index={index} onFavPress={handleClassFav} />
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
