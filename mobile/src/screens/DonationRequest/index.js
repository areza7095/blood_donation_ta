import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground
} from "react-native";

function DonationRequest(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <View style={styles.imageRow}>
          <Image
            source={require("../../assets/images/image_pz9s.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.text}>Donation Request</Text>
        </View>
      </View>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
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
                      style={styles.image1}
                      imageStyle={styles.image1_imageStyle}
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
            <View style={styles.donationReqCard2}>
              <View style={styles.donationRegRec2}>
                <View style={styles.nameBlood2ColumnRow}>
                  <View style={styles.nameBlood2Column}>
                    <View style={styles.nameBlood2}>
                      <Text style={styles.name3}>Name</Text>
                      <Text style={styles.ahmadRezaA2}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.locationBlood2}>
                      <Text style={styles.location3}>Location</Text>
                      <Text style={styles.rsudLa2}>RSUD LA</Text>
                    </View>
                  </View>
                  <View style={styles.bloodType2}>
                    <ImageBackground
                      source={require("../../assets/images/image_wK7p.png")}
                      resizeMode="contain"
                      style={styles.image2}
                      imageStyle={styles.image2_imageStyle}
                    >
                      <Text style={styles.b3}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.donateBtn2}>
                  <View style={styles.loremIpsum2Row}>
                    <Text style={styles.loremIpsum2}>5 Min Ago</Text>
                    <Text style={styles.donate3}>Donate</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.donationReqCard3}>
              <View style={styles.donationRegRec3}>
                <View style={styles.nameBlood3ColumnRow}>
                  <View style={styles.nameBlood3Column}>
                    <View style={styles.nameBlood3}>
                      <Text style={styles.name4}>Name</Text>
                      <Text style={styles.ahmadRezaA3}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.locationBlood3}>
                      <Text style={styles.location4}>Location</Text>
                      <Text style={styles.rsudLa3}>RSUD LA</Text>
                    </View>
                  </View>
                  <View style={styles.bloodType3}>
                    <ImageBackground
                      source={require("../../assets/images/image_wK7p.png")}
                      resizeMode="contain"
                      style={styles.image3}
                      imageStyle={styles.image3_imageStyle}
                    >
                      <Text style={styles.b4}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.donateBtn3}>
                  <View style={styles.loremIpsum3Row}>
                    <Text style={styles.loremIpsum3}>5 Min Ago</Text>
                    <Text style={styles.donate4}>Donate</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.donationReqCard4}>
              <View style={styles.donationRegRec4}>
                <View style={styles.nameBlood4ColumnRow}>
                  <View style={styles.nameBlood4Column}>
                    <View style={styles.nameBlood4}>
                      <Text style={styles.name5}>Name</Text>
                      <Text style={styles.ahmadRezaA4}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.locationBlood4}>
                      <Text style={styles.location5}>Location</Text>
                      <Text style={styles.rsudLa4}>RSUD LA</Text>
                    </View>
                  </View>
                  <View style={styles.bloodType4}>
                    <ImageBackground
                      source={require("../../assets/images/image_wK7p.png")}
                      resizeMode="contain"
                      style={styles.image4}
                      imageStyle={styles.image4_imageStyle}
                    >
                      <Text style={styles.b5}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.donateBtn4}>
                  <View style={styles.loremIpsum4Row}>
                    <Text style={styles.loremIpsum4}>5 Min Ago</Text>
                    <Text style={styles.donate5}>Donate</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.navBarDonationReq}>
          <ImageBackground
            source={require("../../assets/images/image_dzQ2..png")}
            resizeMode="contain"
            style={styles.image5}
            imageStyle={styles.image5_imageStyle}
          >
            <View style={styles.homeBtnRow}>
              <View style={styles.homeBtn}>
                <Image
                  source={require("../../assets/images/image_ERgc..png")}
                  resizeMode="contain"
                  style={styles.image12}
                ></Image>
              </View>
              <View style={styles.searchBtn1Stack}>
                <View style={styles.searchBtn1}>
                  <Image
                    source={require("../../assets/images/image_DbGy..png")}
                    resizeMode="contain"
                    style={styles.image8}
                  ></Image>
                </View>
                <View style={styles.donationReqBtn1}>
                  <ImageBackground
                    source={require("../../assets/images/image_eRDC..png")}
                    resizeMode="contain"
                    style={styles.image9}
                    imageStyle={styles.image9_imageStyle}
                  >
                    <View style={styles.reportBtnActv}>
                      <View style={styles.image14Stack}>
                        <Image
                          source={require("../../assets/images/image_jYYW..png")}
                          resizeMode="contain"
                          style={styles.image14}
                        ></Image>
                        <Image
                          source={require("../../assets/images/image_BSXk..png")}
                          resizeMode="contain"
                          style={styles.image13}
                        ></Image>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
              <View style={styles.profileBtn1}>
                <Image
                  source={require("../../assets/images/image_kUv5..png")}
                  resizeMode="contain"
                  style={styles.image11}
                ></Image>
              </View>
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
  backBtn: {
    width: 310,
    height: 44,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 33
  },
  image: {
    height: 44,
    width: 44
  },
  text: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 29,
    width: 164,
    fontSize: 18,
    marginLeft: 39,
    marginTop: 8
  },
  imageRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 63
  },
  scrollArea: {
    top: 0,
    left: 16,
    width: 332,
    height: 610,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 610,
    width: 332
  },
  donationReqCard1: {
    width: 332,
    height: 139
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
  image1: {
    height: 55,
    width: 38
  },
  image1_imageStyle: {},
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
  donationReqCard2: {
    width: 332,
    height: 139,
    marginTop: 17
  },
  donationRegRec2: {
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
  nameBlood2: {
    width: 75,
    height: 30
  },
  name3: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 33,
    fontSize: 10
  },
  ahmadRezaA2: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10
  },
  locationBlood2: {
    width: 75,
    height: 33,
    marginTop: 15
  },
  location3: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 47,
    fontSize: 10
  },
  rsudLa2: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10,
    marginTop: 3
  },
  nameBlood2Column: {
    width: 75
  },
  bloodType2: {
    width: 38,
    height: 55,
    marginLeft: 163,
    marginTop: 8
  },
  image2: {
    height: 55,
    width: 38
  },
  image2_imageStyle: {},
  b3: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 26,
    fontSize: 18,
    marginTop: 22,
    marginLeft: 7
  },
  nameBlood2ColumnRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 29,
    marginRight: 27
  },
  donateBtn2: {
    width: 278,
    height: 20,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 28
  },
  loremIpsum2: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 14,
    width: 49,
    fontSize: 9,
    marginTop: 6
  },
  donate3: {
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 19,
    width: 55,
    marginLeft: 174
  },
  loremIpsum2Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  donationReqCard3: {
    width: 332,
    height: 139,
    marginTop: 22
  },
  donationRegRec3: {
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
  nameBlood3: {
    width: 75,
    height: 30
  },
  name4: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 33,
    fontSize: 10
  },
  ahmadRezaA3: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10
  },
  locationBlood3: {
    width: 75,
    height: 33,
    marginTop: 15
  },
  location4: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 47,
    fontSize: 10
  },
  rsudLa3: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10,
    marginTop: 3
  },
  nameBlood3Column: {
    width: 75
  },
  bloodType3: {
    width: 38,
    height: 55,
    marginLeft: 163,
    marginTop: 8
  },
  image3: {
    height: 55,
    width: 38
  },
  image3_imageStyle: {},
  b4: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 26,
    fontSize: 18,
    marginTop: 22,
    marginLeft: 7
  },
  nameBlood3ColumnRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 29,
    marginRight: 27
  },
  donateBtn3: {
    width: 278,
    height: 20,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 28
  },
  loremIpsum3: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 14,
    width: 49,
    fontSize: 9,
    marginTop: 6
  },
  donate4: {
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 19,
    width: 55,
    marginLeft: 174
  },
  loremIpsum3Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  donationReqCard4: {
    width: 332,
    height: 139,
    marginTop: 15
  },
  donationRegRec4: {
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
  nameBlood4: {
    width: 75,
    height: 30
  },
  name5: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 33,
    fontSize: 10
  },
  ahmadRezaA4: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10
  },
  locationBlood4: {
    width: 75,
    height: 33,
    marginTop: 15
  },
  location5: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 15,
    width: 47,
    fontSize: 10
  },
  rsudLa4: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 15,
    width: 75,
    fontSize: 10,
    marginTop: 3
  },
  nameBlood4Column: {
    width: 75
  },
  bloodType4: {
    width: 38,
    height: 55,
    marginLeft: 163,
    marginTop: 8
  },
  image4: {
    height: 55,
    width: 38
  },
  image4_imageStyle: {},
  b5: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 26,
    fontSize: 18,
    marginTop: 22,
    marginLeft: 7
  },
  nameBlood4ColumnRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 29,
    marginRight: 27
  },
  donateBtn4: {
    width: 278,
    height: 20,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 28
  },
  loremIpsum4: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 14,
    width: 49,
    fontSize: 9,
    marginTop: 6
  },
  donate5: {
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 19,
    width: 55,
    marginLeft: 174
  },
  loremIpsum4Row: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  navBarDonationReq: {
    top: 536,
    left: 0,
    width: 365,
    height: 200,
    position: "absolute"
  },
  image5: {
    height: 200,
    width: 365,
    flexDirection: "row"
  },
  image5_imageStyle: {},
  homeBtn: {
    width: 24,
    height: 24,
    marginTop: 73
  },
  image12: {
    height: 24,
    width: 24
  },
  searchBtn1: {
    top: 74,
    left: 0,
    width: 24,
    height: 24,
    position: "absolute"
  },
  image8: {
    height: 24,
    width: 24
  },
  donationReqBtn1: {
    top: 0,
    left: 4,
    width: 141,
    height: 108,
    position: "absolute"
  },
  image9: {
    height: 108,
    width: 141
  },
  image9_imageStyle: {},
  reportBtnActv: {
    width: 24,
    height: 24,
    marginTop: 74,
    marginLeft: 117
  },
  image14: {
    position: "absolute",
    top: 23,
    left: 8,
    height: 7,
    width: 6
  },
  image13: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24
  },
  image14Stack: {
    width: 24,
    height: 30
  },
  searchBtn1Stack: {
    width: 145,
    height: 108,
    marginLeft: 43
  },
  profileBtn1: {
    width: 24,
    height: 24,
    marginLeft: 44,
    marginTop: 74
  },
  image11: {
    height: 24,
    width: 24
  },
  homeBtnRow: {
    height: 108,
    flexDirection: "row",
    flex: 1,
    marginRight: 44,
    marginLeft: 41,
    marginTop: 18
  },
  scrollAreaStack: {
    width: 365,
    height: 736,
    marginTop: 21,
    marginLeft: 6
  }
});

export default DonationRequest;
