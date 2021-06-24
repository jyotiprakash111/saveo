import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  const boot = () => {
    setTimeout(() => {
      navigation.navigate('Tabs');
    }, 2000);
  };

 useEffect(()=>{
  boot()
 })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <StatusBar hidden /> */}
      <LinearGradient
        colors={['#0C6BF2', '#6A0DFC']}
        style={{
          height: '100%',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={{marginTop: '40%'}}>
          <Image
            source={require('../../assets/handcuff.png')}
            style={{height: 100, width: 100}}
          />
        </View>
        <Text style={{fontSize: 20, color: '#fff'}}>Crime App</Text>
        <View style={{marginTop: '45%'}}>
          <Image
            // source={require('../../assets/Icons/greenLoader.gif')}
            style={{height: 50, width: 90, resizeMode: 'contain'}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;
