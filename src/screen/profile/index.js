import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
// import {CardSection} from '../../Card-Section/CardSection';
import {CardSection} from '../../components/cardSection';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import Header from '../../components/header';
import {styles} from './styleSheet';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: '',
      userId: '',
      name: '',
      emailId: '',
      mobileNo: '',
      address: '',
      loading: false,
      refreshing: false,
      profileData: {},
      image: '',
    };
  }

  //   _onRefresh = async () => {
  //     this.setState({refreshing: true});
  //     let data = {
  //       mobileNo: await AsyncStorage.getItem('salesPointMobileNo'),
  //     };
  //     getProfile(data)
  //       .then((response) => {
  //         // alert(JSON.stringify(response))
  //         this.setState({
  //           userRole: response.Details.userRole,
  //           name: response.saleDetails.salePointName,
  //           emailId: response.Details.emailId,
  //           mobileNo: response.Details.mobileNo,
  //           address: response.Details.address,
  //           userId: response.Details.userId,
  //           profileData: response.Details,
  //           image: response.Details.image,
  //           refreshing: false,
  //         });
  //         console.log();
  //         //alert(JSON.stringify(resp))
  //       })
  //       .catch((err) => this.setState({refreshing: false}));
  //   };

  //   async componentDidMount() {
  //     const data = {
  //       mobileNo: await AsyncStorage.getItem('salesPointMobileNo'),
  //     };
  //     getProfile(data)
  //       .then((response) => {
  //         // alert(JSON.stringify(response))
  //         this.setState({
  //           userRole: response.Details.userRole,
  //           name: response.saleDetails.salePointName,
  //           emailId: response.Details.emailId,
  //           mobileNo: response.Details.mobileNo,
  //           address: response.Details.address,
  //           userId: response.Details.userId,
  //           profileData: response.Details,
  //           image: response.Details.image,
  //         });
  //         console.log();
  //         //alert(JSON.stringify(resp))
  //       })
  //       .catch((err) => console.log(err));
  //   }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Header title="Profile" BackImg={require('../../assets/menu.png')} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.wrapper}>
            <Image
              style={styles.imageStyle2}
              source={require('../../assets/user.png')}
              //   source={{uri: this.state.image}}
            />
            <Text style={styles.nameStyle}>User Name</Text>
          </View>
          <View>
            <Text style={styles.profileInfoStyle}>PROFILE INFO</Text>
          </View>
          <CardSection>
            <View style={styles.profileContentContainerStyle}>
              <View style={styles.profileContentStyle}>
                <Text>First Name</Text>
              </View>
              <View style={styles.profileContentStyle2}>
                <Text style={styles.profileContentValueStyle}>
                  Madhu
                </Text>
              </View>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.profileContentContainerStyle}>
              <View style={styles.profileContentStyle}>
                <Text>Last Name</Text>
              </View>
              <View style={styles.profileContentStyle2}>
                <Text style={styles.profileContentValueStyle}>
                 Madhu
                </Text>
              </View>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.profileContentContainerStyle}>
              <View style={styles.profileContentStyle}>
                <Text>PrimaryNo</Text>
              </View>
              <View style={styles.profileContentStyle2}>
                <Text style={styles.profileContentValueStyle}>
                XXXXXXX
                </Text>
              </View>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.profileContentContainerStyle}>
              <View style={styles.profileContentStyle}>
                <Text>Alternative No</Text>
              </View>
              <View style={styles.profileContentStyle2}>
                <Text style={styles.profileContentValueStyle}>
                XXXXXXX
                </Text>
              </View>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.profileContentContainerStyle}>
              <View style={styles.profileContentStyle}>
                <Text>Email Id</Text>
              </View>
              <View style={styles.profileContentStyle2}>
                <Text style={styles.profileContentValueStyle}>
                 xyz@gmail.com
                </Text>
              </View>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.profileContentContainerStyle}>
              <View style={styles.profileContentStyle}>
                <Text>Address Details</Text>
              </View>
              <View style={styles.profileContentStyle2}>
                <Text style={styles.profileContentValueStyle}>
               Bla,Bla
                </Text>
              </View>
            </View>
          </CardSection>
        </ScrollView>
      </View>
    );
  }
}
export default Profile;
