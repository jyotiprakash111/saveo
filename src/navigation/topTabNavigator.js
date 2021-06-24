import * as React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    StatusBar,
    Share,
  } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LoginScreen from '../screen/login';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar barStyle="dark-content" />
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      labelStyle: { fontSize: 12 },
      // tabStyle: { width: 100 },
      style: { backgroundColor: 'powderblue' },
    }}>
      <Tab.Screen name="Login" component={HomeScreen} />
      <Tab.Screen name="signup" component={LoginScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;

