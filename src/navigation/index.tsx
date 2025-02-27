import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import Colors from 'src/styles/colors';
import DumbellIcon from 'src/assets/svg/dumbbell.svg';
import HomeScreen from 'src/screens/home-screen';
import MapIcon from 'src/assets/svg/map.svg';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from 'src/constants/routes';
import SearchIcon from 'src/assets/svg/search.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const headerLeft = () => (
    <TouchableOpacity>
      <DumbellIcon />
    </TouchableOpacity>
  );

  const headerRight = () => (
    <View style={styles.headerRight}>
      <TouchableOpacity>
        <MapIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <SearchIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1663040326392-f752798e7394?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlJTIwZ3ltfGVufDB8fDB8fHww',
          }}
          style={styles.profile}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.HOME_SCREEN}
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: Colors.BLUE,
            },
            statusBarStyle: 'light',
            headerLeft: headerLeft,
            headerRight: headerRight,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerRight: {flexDirection: 'row', gap: 24},
  profile: {height: 24, width: 24, borderRadius: 24},
});
