import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { newBloodReq } from "../../api/user_api";

function CreateARequest({navigation}) {
  // personal info
  const [idUser, setIdUser] = useState('');
  const [dataToken, setDataToken] = useState('');


  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [callNumber, setCallNumber] = useState('');
  const [note, setNote] = useState('');
  useEffect(() => {

    handlePersonalInfo();

  });

  const handlePersonalInfo = async () => {
    const dataToken = await AsyncStorage.getItem('accessToken');
    if (dataToken == null) {
      navigation.replace('Onboarding1');
      console.log(dataToken);
    } else {
      const id_user = await AsyncStorage.getItem('id_user');
      setIdUser(id_user)
      setDataToken(dataToken)
    }
  };

  
 

  const handleSendReq = () => {
    newBloodReq({
      id_user: parseInt(idUser),
      city: city,
      hospital: hospital,
      blood_type: bloodType,
      call_number: callNumber,
      notes: note,
    })
      .then(result => {
        console.log('result:', result);
        if (result.status == 200) {
          alert(
            'Penambahan request darah berhasil dikirim',
          );
          navigation.replace('Home');
        } else {
          alert(result.message);
        }
      })
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View style={styles.image1Row}>
          <Image
            source={require("../../assets/images/image_pz9s.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.text1}>Create A Request</Text>
        </View>
      </View>
      <View style={styles.cityStack}>
        <View style={styles.city}>
          <ImageBackground
            source={require("../../assets/images/image_IEFN..png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <TextInput
              placeholder="City"
              style={styles.placeholder}
              value={city}
              onChangeText={text => setCity(text)}
            ></TextInput>
          </ImageBackground>
        </View>
        <View style={styles.hospital}>
          <ImageBackground
            source={require("../../assets/images/image_lUyI..png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <TextInput
              placeholder="Hospital"
              style={styles.placeholder1}
              value={hospital}
              onChangeText={text => setHospital(text)}
            ></TextInput>
          </ImageBackground>
        </View>
        <View style={styles.bloodType}>
          <ImageBackground
            source={require("../../assets/images/image_qN79..png")}
            resizeMode="contain"
            style={styles.image4}
            imageStyle={styles.image4_imageStyle}
          >
            <TextInput
              placeholder="Blood Type"
              style={styles.placeholder2}
              value={bloodType}
              onChangeText={text => setBloodType(text)}
            ></TextInput>
          </ImageBackground>
        </View>

        <View style={styles.mobile}>
          <ImageBackground
            source={require("../../assets/images/image_hfIF..png")}
            resizeMode="contain"
            style={styles.image7}
            imageStyle={styles.image7_imageStyle}
          >
            <TextInput
              placeholder="Mobile"
              style={styles.placeholder4}
              value={callNumber}
              onChangeText={text => setCallNumber(text)}
            ></TextInput>
          </ImageBackground>
        </View>

        <View style={styles.note}>
          <ImageBackground
            source={require("../../assets/images/image_gRi0..png")}
            resizeMode="contain"
            style={styles.image5}
            imageStyle={styles.image5_imageStyle}
          >
            <TextInput
              placeholder="Add a Note"
              style={styles.placeholder3}
              value={note}
              onChangeText={text => setNote(text)}
            ></TextInput>
          </ImageBackground>
        </View>
        <TouchableOpacity onPress={() => handleSendReq()}>
          <View style={styles.reqBtn}>
            <Image
              source={require("../../assets/images/image_bofV..png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    width: 316,
    height: 44,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 33
  },
  image1: {
    height: 44,
    width: 44
  },
  text1: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 29,
    width: 164,
    fontSize: 18,
    marginLeft: 37,
    marginTop: 8
  },
  image1Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 71
  },
  city: {
    top: 0,
    left: 0,
    width: 374,
    height: 223,
    position: "absolute"
  },
  image2: {
    height: 223,
    width: 374
  },
  image2_imageStyle: {},
  placeholder: {
    fontFamily: "poppins-500",
    color: "rgba(124,124,124,1)",
    height: 44,
    width: 256,
    fontSize: 18,
    marginTop: 93,
    marginLeft: 85
  },
  hospital: {
    top: 75,
    left: 1,
    width: 374,
    height: 223,
    position: "absolute"
  },
  image3: {
    height: 223,
    width: 374
  },
  image3_imageStyle: {},
  placeholder1: {
    fontFamily: "poppins-500",
    color: "rgba(124,124,124,1)",
    height: 44,
    width: 256,
    fontSize: 18,
    marginTop: 93,
    marginLeft: 84
  },
  bloodType: {
    top: 143,
    left: 1,
    width: 374,
    height: 223,
    position: "absolute"
  },
  image4: {
    height: 223,
    width: 374
  },
  image4_imageStyle: {},
  placeholder2: {
    fontFamily: "poppins-500",
    color: "rgba(124,124,124,1)",
    height: 44,
    width: 256,
    fontSize: 18,
    marginTop: 93,
    marginLeft: 84
  },
  mobile: {
    top: 223,
    left: 2,
    width: 374,
    height: 223,
    position: "absolute"
  },
  image7: {
    height: 223,
    width: 374
  },
  image7_imageStyle: {},
  placeholder4: {
    fontFamily: "poppins-500",
    color: "rgba(124,124,124,1)",
    height: 44,
    width: 256,
    fontSize: 18,
    marginTop: 93,
    marginLeft: 76
  },
  note: {
    top: 334,
    left: 1,
    width: 374,
    height: 223,
    position: "absolute"
  },
  image5: {
    height: 223,
    width: 374
  },
  image5_imageStyle: {},
  placeholder3: {
    fontFamily: "poppins-500",
    color: "rgba(124,124,124,1)",
    height: 40,
    width: 256,
    fontSize: 18,
    marginTop: 74,
    marginLeft: 84
  },
  reqBtn: {
    top: 446,
    left: 88,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image6: {
    height: 200,
    width: 200
  },
  cityStack: {
    width: 383,
    height: 646
  }
});

export default CreateARequest;
