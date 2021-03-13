import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Item = ({title, price, image}) => (
  <View style={styles.item}>
    <Image
      source={{uri: image}}
      resizeMethod="scale"
      style={{
        height: 280,
        width: 280,
        resizeMode:"stretch",
        
        borderTopLeftRadius:2,
        borderTopRightRadius:2
      }}
    />
  </View>
);

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  //   const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.androidhive.info/json/movies_2017.json')
      .then((res) => res.json())
      .then((data) => {
        setDataSource(data);
        // alert(JSON.stringify(data))
        console.log(data);
      })
      .catch(console.log);
  }, []);

  const renderItem = ({item}) => (
    <Item title={item.title} price={item.price} image={item.image} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f6c89',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: 280,
    width:280,
    marginVertical: 8,
    marginHorizontal: 8,
    // justifyContent: 'center',
    // alignItems:"center",
  },
  title: {
    fontSize: 32,
  },
});

export default App;