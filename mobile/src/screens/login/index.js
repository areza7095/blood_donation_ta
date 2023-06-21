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
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {login} from '../../api/user_api';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    AsyncStorage.clear();
    navigation.navigate('Home');
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

  // const handleLogin = () => {
  //   login({
  //     email: email.toLocaleLowerCase(),
  //     password: password,
  //   })
  //     .then(result => {
  //       if (result.status == 200) {
  //         const accessToken = result.data.accessToken;
  //         const id_user = result.data.personal_information.id_user;
  //         const full_name = result.data.personal_information.full_name;
  //         const call_number = result.data.personal_information.call_number;
  //         const blood_type = result.data.personal_information.blood_type;
  //         const location = result.data.personal_information.location;
  //         const image_profile = result.data.personal_information.image_profile;

  //         const id_userToString = id_user.toString()

  //         AsyncStorage.setItem('accessToken', accessToken);
  //         AsyncStorage.setItem('id_user', id_userToString);
  //         AsyncStorage.setItem('full_name', full_name);
  //         AsyncStorage.setItem('call_number', call_number);
  //         AsyncStorage.setItem('blood_type', blood_type);
  //         AsyncStorage.setItem('location', location);
  //         AsyncStorage.setItem('image_profile', image_profile);
  //         navigation.replace('Home');
  //       } else {
  //         alert(result.message);
  //       }
  //     })
  //     .catch(err => {
  //       alert('error', err);
  //       console.log(err)
  //     });
  // };

  return (
    <View style={styles.container}>
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
      <View style={styles.emailInput}>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
            <FeatherIcon name="mail" style={styles.icon}></FeatherIcon>
            <View style={styles.rect2}></View>
            <TextInput
              placeholder="Email"
              style={styles.email}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.passwordInput}>
        <View style={styles.rect1}>
          <View style={styles.icon2Row}>
            <MaterialCommunityIconsIcon
              name="form-textbox-password"
              style={styles.icon2}></MaterialCommunityIconsIcon>
            <View style={styles.rect3}></View>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.password}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </View>
      </View>
      {email == '' || password == ''  ? (
        <TouchableOpacity disabled onPress={handleLogin}>
        <View style={styles.regisBtn1}>
          <View style={styles.recRegis1Blank}>
            <Text style={styles.register1}>LOGIN</Text>
          </View>
        </View>
      </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleLogin}>
        <View style={styles.regisBtn1}>
          <View style={styles.recRegis1}>
            <Text style={styles.register1}>LOGIN</Text>
          </View>
        </View>
      </TouchableOpacity>
      )}

      
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.button}>
        <View style={styles.textRow}>
          <Text style={styles.text}>Don’t have an account?</Text>
          <Text style={styles.registerNow}>Register Now.</Text>
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
    height: 102,
    width: 68,
    marginTop: 80,
    alignSelf: 'center',
  },
  group1: {
    width: 176,
    height: 34,
    marginTop: 13,
    marginLeft: 107,
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
  emailInput: {
    width: 314,
    height: 65,
    marginTop: 87,
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
    marginLeft: 22,
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
    marginLeft: 13,
    marginTop: 10,
  },
  passwordInput: {
    width: 314,
    height: 65,
    marginTop: 35,
    marginLeft: 31,
  },
  rect1: {
    width: 314,
    height: 65,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
  },
  icon2: {
    color: 'rgba(255,33,86,1)',
    fontSize: 34,
    width: 40,
    height: 43,
    marginTop: 7,
  },
  rect3: {
    width: 1,
    height: 57,
    backgroundColor: '#E6E6E6',
    marginLeft: 16,
  },
  password: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 7,
  },
  icon2Row: {
    height: 57,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 13,
    marginTop: 4,
  },
  regisBtn1: {
    width: 306,
    height: 61,
    marginTop: 51,
    marginLeft: 35,
  },
  recRegis1: {
    width: 306,
    height: 61,
    backgroundColor: 'rgba(255,33,86,1)',
    borderRadius: 30,
  },
  recRegis1Blank: {
    width: 306,
    height: 61,
    backgroundColor: 'yellow',
    borderRadius: 30,
  },
  register1: {
    fontFamily: 'poppins-500',
    color: 'rgba(255,255,255,1)',
    height: 29,
    width: 68,
    fontSize: 22,
    marginTop: 16,
    marginLeft: 119,
  },
  forgotPassword: {
    fontFamily: 'poppins-regular',
    color: 'rgba(255,33,86,1)',
    marginTop: 10,
    marginLeft: 126,
  },
  button: {
    width: 263,
    height: 21,
    flexDirection: 'row',
    marginTop: 108,
    marginLeft: 66,
  },
  text: {
    fontFamily: 'poppins-regular',
    color: '#121212',
  },
  registerNow: {
    fontFamily: 'poppins-regular',
    color: 'rgba(255,33,86,1)',
    marginLeft: 4,
  },
  textRow: {
    height: 21,
    flexDirection: 'row',
    flex: 1,
  },
});
