import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieScreen from '../screen/movie';
import MovieDeatilsScreen from '../screen/movieDetails';

const Stack = createStackNavigator();
const navigationOptionHandler = () => ({
  headerShown: false,
});
export default function App() {
    return (
      <NavigationContainer>
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
      </NavigationContainer>
    );
  }