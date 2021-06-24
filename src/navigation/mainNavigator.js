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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import './styleSheet';
import SpalshScreen from '../screen/splash';
import AersomeAlertSc from '../screen/awesomeAlert';
import ProfileStack from './profileStack';
import SummaryScreen from '../screen/summary';
import DashBoardScreen from '../screen/dashBoard';
import Tabs from './topTabNavigator';
import Login_Stack from '../navigation/loginStack';
import Header from '../components/header';

const Stack = createStackNavigator();
const navigationOptionHandler = () => ({
  headerShown: false,
});

function CustomDrawerContent(props) {
  const logout = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => gotologin()},
      ],
      {cancelable: false},
    );
  };

  async function logOut() {
    await AsyncStorage.clear();
    auth().signOut();
    props.navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#0C6BF2', '#6A0DFC']}
        style={{height: 200, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{borderRadius: 60, borderWidth: 2, borderColor: '#fff'}}>
          <Image
            source={require('../assets/man.png')}
            style={{height: 80, width: 80, borderRadius: 50}}
          />
        </View>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>Not Set</Text>
      </LinearGradient>
      <ScrollView style={{marginLeft: 5}}>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('Profile')}>
          <Image
            source={require('../assets/settings.png')}
            style={{height: 15, width: 15, marginRight: 10, marginLeft: 10}}
          />
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('Summary')}>
          <Image
            source={require('../assets/report.png')}
            style={{height: 15, width: 15, marginRight: 10, marginLeft: 10}}
          />
          <Text>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('DashBoard')}>
          <Image
            source={require('../assets/dashboard.png')}
            style={{height: 15, width: 15, marginRight: 10, marginLeft: 10}}
          />
          <Text>DashBoard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('ShareScr')}>
          <Image
            source={require('../assets/share.png')}
            style={{height: 15, width: 15, marginRight: 10, marginLeft: 10}}
          />
          <Text>Share</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={() => logOut()}
        style={{
          height: 40,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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

const ShareC = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Header title="Share" BackImg={require('../assets/menu.png')} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: '70%',
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 70,
            // marginTop: 100,
            backgroundColor: '#c1c1c1',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={onShare}
          title="Share">
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const Drawer = createDrawerNavigator();
function DrawerContainer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => CustomDrawerContent(props)}
      // drawerContentOptions={{ activeTintColor: '#e91e63', }}
    >
      <Drawer.Screen name="Home" component={DashBoardScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        // options={{drawerLabel: 'VenderList'}}
      />
      <Drawer.Screen
        name="Summary"
        component={SummaryScreen}
        // options={{drawerLabel: 'VenderList'}}
      />
      <Drawer.Screen
        name="DashBoard"
        component={DashBoardScreen}
        // options={{drawerLabel: 'VenderList'}}
      />
      <Drawer.Screen
        name="ShareScr"
        component={ShareC}
        // options={{drawerLabel: 'VenderList'}}
      />
    </Drawer.Navigator>
  );
}


// function getActiveRoute(navigationState) {
//   if (!navigationState) {
//     return null;
//   }
//   const route = navigationState.routes[navigationState.index];
//   // dive into nested navigators
//   if (route.routes) {
//     return getActiveRoute(route);
//   }
//   return route;
// }
// const AppNavigator = createStackNavigator(AppRouteConfigs);
// const AppContainer = createAppContainer(AppNavigator);
// export default () => (
//   <AppContainer
//     onNavigationStateChange={(prevState, currentState, action) => {
//       const currentScreen = getActiveRoute(currentState);
//       const prevScreen = getActiveRoute(prevState);
//       if (prevScreen.routeName !== currentScreen.routeName) {
//           const statusTheme = currentScreen.params.statusbar;
//           StatusBar.setBarStyle(statusTheme)
//       }
//     }}
//   />
// );

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Spalsh">
        <Stack.Screen
          name="Spalsh"
          component={SpalshScreen}
          options={navigationOptionHandler}
        />
        <Stack.Screen
          name="Tabs"
          component={Login_Stack}
          options={navigationOptionHandler}
        />
        <Stack.Screen
          name="Menu"
          component={DrawerContainer}
          options={navigationOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
