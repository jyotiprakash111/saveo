import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../screen/profile';
// import EditProfile from '../screen'

const navigationOptionHandler = () => ({
  headerShown: false,
});
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={navigationOptionHandler}
      />
      {/* <Stack.Screen
        name="EditProfile"
        component={MovieDeatilsScreen}
        options={navigationOptionHandler}
      /> */}
    </Stack.Navigator>
  );
}
export default HomeStack;
