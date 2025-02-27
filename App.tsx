import 'react-native-gesture-handler';

import { StyleSheet, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeContextProvider } from 'src/context/HomeContext';
import { AppNavigator } from 'src/navigation';

const App = () => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <View style={styles.container}>
        <HomeContextProvider>
          <AppNavigator />
        </HomeContextProvider>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
