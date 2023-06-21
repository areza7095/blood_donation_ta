import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {register} from '../../api/user_api';
import {Eye, EyeActive} from '../../assets';

export default function Register({navigation}) {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [CallNumber, setCallNumber] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');

  const checkNameValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Name must not contain Whitespaces.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const checkUsernameValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Name must not contain Whitespaces.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    // if (!isContainsUppercase.test(value)) {
    //   return 'Password must have at least one Uppercase Character.';
    // }

    // const isContainsLowercase = /^(?=.*[a-z]).*$/;
    // if (!isContainsLowercase.test(value)) {
    //   return 'Password must have at least one Lowercase Character.';
    // }

    // const isContainsNumber = /^(?=.*[0-9]).*$/;
    // if (!isContainsNumber.test(value)) {
    //   return 'Password must contain at least one Digit.';
    // }

    // const isValidLength = /^.{8,16}$/;
    // if (!isValidLength.test(value)) {
    //   return 'Password must be 8-16 Characters Long.';
    // }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const checkTelpValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isValidLength = /^.{10,13}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 10-13 Characters Long.';
    }

    return null;
  };

  const handleRegister = () => {
    AsyncStorage.clear();
    navigation.navigate('Home');
  };

  // const handleRegister = () => {
  //   const checkFullName = checkNameValidity(fullName);
  //   const checkEmail = checkNameValidity(email);
  //   const checkPassowrd = checkPasswordValidity(password);
  //   const checkCallNumber = checkTelpValidity(CallNumber);
  //   const checkBloodType = checkTelpValidity(bloodType);
  //   const checkLocation = checkTelpValidity(location);
  //   if (
  //     !checkFullName ||
  //     !checkEmail ||
  //     !checkPassowrd ||
  //     !checkCallNumber ||
  //     !checkBloodType ||
  //     !checkLocation
  //   ) {
  //     register({
  //       full_name: fullName.toUpperCase(),
  //       email: email,
  //       password: password,
  //       call_number: CallNumber.toString(),
  //       blood_type: bloodType.toString(),
  //       location: location.toString(),
  //     })
  //       .then(result => {
  //         console.log('result:', result);
  //         if (result.status == 200) {
  //           alert(
  //             'Akun anda Berhasil Dibuat, Silahkan Login',
  //           );
  //           navigation.replace('Login');
  //         } else {
  //           alert(result.message);
  //         }
  //       })
  //       .catch(err => {
  //         alert('error', err);
  //       });
  //   } else {
  //     alert(checkPassowrd);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require('../../assets/images/image_r1N5..png')}
          resizeMode="contain"
          style={styles.image}></Image>
        <View style={styles.group1}>
          <View style={styles.dareDonate1Stack}>
            <Text style={styles.dareDonate1}>
              Dare <Text style={styles.to1}>To</Text> Donate
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.emailInput}>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
            <Icon name="mail" style={styles.icon}></Icon>
            <View style={styles.rect2}></View>
            <TextInput
              placeholder="Email"
              style={styles.email}
              value={email}
              onChangeText={text => setEmail(text)}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.passwordInput}>
        <View style={styles.rect1}>
          <View style={styles.image4Row}>
            <Image
              source={require('../../assets/images/image_tnwX..png')}
              resizeMode="contain"
              style={styles.image4}></Image>
            <View style={styles.rect3}></View>
            <TextInput
              placeholder="Call Number"
              style={styles.password}
              value={CallNumber}
              onChangeText={text => setCallNumber(text)}></TextInput>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleRegister()}>
        <View style={styles.regisBtn1}>
          <View style={styles.recRegis1}>
            <Text style={styles.register}>REGISTER</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <View style={styles.alreadyRow}>
          <Text style={styles.already}>Already have an account?</Text>
          <Text style={styles.logIn}>Log In.</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.emailInput1}>
        <View style={styles.rect6}>
          <View style={styles.image6Row}>
            <Image
              source={require('../../assets/images/image_nvD5..png')}
              resizeMode="contain"
              style={styles.image6}></Image>
            <View style={styles.rect7}></View>
            <TextInput
              placeholder="Full Name"
              style={styles.email2}
              value={fullName}
              onChangeText={text => setfullName(text)}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.emailInput2}>
        <View style={styles.rect8}>
          <View style={styles.image3Row}>
            <Image
              source={require('../../assets/images/image_L3hW..png')}
              resizeMode="contain"
              style={styles.image3}></Image>
            <View style={styles.rect9}></View>
            <TextInput
              placeholder="Blood Type"
              style={styles.email3}
              value={bloodType}
              onChangeText={text => setBloodType(text)}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.emailInput3}>
        <View style={styles.rect10}>
          <View style={styles.image2Row}>
            <Image
              source={require('../../assets/images/image_f7rZ..png')}
              resizeMode="contain"
              style={styles.image2}></Image>
            <View style={styles.rect11}></View>
            <TextInput
              placeholder="Location"
              style={styles.email4}
              value={location}
              onChangeText={text => setLocation(text)}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.emailInput4}>
        <View style={styles.rect12}>
          <View style={styles.image5Row}>
            <Image
              source={require('../../assets/images/image_e14c..png')}
              resizeMode="contain"
              style={styles.image5}></Image>
            <View style={styles.rect13}></View>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.email5}
              value={password}
              onChangeText={text => setPassword(text)}></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    top: 0,
    height: 102,
    width: 42,
    left: 60,
  },
  group1: {
    top: 84,
    left: 4,
    width: 176,
    height: 34,
    position: 'absolute',
  },
  dareDonate1: {
    fontSize: 22,
    fontFamily: 'poppins-600',
    color: 'rgba(255,33,86,1)',
    position: 'absolute',
    height: 34,
    width: 175,
    left: 0,
    top: 0,
  },
  to1: {
    fontSize: 22,
    fontFamily: 'poppins-600',
    color: 'rgba(89,89,89,1)',
    position: 'absolute',
    top: 1,
    left: 58,
    height: 33,
    width: 29,
  },
  dareDonate1Stack: {
    width: 175,
    height: 34,
  },
  imageStack: {
    width: 176,
    height: 118,
    marginTop: 71,
    marginLeft: 107,
  },
  emailInput: {
    width: 314,
    height: 65,
    marginTop: 81,
    marginLeft: 31,
  },
  rect: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(255,33,86,1)',
    fontSize: 34,
    height: 34,
    width: 34,
    marginTop: 2,
  },
  rect2: {
    width: 1,
    height: 49,
    backgroundColor: '#E6E6E6',
    marginLeft: 17,
  },
  email: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 2,
  },
  iconRow: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 18,
    marginTop: 10,
  },
  passwordInput: {
    width: 314,
    height: 65,
    marginTop: 87,
    marginLeft: 31,
  },
  rect1: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  image4: {
    height: 34,
    width: 35,
    marginTop: 12,
  },
  rect3: {
    width: 1,
    height: 57,
    backgroundColor: '#E6E6E6',
    marginLeft: 17,
  },
  password: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 7,
  },
  image4Row: {
    height: 57,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 17,
    marginTop: 4,
  },
  regisBtn1: {
    width: 306,
    height: 61,
    marginTop: 181,
    marginLeft: 35,
  },
  recRegis1: {
    width: 306,
    height: 61,
    backgroundColor: 'rgba(255,33,86,1)',
    borderRadius: 30,
  },
  register: {
    fontFamily: 'poppins-500',
    color: 'rgba(255,255,255,1)',
    height: 29,
    width: 101,
    fontSize: 22,
    marginTop: 16,
    marginLeft: 103,
  },
  button: {
    width: 236,
    height: 21,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 74,
  },
  already: {
    fontFamily: 'poppins-regular',
    color: '#121212',
  },
  logIn: {
    fontFamily: 'poppins-regular',
    color: 'rgba(255,33,86,1)',
    marginLeft: 5,
  },
  alreadyRow: {
    height: 21,
    flexDirection: 'row',
    flex: 1,
    marginRight: 3,
  },
  emailInput1: {
    width: 314,
    height: 65,
    marginTop: -581,
    marginLeft: 31,
  },
  rect6: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  image6: {
    height: 34,
    width: 35,
    marginTop: 6,
  },
  rect7: {
    width: 1,
    height: 49,
    backgroundColor: '#E6E6E6',
    marginLeft: 17,
  },
  email2: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 2,
  },
  image6Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 17,
    marginTop: 10,
  },
  emailInput2: {
    width: 314,
    height: 65,
    marginTop: 239,
    marginLeft: 31,
  },
  rect8: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  image3: {
    height: 34,
    width: 35,
    marginTop: 7,
  },
  rect9: {
    width: 1,
    height: 49,
    backgroundColor: '#E6E6E6',
    marginLeft: 17,
  },
  email3: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 2,
  },
  image3Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 17,
    marginTop: 10,
  },
  emailInput3: {
    width: 314,
    height: 65,
    marginTop: 17,
    marginLeft: 31,
  },
  rect10: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  image2: {
    height: 34,
    width: 35,
    marginTop: 6,
  },
  rect11: {
    width: 1,
    height: 49,
    backgroundColor: '#E6E6E6',
    marginLeft: 16,
  },
  email4: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 2,
  },
  image2Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 18,
    marginTop: 10,
  },
  emailInput4: {
    width: 314,
    height: 65,
    marginTop: -302,
    marginLeft: 31,
  },
  rect12: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  image5: {
    height: 34,
    width: 35,
    marginTop: 6,
  },
  rect13: {
    width: 1,
    height: 49,
    backgroundColor: '#E6E6E6',
    marginLeft: 17,
  },
  email5: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 2,
  },
  image5Row: {
    height: 49,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 17,
    marginTop: 10,
  },
});
