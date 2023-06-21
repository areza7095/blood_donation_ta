import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

function Profile({navigation}) {
  const [fullName, setFullName] = useState('');
  const [callNumber, setCallNumber] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  const Url = "http://172.20.10.5:8000"  
  

  useEffect(() => {
    
      handlePersonalInfo();
  
  });

  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.replace('Splash');
  };

  const handlePersonalInfo = async () => {
    const dataToken = await AsyncStorage.getItem('accessToken');
    if (dataToken == null) {
      // navigation.replace('Onboarding1');
      console.log(dataToken);
    } else {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const full_name = await AsyncStorage.getItem('full_name');
      const call_number = await AsyncStorage.getItem('call_number');
      const blood_type = await AsyncStorage.getItem('blood_type');
      const location = await AsyncStorage.getItem('location');
      const image_profile = await AsyncStorage.getItem('image_profile');
      
      setFullName(full_name)
      setCallNumber(call_number)
      setBloodType(blood_type)
      setLocation(location)
      setImageProfile(image_profile)
      // console.log(Url+imageProfile)
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.backBtn1}>
        <View style={styles.image1Row}>
          <Image
            source={require('../../assets/images/image_pz9s.png')}
            resizeMode="contain"
            style={styles.image1}></Image>
          <Text style={styles.text}>Profile</Text>
        </View>
      </View>
      <View style={styles.imgProfile}>
        <ImageBackground
          source={require('../../assets/images/image_EtRH..png')}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}>
          <Image
            source={require('../../assets/images/rezaProfile.jpg')}
            resizeMode="contain"
            style={styles.image3}></Image>
        </ImageBackground>
      </View>
      <View style={styles.fullNameStack}>
        <View style={styles.fullName}>
          <Text style={styles.fahimEkam}>Ahmad Reza A</Text>
        </View>
        <View style={styles.address}>
          <View style={styles.image4Row}>
            <Image
              source={require('../../assets/images/image_y95K..png')}
              resizeMode="contain"
              style={styles.image4}></Image>
            <Text style={styles.klapanunggalBogor1}>Bekasi</Text>
          </View>
        </View>
      </View>
      <View style={styles.callNowRow}>
        <View style={styles.callNow}>
          <Image
            source={require('../../assets/images/image_v3pH..png')}
            resizeMode="contain"
            style={styles.image6}></Image>
        </View>
        <View style={styles.request}>
          <Image
            source={require('../../assets/images/image_NQ3d..png')}
            resizeMode="contain"
            style={styles.image5}></Image>
        </View>
      </View>
      <View style={styles.bloodType}>
        <View style={styles.rect}>
          <Text style={styles.b2}>AB</Text>
          <Text style={styles.bloodType2}>Blood Type</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleLogout()} style={styles.button}>
        <Image
          source={require('../../assets/images/signOut1.jpg')}
          resizeMode="contain"
          style={styles.image7}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn1: {
    width: 314,
    height: 44,
    flexDirection: 'row',
    marginTop: 41,
    marginLeft: 33,
  },
  image1: {
    height: 44,
    width: 44,
  },
  text: {
    fontFamily: 'poppins-500',
    color: 'rgba(39,42,47,1)',
    height: 29,
    width: 88,
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 67,
    marginTop: 8,
  },
  image1Row: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: 115,
  },
  imgProfile: {
    width: 103,
    height: 103,
    marginTop: 21,
    marginLeft: 136,
  },
  image2: {
    height: 103,
    width: 103,
  },
  image2_imageStyle: {},
  image3: {
    height: 89,
    width: 89,
    marginTop: 7,
    marginLeft: 7,
  },
  fullName: {
    top: 0,
    left: 0,
    width: 284,
    height: 42,
    position: 'absolute',
  },
  fahimEkam: {
    fontFamily: 'poppins-500',
    color: 'rgba(39,42,47,1)',
    height: 42,
    width: 284,
    fontSize: 26,
    textAlign: 'center',
  },
  address: {
    top: 39,
    
    width: 254,
    height: 24,
    position: 'absolute',
    flexDirection: 'row',
  },
  image4: {
    height: 24,
    width: 19,
  },
  klapanunggalBogor1: {
    fontFamily: 'poppins-500',
    color: 'rgba(126,126,126,1)',
    height: 24,
    width: 230,
    fontSize: 16,
    marginLeft: 5,
  },
  image4Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    left: 100
  },
  fullNameStack: {
    width: 287,
    height: 63,
    marginTop: 21,
    marginLeft: 52,
  },
  callNow: {
    width: 158,
    height: 52,
  },
  image6: {
    height: 52,
    width: 158,
  },
  request: {
    width: 158,
    height: 52,
    marginLeft: 17,
  },
  image5: {
    height: 52,
    width: 158,
  },
  callNowRow: {
    height: 52,
    flexDirection: 'row',
    marginTop: 48,
    marginLeft: 25,
    marginRight: 17,
  },
  bloodType: {
    width: 67,
    height: 66,
    marginTop: 54,
    marginLeft: 155,
  },
  rect: {
    width: 67,
    height: 66,
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 10,
  },
  b2: {
    fontFamily: 'poppins-500',
    color: '#121212',
    height: 29,
    width: 51,
    textAlign: 'center',
    fontSize: 26,
    marginTop: 7,
    marginLeft: 8,
  },
  bloodType2: {
    fontFamily: 'poppins-500',
    color: 'rgba(124,124,124,1)',
    height: 18,
    width: 58,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 4,
  },
  button: {
    width: 329,
    height: 84,
    marginTop: 152,
    marginLeft: 25,
  },
  image7: {
    width: 329,
    height: 84,
  },
});

export default Profile;
