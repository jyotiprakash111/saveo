import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Header from '../../components/header';

const DashBoard = ({params}) => (
  <View style={{flex: 1}}>
    <Header title="Dashboard" BackImg={require('../../assets/menu.png')} />
    {/* <View style={{flexDirection:"row"}}> */}
    <View style={styles.inputTxtContainer}>
     <Text>City:-</Text>
     <View style={{borderBottomWidth:1}}>
     <TextInput style={{height:40, width:"100%"}}>Rourkela</TextInput>
     </View>
    </View>
    <View style={styles.inputTxtContainer}>
     <Text>Date:-</Text>
     <View style={{borderBottomWidth:1}}>
     <TextInput style={{height:40, width:"100%"}}>Dt-20-06-21</TextInput>
     </View>
    </View>
    <View style={styles.inputTxtContainer}>
     <Text>Location:-</Text>
     <View style={{borderBottomWidth:1}}>
     <TextInput style={{height:40, width:"100%"}}>Rourkela</TextInput>
     </View>
    </View>
    <View style={styles.inputTxtContainer}>
     <Text>SensID:-</Text>
     <View style={{borderBottomWidth:1}}>
     <TextInput style={{height:40, width:"100%"}}>hg4500</TextInput>
     </View>
    </View>
    <View style={styles.inputTxtContainer}>
     <Text>Ano Score:-</Text>
     <View style={{borderBottomWidth:1}}>
     <TextInput style={{height:40, width:"100%"}}></TextInput>
     </View>
    </View>
    <View style={styles.inputTxtContainer}>
     <Text>Approx Count:-</Text>
     <View style={{borderBottomWidth:1}}>
     <TextInput style={{height:40, width:"100%"}}></TextInput>
     </View>
    </View>
    {/* </View> */}
  </View>
);

export default DashBoard;

const styles = StyleSheet.create({
  inputTxtContainer: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    height: 40,
    marginLeft:"2%"
    // borderBottomWidth: 1,
  },
  inputTxt: {
    // height: 50,
    width: '30%',
    borderBottomWidth: 1,
  },
  formContainer: {
    borderBottomColor: '#0DFF0A',
    borderBottomWidth: 1,
    height: 50,
    width: 280,
    paddingTop: 5,
    marginHorizontal: '10%',
  },
  FontStyle: {
    fontSize: 13,
    color: '#000',
  },
});
