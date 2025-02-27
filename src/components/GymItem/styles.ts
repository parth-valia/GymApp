import { Dimensions, StyleSheet } from 'react-native';

import Colors from 'src/styles/colors';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.WHITE,
    width: Dimensions.get('screen').width * 0.54,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {height: 0, width: 0},
  },
  pin: {
    position: 'absolute',
    zIndex: 99,
    alignSelf: 'center',
    top: 4,
  },
  fav: {
    position: 'absolute',
    zIndex: 99,
    top: 4,
    right: 16,
  },
  mapImg: {height: 80, borderRadius: 10},
  gymImg: {top: -10},
  itemTitle: {fontSize: 18, fontWeight: '500'},
  dayText: {fontSize: 10, color: Colors.GREY, textAlign: 'right'},
  price: {color: Colors.BLUE, fontWeight: '500'},
  detailsContainer: {
    width: '100%',
    top: -6,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  detailsContainer2: {
    width: '100%',
    top: -6,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  ratingText: {
    color: Colors.GREY,
    textAlign: 'center',
    top: 1.5,
  },
  dateText: {
    fontSize: 12,
    color: Colors.GREY,
    textAlign: 'center',
    top: 2.5,
  },
});
