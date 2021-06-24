import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/login';
import SignUpScreen from '../screen/signUp';


const navigationOptionHandler = () => ({
  headerShown: false,
});
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={navigationOptionHandler}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={navigationOptionHandler}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
