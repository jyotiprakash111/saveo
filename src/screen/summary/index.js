import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Header from '../../components/header';

function Summary(props) {
  return (
    <View>
      <Header title="Summary" BackImg={require('../../assets/menu.png')} />
    </View>
  );
}

export default Summary;
