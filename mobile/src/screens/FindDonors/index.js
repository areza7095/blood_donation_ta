import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  ScrollView
} from "react-native";
import { getUserInfo } from "../../api/user_api";

function FindDonors({ navigation }) {
  const [userInfo, setUserInfo] = useState([]);

  const Url = "http://192.168.10.82:8000"



  const handleGetUserInfo = () => {
    getUserInfo(

    ).then(result => {
      if (result.status == 200) {
        return setUserInfo(result.data);
      }
    });
  };

  useEffect(() => {

    handleGetUserInfo();

  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.backBtn1Stack}>
        <View style={styles.backBtn1}>
          <View style={styles.image1Row}>
            <Image
              source={require("../../assets/images/image_pz9s.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
            <Text style={styles.text}>Find Donors</Text>
          </View>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.image2Stack}>
            <Image
              source={require("../../assets/images/image_RnJA..png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <View style={styles.searchInput}>
              <ImageBackground
                source={require("../../assets/images/image_YvSZ..png")}
                resizeMode="contain"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
                <TextInput
                  placeholder="Search"
                  style={styles.placeholder}
                ></TextInput>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {/* {userInfo.map((data, index) => {
            console.log(`${Url}${data.image_profile}`)
            return (
              <>
                <View style={styles.personDonors}>
                  <View style={styles.rect}>
                    <View style={styles.profileImageRow}>
                      <View style={styles.profileImage}>
                        <Image
                          source={{uri: `${Url}${data.image_profile}`}}
                          resizeMode="contain"
                          style={styles.image4}
                        ></Image>
                      </View>
                      <View style={styles.fullNameColumn}>
                        <View style={styles.fullName}>
                          <Text style={styles.ahmadRezaA}>{data.full_name}</Text>
                        </View>
                        <View style={styles.address}>
                          <View style={styles.image5Row}>
                            <Image
                              source={require("../../assets/images/image_y95K..png")}
                              resizeMode="contain"
                              style={styles.image5}
                            ></Image>
                            <Text style={styles.klapanunggalBogor}>
                            {data.location}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.bloodType}>
                        <ImageBackground
                          source={require("../../assets/images/image_cl5X..png")}
                          resizeMode="contain"
                          style={styles.image6}
                          imageStyle={styles.image6_imageStyle}
                        >
                          <Text style={styles.b2}>{data.blood_type}</Text>
                        </ImageBackground>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            )
          })} */}

          {/* <View style={styles.personDonors}>
            <View style={styles.rect}>
              <View style={styles.profileImageRow}>
                <View style={styles.profileImage}>
                  <Image
                    source={{ uri: `` }}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
                <View style={styles.fullNameColumn}>
                  <View style={styles.fullName}>
                    <Text style={styles.ahmadRezaA}>Ahmad Reza A</Text>
                  </View>
                  <View style={styles.address}>
                    <View style={styles.image5Row}>
                      <Image
                        source={require("../../assets/images/image_y95K..png")}
                        resizeMode="contain"
                        style={styles.image5}
                      ></Image>
                      <Text style={styles.klapanunggalBogor}>
                        Klapanunggal
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bloodType}>
                  <ImageBackground
                    source={require("../../assets/images/image_cl5X..png")}
                    resizeMode="contain"
                    style={styles.image6}
                    imageStyle={styles.image6_imageStyle}
                  >
                    <Text style={styles.b2}>AB</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View> */}

          <View style={styles.personDonors}>
            <View style={styles.rect}>
              <View style={styles.profileImageRow}>
                <View style={styles.profileImage}>
                  <Image
                    source={require('../../assets/images/athifaProfile.jpeg')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
                <View style={styles.fullNameColumn}>
                  <View style={styles.fullName}>
                    <Text style={styles.ahmadRezaA}>Athifa Putri Agastya</Text>
                  </View>
                  <View style={styles.address}>
                    <View style={styles.image5Row}>
                      <Image
                        source={require("../../assets/images/image_y95K..png")}
                        resizeMode="contain"
                        style={styles.image5}
                      ></Image>
                      <Text style={styles.klapanunggalBogor}>
                        Bojong
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bloodType}>
                  <ImageBackground
                    source={require("../../assets/images/image_cl5X..png")}
                    resizeMode="contain"
                    style={styles.image6}
                    imageStyle={styles.image6_imageStyle}
                  >
                    <Text style={styles.a2}>A</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.personDonors}>
            <View style={styles.rect}>
              <View style={styles.profileImageRow}>
                <View style={styles.profileImage}>
                  <Image
                    source={require('../../assets/images/sipaProfile.jpeg')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
                <View style={styles.fullNameColumn}>
                  <View style={styles.fullName}>
                    <Text style={styles.ahmadRezaA}>Syifa Salsabila H</Text>
                  </View>
                  <View style={styles.address}>
                    <View style={styles.image5Row}>
                      <Image
                        source={require("../../assets/images/image_y95K..png")}
                        resizeMode="contain"
                        style={styles.image5}
                      ></Image>
                      <Text style={styles.klapanunggalBogor}>
                        Bojong
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bloodType}>
                  <ImageBackground
                    source={require("../../assets/images/image_cl5X..png")}
                    resizeMode="contain"
                    style={styles.image6}
                    imageStyle={styles.image6_imageStyle}
                  >
                    <Text style={styles.a2}>B</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.personDonors}>
            <View style={styles.rect}>
              <View style={styles.profileImageRow}>
                <View style={styles.profileImage}>
                  <Image
                    source={require('../../assets/images/naufalProfile.jpeg')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
                <View style={styles.fullNameColumn}>
                  <View style={styles.fullName}>
                    <Text style={styles.ahmadRezaA}>Naufal Ariq S</Text>
                  </View>
                  <View style={styles.address}>
                    <View style={styles.image5Row}>
                      <Image
                        source={require("../../assets/images/image_y95K..png")}
                        resizeMode="contain"
                        style={styles.image5}
                      ></Image>
                      <Text style={styles.klapanunggalBogor}>
                        Cileungsi
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bloodType}>
                  <ImageBackground
                    source={require("../../assets/images/image_cl5X..png")}
                    resizeMode="contain"
                    style={styles.image6}
                    imageStyle={styles.image6_imageStyle}
                  >
                    <Text style={styles.a2}>O</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.personDonors}>
            <View style={styles.rect}>
              <View style={styles.profileImageRow}>
                <View style={styles.profileImage}>
                  <Image
                    source={require('../../assets/images/romiProfilee.jpeg')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
                <View style={styles.fullNameColumn}>
                  <View style={styles.fullName}>
                    <Text style={styles.ahmadRezaA}>Muharomi K</Text>
                  </View>
                  <View style={styles.address}>
                    <View style={styles.image5Row}>
                      <Image
                        source={require("../../assets/images/image_y95K..png")}
                        resizeMode="contain"
                        style={styles.image5}
                      ></Image>
                      <Text style={styles.klapanunggalBogor}>
                        Jonggol
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bloodType}>
                  <ImageBackground
                    source={require("../../assets/images/image_cl5X..png")}
                    resizeMode="contain"
                    style={styles.image6}
                    imageStyle={styles.image6_imageStyle}
                  >
                    <Text style={styles.a2}>B</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.personDonors}>
            <View style={styles.rect}>
              <View style={styles.profileImageRow}>
                <View style={styles.profileImage}>
                  <Image
                    source={require("../../assets/images/faylaProfile.jpeg")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
                <View style={styles.fullNameColumn}>
                  <View style={styles.fullName}>
                    <Text style={styles.ahmadRezaA}>Fayla Makarennu</Text>
                  </View>
                  <View style={styles.address}>
                    <View style={styles.image5Row}>
                      <Image
                        source={require("../../assets/images/image_y95K..png")}
                        resizeMode="contain"
                        style={styles.image5}
                      ></Image>
                      <Text style={styles.klapanunggalBogor}>
                        Jonggol
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bloodType}>
                  <ImageBackground
                    source={require("../../assets/images/image_cl5X..png")}
                    resizeMode="contain"
                    style={styles.image6}
                    imageStyle={styles.image6_imageStyle}
                  >
                    <Text style={styles.a2}>B</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,247,247,1)"
  },
  backBtn1: {
    top: 115,
    left: 32,
    width: 318,
    height: 44,
    position: "absolute",
    flexDirection: "row"
  },
  image1: {
    height: 44,
    width: 44
  },
  text: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 29,
    width: 130,
    fontSize: 18,
    textAlign: "center",
    marginLeft: 48,
    marginTop: 8
  },
  image1Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 96
  },
  searchBar: {
    top: 0,
    left: 0,
    width: 365,
    height: 237,
    position: "absolute"
  },
  image2: {
    position: "absolute",
    top: 189,
    left: 306,
    height: 48,
    width: 48
  },
  searchInput: {
    top: 0,
    left: 0,
    width: 323,
    height: 237,
    position: "absolute"
  },
  image3: {
    height: 436,
    width: 323
  },
  image3_imageStyle: {},
  placeholder: {
    fontFamily: "poppins-500",
    color: "rgba(205,205,205,1)",
    height: 38,
    width: 185,
    marginTop: 202,
    marginLeft: 101
  },
  image2Stack: {
    width: 354,
    height: 237
  },
  backBtn1Stack: {
    width: 365,
    height: 237,
    marginTop: -100,
    marginLeft: 1
  },
  scrollArea: {
    width: 335,
    height: 558,
    marginTop: 25,
    marginLeft: 20
  },
  scrollArea_contentContainerStyle: {
    height: 607,
    width: 335
  },
  personDonors: {
    width: 335,
    height: 111,
    marginBottom: 15
  },
  rect: {
    width: 335,
    height: 111,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  profileImage: {
    width: 85,
    height: 85
  },
  image4: {
    height: 85,
    width: 85
  },
  fullName: {
    width: 158,
    height: 26,
    marginLeft: 3
  },
  ahmadRezaA: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 26,
    width: 158,
    fontSize: 16
  },
  address: {
    width: 155,
    height: 17,
    flexDirection: "row",
    marginTop: 16
  },
  image5: {
    height: 16,
    width: 16
  },
  klapanunggalBogor: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 16,
    width: 133,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 1
  },
  image5Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  fullNameColumn: {
    width: 161,
    marginLeft: 19,
    marginTop: 9,
    marginBottom: 17
  },
  bloodType: {
    width: 39,
    height: 41,
    marginTop: 18
  },
  image6: {
    height: 41,
    width: 39
  },
  image6_imageStyle: {},
  a2: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 15
  },
  b3: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 15
  },
  b2: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 11
  },
  profileImageRow: {
    height: 85,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 18
  },
  personDonors1: {
    width: 335,
    height: 111,
    marginTop: 13
  },
  rect1: {
    width: 335,
    height: 111,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  profileImage1: {
    width: 85,
    height: 85
  },
  image7: {
    height: 85,
    width: 85
  },
  fullName1: {
    width: 158,
    height: 26,
    marginLeft: 3
  },
  ahmadRezaA1: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 26,
    width: 158,
    fontSize: 16
  },
  address1: {
    width: 155,
    height: 17,
    flexDirection: "row",
    marginTop: 16
  },
  image8: {
    height: 16,
    width: 16
  },
  klapanunggalBogor1: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 16,
    width: 133,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 1
  },
  image8Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  fullName1Column: {
    width: 161,
    marginLeft: 19,
    marginTop: 9,
    marginBottom: 17
  },
  bloodType1: {
    width: 39,
    height: 41,
    marginTop: 18
  },
  image9: {
    height: 41,
    width: 39
  },
  image9_imageStyle: {},
  b3: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 11
  },
  profileImage1Row: {
    height: 85,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 18
  },
  personDonors2: {
    width: 335,
    height: 111,
    marginTop: 8
  },
  rect2: {
    width: 335,
    height: 111,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  profileImage2: {
    width: 85,
    height: 85
  },
  image10: {
    height: 85,
    width: 85
  },
  fullName2: {
    width: 158,
    height: 26,
    marginLeft: 3
  },
  ahmadRezaA2: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 26,
    width: 158,
    fontSize: 16
  },
  address2: {
    width: 155,
    height: 17,
    flexDirection: "row",
    marginTop: 16
  },
  image11: {
    height: 16,
    width: 16
  },
  klapanunggalBogor2: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 16,
    width: 133,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 1
  },
  image11Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  fullName2Column: {
    width: 161,
    marginLeft: 19,
    marginTop: 9,
    marginBottom: 17
  },
  bloodType2: {
    width: 39,
    height: 41,
    marginTop: 18
  },
  image12: {
    height: 41,
    width: 39
  },
  image12_imageStyle: {},
  b4: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 11
  },
  profileImage2Row: {
    height: 85,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 18
  },
  personDonors3: {
    width: 335,
    height: 111,
    marginTop: 14
  },
  rect3: {
    width: 335,
    height: 111,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  profileImage3: {
    width: 85,
    height: 85
  },
  image13: {
    height: 85,
    width: 85
  },
  fullName3: {
    width: 158,
    height: 26,
    marginLeft: 3
  },
  ahmadRezaA3: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 26,
    width: 158,
    fontSize: 16
  },
  address3: {
    width: 155,
    height: 17,
    flexDirection: "row",
    marginTop: 16
  },
  image14: {
    height: 16,
    width: 16
  },
  klapanunggalBogor3: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 16,
    width: 133,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 1
  },
  image14Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  fullName3Column: {
    width: 161,
    marginLeft: 19,
    marginTop: 9,
    marginBottom: 17
  },
  bloodType3: {
    width: 39,
    height: 41,
    marginTop: 18
  },
  image15: {
    height: 41,
    width: 39
  },
  image15_imageStyle: {},
  b5: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 11
  },
  profileImage3Row: {
    height: 85,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 18
  },
  personDonors4: {
    width: 335,
    height: 111,
    marginTop: 17
  },
  rect4: {
    width: 335,
    height: 111,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  profileImage4: {
    width: 85,
    height: 85
  },
  image16: {
    height: 85,
    width: 85
  },
  fullName4: {
    width: 158,
    height: 26,
    marginLeft: 3
  },
  ahmadRezaA4: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 26,
    width: 158,
    fontSize: 16
  },
  address4: {
    width: 155,
    height: 17,
    flexDirection: "row",
    marginTop: 16
  },
  image17: {
    height: 16,
    width: 16
  },
  klapanunggalBogor4: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 16,
    width: 133,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 1
  },
  image17Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  fullName4Column: {
    width: 161,
    marginLeft: 19,
    marginTop: 9,
    marginBottom: 17
  },
  bloodType4: {
    width: 39,
    height: 41,
    marginTop: 18
  },
  image18: {
    height: 41,
    width: 39
  },
  image18_imageStyle: {},
  b6: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 17,
    fontSize: 12,
    marginTop: 17,
    marginLeft: 11
  },
  profileImage4Row: {
    height: 85,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 18
  }
});

export default FindDonors;
