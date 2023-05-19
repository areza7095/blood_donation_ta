import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default function Onboarding3({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image_EhTl..png')}
        resizeMode="contain"
        style={styles.image}></Image>
      <View style={styles.group}>
        <View style={styles.dareDonateStack}>
          <Text style={styles.dareDonate}>Dare <Text style={styles.to}>To</Text> Donate</Text>
          
        </View>
      </View>
      <Text style={styles.loremIpsum}>
        You can donate for ones in need and request blood if you need.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.loginBtn}>
        <View style={styles.recLogin}>
          <Text style={styles.logIn}>LOG IN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.button}>
        <View style={styles.recRegis}>
          <Text style={styles.register}>REGISTER</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 171,
    width: 114,
    marginTop: 143,
    marginLeft: 131,
  },
  group: {
    width: 258,
    height: 51,
    marginTop: 41,
    marginLeft: 74,
  },
  dareDonate: {
    fontSize: 33,
    fontFamily: 'poppins-600',
    color: 'rgba(255,33,86,1)',
    position: 'absolute',
    height: 50,
    width: 258,
    left: 0,
    top: 0,
  },
  to: {
    fontSize: 33,
    fontFamily: 'poppins-600',
    color: 'rgba(89,89,89,1)',
    position: 'absolute',
    top: 1,
    left: 87,
    height: 50,
    width: 43,
  },
  dareDonateStack: {
    width: 258,
    height: 51,
  },
  loremIpsum: {
    fontFamily: 'poppins-500',
    color: 'rgba(126,126,126,1)',
    height: 71,
    width: 329,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 28,
    marginLeft: 23,
  },
  loginBtn: {
    width: 306,
    height: 61,
    marginTop: 48,
    marginLeft: 35,
  },
  recLogin: {
    width: 306,
    height: 61,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 2,
    borderColor: 'rgba(255,33,86,1)',
    borderStyle: 'solid',
    borderRadius: 30,
  },
  logIn: {
    fontFamily: 'poppins-500',
    color: 'rgba(255,33,86,1)',
    height: 29,
    width: 74,
    fontSize: 22,
    marginTop: 15,
    marginLeft: 116,
  },
  button: {
    width: 306,
    height: 61,
    marginTop: 24,
    marginLeft: 35,
  },
  recRegis: {
    width: 306,
    height: 61,
    backgroundColor: 'rgba(255,33,86,1)',
    borderRadius: 30,
  },
  register: {
    fontFamily: 'poppins-500',
    color: 'rgba(255,255,255,1)',
    height: 29,
    width: 102,
    fontSize: 22,
    marginTop: 16,
    marginLeft: 104,
  },
});
