import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  ScrollView
} from "react-native";

function DonorsDetail(navigation) {
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
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.personDonors}>
              <View style={styles.rect}>
                <View style={styles.profileImageRow}>
                  <View style={styles.profileImage}>
                    <Image
                      source={require("../../assets/images/image_mfq7..png")}
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
                          Klapanunggal, Bogor
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
                      <Text style={styles.b2}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.personDonors1}>
              <View style={styles.rect1}>
                <View style={styles.profileImage1Row}>
                  <View style={styles.profileImage1}>
                    <Image
                      source={require("../../assets/images/image_mfq7..png")}
                      resizeMode="contain"
                      style={styles.image7}
                    ></Image>
                  </View>
                  <View style={styles.fullName1Column}>
                    <View style={styles.fullName1}>
                      <Text style={styles.ahmadRezaA1}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.address1}>
                      <View style={styles.image8Row}>
                        <Image
                          source={require("../../assets/images/image_y95K..png")}
                          resizeMode="contain"
                          style={styles.image8}
                        ></Image>
                        <Text style={styles.klapanunggalBogor1}>
                          Klapanunggal, Bogor
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bloodType1}>
                    <ImageBackground
                      source={require("../../assets/images/image_cl5X..png")}
                      resizeMode="contain"
                      style={styles.image9}
                      imageStyle={styles.image9_imageStyle}
                    >
                      <Text style={styles.b3}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.personDonors2}>
              <View style={styles.rect2}>
                <View style={styles.profileImage2Row}>
                  <View style={styles.profileImage2}>
                    <Image
                      source={require("../../assets/images/image_mfq7..png")}
                      resizeMode="contain"
                      style={styles.image10}
                    ></Image>
                  </View>
                  <View style={styles.fullName2Column}>
                    <View style={styles.fullName2}>
                      <Text style={styles.ahmadRezaA2}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.address2}>
                      <View style={styles.image11Row}>
                        <Image
                          source={require("../../assets/images/image_y95K..png")}
                          resizeMode="contain"
                          style={styles.image11}
                        ></Image>
                        <Text style={styles.klapanunggalBogor2}>
                          Klapanunggal, Bogor
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bloodType2}>
                    <ImageBackground
                      source={require("../../assets/images/image_cl5X..png")}
                      resizeMode="contain"
                      style={styles.image12}
                      imageStyle={styles.image12_imageStyle}
                    >
                      <Text style={styles.b4}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.personDonors3}>
              <View style={styles.rect3}>
                <View style={styles.profileImage3Row}>
                  <View style={styles.profileImage3}>
                    <Image
                      source={require("../../assets/images/image_mfq7..png")}
                      resizeMode="contain"
                      style={styles.image13}
                    ></Image>
                  </View>
                  <View style={styles.fullName3Column}>
                    <View style={styles.fullName3}>
                      <Text style={styles.ahmadRezaA3}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.address3}>
                      <View style={styles.image14Row}>
                        <Image
                          source={require("../../assets/images/image_y95K..png")}
                          resizeMode="contain"
                          style={styles.image14}
                        ></Image>
                        <Text style={styles.klapanunggalBogor3}>
                          Klapanunggal, Bogor
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bloodType3}>
                    <ImageBackground
                      source={require("../../assets/images/image_cl5X..png")}
                      resizeMode="contain"
                      style={styles.image15}
                      imageStyle={styles.image15_imageStyle}
                    >
                      <Text style={styles.b5}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.personDonors4}>
              <View style={styles.rect4}>
                <View style={styles.profileImage4Row}>
                  <View style={styles.profileImage4}>
                    <Image
                      source={require("../../assets/images/image_mfq7..png")}
                      resizeMode="contain"
                      style={styles.image16}
                    ></Image>
                  </View>
                  <View style={styles.fullName4Column}>
                    <View style={styles.fullName4}>
                      <Text style={styles.ahmadRezaA4}>Ahmad Reza A</Text>
                    </View>
                    <View style={styles.address4}>
                      <View style={styles.image17Row}>
                        <Image
                          source={require("../../assets/images/image_y95K..png")}
                          resizeMode="contain"
                          style={styles.image17}
                        ></Image>
                        <Text style={styles.klapanunggalBogor4}>
                          Klapanunggal, Bogor
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bloodType4}>
                    <ImageBackground
                      source={require("../../assets/images/image_cl5X..png")}
                      resizeMode="contain"
                      style={styles.image18}
                      imageStyle={styles.image18_imageStyle}
                    >
                      <Text style={styles.b6}>B+</Text>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.popUpDonorDetail}>
          <View style={styles.rect5Stack}>
            <View style={styles.rect5}>
              <View style={styles.fullNameTittleStack}>
                <View style={styles.fullNameTittle}>
                  <Text style={styles.mohammedSami}>Mohammed Sami</Text>
                </View>
                <View style={styles.address5}>
                  <View style={styles.image20Row}>
                    <Image
                      source={require("../../assets/images/image_y95K..png")}
                      resizeMode="contain"
                      style={styles.image20}
                    ></Image>
                    <Text style={styles.klapanunggalBogor5}>
                      Klapanunggal, Bogor
                    </Text>
                  </View>
                </View>
                <View style={styles.group3}>
                  <View style={styles.image23Stack}>
                    <Image
                      source={require("../../assets/images/image_yhNO..png")}
                      resizeMode="contain"
                      style={styles.image23}
                    ></Image>
                    <View style={styles.group}>
                      <View style={styles.timesDonatedStack}>
                        <Text style={styles.timesDonated}>Times Donated</Text>
                        <Text style={styles.loremIpsum2}>6</Text>
                      </View>
                    </View>
                    <View style={styles.group2}>
                      <View style={styles.abStack}>
                        <Text style={styles.ab}>AB+</Text>
                        <Text style={styles.bloodType6}>Blood Type -</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.profileimg}>
              <ImageBackground
                source={require("../../assets/images/image_TZ4A..png")}
                resizeMode="contain"
                style={styles.image21}
                imageStyle={styles.image21_imageStyle}
              >
                <Image
                  source={require("../../assets/images/image_UB3a..png")}
                  resizeMode="contain"
                  style={styles.image22}
                ></Image>
              </ImageBackground>
            </View>
          </View>
        </View>
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
    height: 28,
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
    marginTop: -80,
    marginLeft: 1
  },
  scrollArea: {
    top: 24,
    left: 19,
    width: 335,
    height: 558,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 607,
    width: 335
  },
  personDonors: {
    width: 335,
    height: 111
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
  },
  popUpDonorDetail: {
    top: 0,
    left: 0,
    width: 375,
    height: 621,
    position: "absolute"
  },
  rect5: {
    top: 67,
    left: 0,
    width: 375,
    height: 554,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  fullNameTittle: {
    top: 7,
    left: 0,
    width: 352,
    height: 43,
    position: "absolute"
  },
  mohammedSami: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 43,
    width: 352,
    fontSize: 22,
    textAlign: "center",
    letterSpacing: 0
  },
  address5: {
    top: 41,
    left: 111,
    width: 240,
    height: 17,
    position: "absolute",
    flexDirection: "row"
  },
  image20: {
    height: 16,
    width: 16
  },
  klapanunggalBogor5: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 16,
    width: 133,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 1
  },
  image20Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 85
  },
  group3: {
    top: 0,
    left: 7,
    width: 331,
    height: 200,
    position: "absolute"
  },
  image23: {
    position: "absolute",
    top: 0,
    left: 41,
    height: 200,
    width: 249
  },
  group: {
    top: 122,
    left: 0,
    width: 124,
    height: 25,
    position: "absolute"
  },
  timesDonated: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 25,
    width: 121,
    textAlign: "right"
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 22,
    width: 16
  },
  timesDonatedStack: {
    width: 123,
    height: 25
  },
  group2: {
    top: 121,
    left: 209,
    width: 122,
    height: 25,
    position: "absolute"
  },
  ab: {
    top: 2,
    left: 91,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "rgba(255,33,86,1)",
    height: 21,
    width: 31
  },
  bloodType6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 25,
    width: 121,
    textAlign: "left"
  },
  abStack: {
    width: 122,
    height: 25
  },
  image23Stack: {
    width: 331,
    height: 200
  },
  fullNameTittleStack: {
    width: 352,
    height: 200,
    marginTop: 63,
    marginLeft: 11
  },
  profileimg: {
    top: 0,
    left: 122,
    width: 130,
    height: 130,
    position: "absolute"
  },
  image21: {
    height: 130,
    width: 130
  },
  image21_imageStyle: {},
  image22: {
    height: 120,
    width: 120,
    marginTop: 5,
    marginLeft: 5
  },
  rect5Stack: {
    width: 375,
    height: 621
  },
  scrollAreaStack: {
    width: 375,
    height: 621,
    marginTop: 1,
    marginLeft: 1
  }
});

export default DonorsDetail;
