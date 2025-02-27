import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, paddingVertical: 16},
  title: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 16},
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  gymList: {
    overflow: 'visible',
    marginHorizontal: 16,
    marginTop: 16,
    height: 288,
  },
  iconList: {
    overflow: 'visible',
    marginHorizontal: 16,
    marginTop: 16,
    height: 90,
  },
  classesList: {
    marginTop: 16,
    marginHorizontal: 16,
    overflow: 'visible',
    gap: 16,
    paddingBottom: 60
  },
});
