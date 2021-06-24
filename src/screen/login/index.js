import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LogIn = ({params}) => {
  const navigation = useNavigation();
  const {email, setEmail} = useState("");
  const [pass, setPass] = useState("")

  return (
    <View>
       <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <ImageBackground
        source={require('../../assets/2.jpg')}
        style={styles.container}>
        <StatusBar backgroundColor="#2f6c9a" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#fff',
            paddingBottom: 30,
          }}>
          Crime App
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Mobileno"
            keyboardType="number-pad"
            maxLength={10}
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Mobileno"
            keyboardType="number-pad"
            maxLength={10}
            underlineColorAndroid="transparent"
            value={pass}
            onChangeText={text => setPass(text)}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}
          />
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => navigation.navigate("Menu")}
          >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Signup')}>
          <Text style={{paddingTop: 30, fontSize: 15, color: '#fff'}}>
            Don't have an account ? Signup
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LogIn;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '85%',
    height: 45,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    width: '85%',
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
