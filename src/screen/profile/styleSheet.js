import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  Header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0C6BF2',
    flexDirection: 'row',
    width: '100%',
    height: 45,
  },
  wrapper: {
    height: 160,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    // marginBottom: 20,
  },
  imageStyle2: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
  },
  nameStyle: {
    fontWeight: '700',
    fontSize: 15,
  },
  bookingTypeStyle: {
    color: '#fff',
    backgroundColor: '#ea0788',
    borderRadius: 25,
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 4,
    margin: 2,
  },
  profileInfoStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10,
    // textAlign: 'center'
    marginVertical: 5,
  },
  profileContentContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
  profileContentStyle: {
    width: '50%',
    marginHorizontal: 15,
  },
  profileContentStyle2: {
    width: '50%',
    marginLeft: -10,
  },
  profileContentValueStyle: {
    color: '#757A87',
  },
  EditTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  EditProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: '20%',
    borderColor: '#000',
    borderRadius: 7,
    marginLeft: '25%',
  },
});
