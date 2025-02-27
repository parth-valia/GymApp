import {Dimensions, StyleSheet} from 'react-native';

import Colors from 'src/styles/colors';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.BLUE,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {height: 0, width: 0},
  },
  selectedItem: {backgroundColor: Colors.WHITE},
});
