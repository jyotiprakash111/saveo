import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity
      onpress={()=>(alert('Hi'))}
      >
      <Image
        source={props.BackImg}
        style={{height: 15, width: 20, alignSelf:"center", marginLeft:10}}
      />
      </TouchableOpacity>
      <Text style={styles.TxtStyle}>{props.title}</Text>
      <Image
        source={props.img}
        style={{height: 20, width: 20, alignSelf:"center", marginLeft:"30%"}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    // flex:1/2,
    justifyContent: 'flex-start',
    alignItems:"center",
    backgroundColor: '#3f6c89',
    height: 50,
    width: '100%',
    flexDirection:"row"
  },
  TxtStyle: {
    color: '#fff',
    fontFamily: 'UbuntuMedium',
    fontSize: 16,
    marginLeft: '35%'
    // paddingVertical: 10,
  },
});
