import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Home({navigation}) {
  const [nik, setNik] = useState('');
  const [nama, setNama] = useState('');
  const [telp, setTelp] = useState('');
  const [accessToken, setAccessToken] = useState('');

  

  useEffect(() => {
    
  }, []);

 

  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };


  return (
    <View style={styles.container}>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <View style={styles.image2Row}>
            <Image
              source={require("../../assets/images/image_jWwa..png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../../assets/images/image_ZSAO..png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </View>
        <View style={styles.group2}>
          <ImageBackground
            source={require("../../assets/images/image_iW8j..png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            {/* <Image
              source={require("../../assets/images/image_WChR..png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image> */}
          </ImageBackground>
        </View>
        <View style={styles.categories}>
          <View style={styles.button6Row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("FindDonors")}
              style={styles.button6}
            >
              <Image
                source={require("../../assets/images/image_YKVv..png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DonationRequest")}
              style={styles.button7}
            >
              <Image
                source={require("../../assets/images/image_wc0x..png")}
                resizeMode="contain"
                style={styles.image6}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateARequest")}
              style={styles.button8}
            >
              <Image
                source={require("../../assets/images/image_ejIa..png")}
                resizeMode="contain"
                style={styles.image7}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.donationRequest}>Donation Request</Text>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.donationReqCard}>
              <View style={styles.donationRegRec}>
                <View style={styles.nameBloodColumnRow}>
                  <View style={styles.nameBloodColumn}>
                    <View style={styles.nameBlood}>
                      <Text style={styles.name}>Name</Text>
                      <Text style={styles.ahmadRezaA}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.locationBlood}>
                      <Text style={styles.location}>Location</Text>
                      <Text style={styles.rsudLa}>RSUD LA</Text>
                    </View>
                  </View>
                  <View style={styles.bloodType}>
                    <ImageBackground
                      source={require("../../assets/images/image_wK7p.png")}
                      resizeMode="contain"
                      style={styles.image11}
                      imageStyle={styles.image11_imageStyle}
                    >
                      <Text style={styles.b}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.donateBtn}>
                  <View style={styles.loremIpsumRow}>
                    <Text style={styles.loremIpsum}>5 Min Ago</Text>
                    <Text style={styles.donate}>Donate</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.donationReqCard1}>
              <View style={styles.donationRegRec1}>
                <View style={styles.nameBlood1ColumnRow}>
                  <View style={styles.nameBlood1Column}>
                    <View style={styles.nameBlood1}>
                      <Text style={styles.name2}>Name</Text>
                      <Text style={styles.ahmadRezaA1}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.locationBlood1}>
                      <Text style={styles.location2}>Location</Text>
                      <Text style={styles.rsudLa1}>RSUD LA</Text>
                    </View>
                  </View>
                  <View style={styles.bloodType1}>
                    <ImageBackground
                      source={require("../../assets/images/image_wK7p.png")}
                      resizeMode="contain"
                      style={styles.image19}
                      imageStyle={styles.image19_imageStyle}
                    >
                      <Text style={styles.b2}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.donateBtn1}>
                  <View style={styles.loremIpsum1Row}>
                    <Text style={styles.loremIpsum1}>5 Min Ago</Text>
                    <Text style={styles.donate2}>Donate</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.navBarHome}>
          <ImageBackground
            source={require("../../assets/images/image_dzQ2..png")}
            resizeMode="contain"
            style={styles.image12}
            imageStyle={styles.image12_imageStyle}
          >
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.image13Stack}>
                  <Image
                    source={require("../../assets/images/image_jOo2..png")}
                    resizeMode="contain"
                    style={styles.image13}
                  ></Image>
                  <Image
                    source={require("../../assets/images/image_jYYW..png")}
                    resizeMode="contain"
                    style={styles.image18}
                  ></Image>
                </View>
              </TouchableOpacity>
              <View style={styles.button3StackStack}>
                <View style={styles.button3Stack}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("FindDonors")}
                    style={styles.button3}
                  >
                    <Image
                      source={require("../../assets/images/image_DbGy..png")}
                      resizeMode="contain"
                      style={styles.image14}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CreateARequest")}
                    style={styles.button5}
                  ></TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CreateARequest")}
                  style={styles.button10}
                >
                  <Image
                    source={require("../../assets/images/dropBlood_R5aU..png")}
                    resizeMode="contain"
                    style={styles.image20}
                  ></Image>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Report")}
                style={styles.button4}
              >
                <Image
                  source={require("../../assets/images/image_BurJ..png")}
                  resizeMode="contain"
                  style={styles.image16}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={styles.button2}
              >
                <Image
                  source={require("../../assets/images/image_kUv5..png")}
                  resizeMode="contain"
                  style={styles.image17}
                ></Image>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    top: 0,
    left: 30,
    width: 317,
    height: 30,
    position: "absolute",
    flexDirection: "row"
  },
  image2: {
    height: 30,
    width: 30
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 257
  },
  image2Row: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  group2: {
    top: 6,
    left: 0,
    width: 375,
    height: 287,
    position: "absolute"
  },
  image3: {
    height: 287,
    width: 375
  },
  image3_imageStyle: {},
  image4: {
    height: 8,
    width: 60,
    marginTop: 236,
    marginLeft: 158
  },
  categories: {
    top: 300,
    left: 23,
    width: 333,
    height: 223,
    position: "absolute"
  },
  button6: {
    width: 111,
    height: 111
  },
  image5: {
    height: 111,
    width: 111
  },
  button7: {
    width: 111,
    height: 111
  },
  image6: {
    height: 111,
    width: 111
  },
  button8: {
    width: 111,
    height: 111
  },
  image7: {
    height: 111,
    width: 111
  },
  button6Row: {
    height: 111,
    flexDirection: "row"
  },
  assistant: {
    top: 1,
    left: 0,
    width: 111,
    height: 111,
    position: "absolute"
  },
  image8: {
    height: 111,
    width: 111
  },
  button9: {
    top: 0,
    left: 110,
    width: 111,
    height: 111,
    position: "absolute"
  },
  image9: {
    height: 111,
    width: 111
  },
  assistantStack: {
    width: 221,
    height: 112
  },
  campaign: {
    width: 111,
    height: 111
  },
  image10: {
    height: 111,
    width: 111
  },
  assistantStackRow: {
    height: 112,
    flexDirection: "row",
    marginRight: 1
  },
  groupStack: {
    width: 375,
    height: 485,
    marginTop: 23
  },
  donationRequest: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 26,
    width: 158,
    fontSize: 15,
    marginLeft: 30
  },
  scrollArea: {
    top: 0,
    left: 16,
    width: 333,
    height: 164,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 289,
    width: 333
  },
  donationReqCard: {
    width: 332,
    height: 139
  },
  donationRegRec: {
    width: 332,
    height: 139,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 18,
    shadowOpacity: 0.25,
    shadowRadius: 6
  },
  nameBlood: {
    width: 75,
    height: 30
  },
  name: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 33,
    fontSize: 10
  },
  ahmadRezaA: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10
  },
  locationBlood: {
    width: 75,
    height: 33,
    marginTop: 15
  },
  location: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 47,
    fontSize: 10
  },
  rsudLa: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10,
    marginTop: 3
  },
  nameBloodColumn: {
    width: 75
  },
  bloodType: {
    width: 38,
    height: 55,
    marginLeft: 163,
    marginTop: 8
  },
  image11: {
    height: 55,
    width: 38
  },
  image11_imageStyle: {},
  b: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 26,
    fontSize: 18,
    marginTop: 22,
    marginLeft: 7
  },
  nameBloodColumnRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 29,
    marginRight: 27
  },
  donateBtn: {
    width: 278,
    height: 20,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 28
  },
  loremIpsum: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 14,
    width: 49,
    fontSize: 9,
    marginTop: 6
  },
  donate: {
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 19,
    width: 55,
    marginLeft: 174
  },
  loremIpsumRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  donationReqCard1: {
    width: 332,
    height: 139,
    marginTop: 11,
    marginLeft: 2
  },
  donationRegRec1: {
    width: 332,
    height: 139,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 18,
    shadowOpacity: 0.25,
    shadowRadius: 6
  },
  nameBlood1: {
    width: 75,
    height: 30
  },
  name2: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 33,
    fontSize: 10
  },
  ahmadRezaA1: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10
  },
  locationBlood1: {
    width: 75,
    height: 33,
    marginTop: 15
  },
  location2: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 47,
    fontSize: 10
  },
  rsudLa1: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10,
    marginTop: 3
  },
  nameBlood1Column: {
    width: 75
  },
  bloodType1: {
    width: 38,
    height: 55,
    marginLeft: 163,
    marginTop: 8
  },
  image19: {
    height: 55,
    width: 38
  },
  image19_imageStyle: {},
  b2: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 26,
    fontSize: 18,
    marginTop: 22,
    marginLeft: 7
  },
  nameBlood1ColumnRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 29,
    marginRight: 27
  },
  donateBtn1: {
    width: 278,
    height: 20,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 28
  },
  loremIpsum1: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 14,
    width: 49,
    fontSize: 9,
    marginTop: 6
  },
  donate2: {
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 19,
    width: 55,
    marginLeft: 174
  },
  loremIpsum1Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  navBarHome: {
    top: 63,
    left: 0,
    width: 365,
    height: 200,
    position: "absolute"
  },
  image12: {
    height: 200,
    width: 365,
    flexDirection: "row"
  },
  image12_imageStyle: {},
  button: {
    width: 24,
    height: 30,
    marginTop: 78
  },
  image13: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24
  },
  image18: {
    position: "absolute",
    top: 22,
    left: 9,
    height: 6,
    width: 5
  },
  image13Stack: {
    width: 24,
    height: 28,
    marginTop: 2
  },
  button3: {
    top: 78,
    left: 0,
    width: 24,
    height: 24,
    position: "absolute"
  },
  image14: {
    height: 24,
    width: 24
  },
  button5: {
    top: 0,
    left: 7,
    width: 95,
    height: 81,
    position: "absolute"
  },
  button3Stack: {
    top: 0,
    left: 0,
    width: 102,
    height: 102,
    position: "absolute"
  },
  button10: {
    top: 39,
    left: 44,
    width: 57,
    height: 51,
    position: "absolute"
  },
  image20: {
    height: 51,
    width: 57
  },
  button3StackStack: {
    width: 102,
    height: 102,
    marginLeft: 46
  },
  button4: {
    width: 24,
    height: 24,
    marginLeft: 19,
    marginTop: 78
  },
  image16: {
    height: 24,
    width: 24
  },
  button2: {
    width: 24,
    height: 24,
    marginLeft: 44,
    marginTop: 78
  },
  image17: {
    height: 24,
    width: 24
  },
  buttonRow: {
    height: 108,
    flexDirection: "row",
    flex: 1,
    marginRight: 44,
    marginLeft: 38,
    marginTop: 14
  },
  scrollAreaStack: {
    width: 365,
    height: 263,
    marginTop: 18,
    marginLeft: 7
  }
});
