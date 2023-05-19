import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('accessToken');
    if (dataToken == null) {
      navigation.replace('Onboarding1');
      console.log(dataToken);
    } else {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const full_name = await AsyncStorage.getItem('full_name');
      const call_number = await AsyncStorage.getItem('call_number');
      const blood_type = await AsyncStorage.getItem('blood_type');
      const location = await AsyncStorage.getItem('location');
      const image_profile = await AsyncStorage.getItem('image_profile');
      navigation.replace('Home');
      console.log(dataToken);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/images/image_InLM..png')}
          resizeMode="contain"
          style={styles.image3}></Image>
      </View>
      <View style={styles.textSplash}>
        <Text style={styles.dareToDonate}>Dare To Donate</Text>
      </View>
      <View style={styles.wave}>
        <Image
          source={require('../../assets/images/waveSplash1.png')}
          resizeMode="contain"
          style={styles.image4}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,33,86,1)',
  },
  logo: {
    width: 114,
    height: 171,
    marginTop: 192,
    marginLeft: 131,
  },
  image3: {
    height: 171,
    width: 114,
  },
  textSplash: {
    width: 258,
    height: 62,
    marginTop: 21,
    marginLeft: 75,
  },
  dareToDonate: {
    fontSize: 33,
    fontFamily: 'poppins-600',
    color: 'rgba(255,249,249,1)',
  },
  wave: {
    width: 375,
    height: 156,
    marginTop: 210,
  },
  image4: {
    width: 375,
    height: 156,
  },
});
