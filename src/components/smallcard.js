
import React from 'react';
import { Text,View } from 'react-native';

const  Cards = (props) => {
    return (
        <View style={{flex:1}}>
        <View style={{borderRadius:20, borderWidth:1, borderColor:"#fff", height:30, width:"25%"}}>
            <Text>{props.title}</Text>
        </View>
        </View>
    );
}

export default Cards;