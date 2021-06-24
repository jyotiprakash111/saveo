import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WeatherInfo from '../screen/List';
import WeatherInfo2 from '../screen/weatherReport2';
import MovieScreen from '../screen/movie';
import MovieDeatilsScreen from '../screen/movieDetails';

const navigationOptionHandler = () => ({
  headerShown: false,
});
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Movie">
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={navigationOptionHandler}
      />
      <Stack.Screen
        name="Moviedetails"
        component={MovieDeatilsScreen}
        options={navigationOptionHandler}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
