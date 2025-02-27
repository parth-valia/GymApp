import Colors from 'src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {height: 0, width: 0},
  },
  fav: {
    position: 'absolute',
    zIndex: 99,
    top: 8,
    right: 8,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {height: 0, width: 0},
  },
  gymImg: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  itemTitle: {fontSize: 18, fontWeight: '500', maxWidth: '60%', flex: 1},
  dayText: {fontSize: 10, color: Colors.GREY, textAlign: 'right'},
  price: {color: Colors.BLUE, fontWeight: '500'},
  detailsMainContainer:{flex: 1,height: 124,    padding: 8,},
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  gymText: {color: Colors.GREY,marginTop: 4},
  descMainContainer:{gap: 8,marginTop: 16},
  descContainer: {flexDirection: 'row', alignItems: 'center', gap: 4},
  descText: {fontSize: 12, color: Colors.GREY},
});
