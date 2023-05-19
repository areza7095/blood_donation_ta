import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

function Report(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <View style={styles.image1Row}>
          <Image
            source={require("../../assets/images/image_pz9s..png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.text2}>Report</Text>
        </View>
      </View>
      <Image
        source={require("../../assets/images/image_HYEL..png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <Text style={styles.text}>Dhaka Medical College, Dhaka.</Text>
      <View style={styles.image3Stack}>
        <Image
          source={require("../../assets/images/image_tuke..png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <ImageBackground
          source={require("../../assets/images/image_gv3f..png")}
          resizeMode="contain"
          style={styles.image4}
          imageStyle={styles.image4_imageStyle}
        >
          <View style={styles.group4Row}>
            <View style={styles.group4}>
              <View style={styles.mmolL2Stack}>
                <Text style={styles.mmolL2}>mmol/L</Text>
                <Text style={styles.bL6}>6.2</Text>
              </View>
            </View>
            <View style={styles.group3}>
              <View style={styles.mmolL1Stack}>
                <Text style={styles.mmolL1}>mmol/L</Text>
                <Text style={styles.bL5}>6</Text>
              </View>
            </View>
            <View style={styles.group2}>
              <View style={styles.mmolLStack}>
                <Text style={styles.mmolL}>mmol/L</Text>
                <Text style={styles.bL4}>12</Text>
              </View>
            </View>
          </View>
          <View style={styles.glucoseRow}>
            <Text style={styles.glucose}>Glucose</Text>
            <Text style={styles.cholesterol}>Cholesterol</Text>
            <Text style={styles.bilirubin}>Bilirubin</Text>
          </View>
          <View style={styles.group5Row}>
            <View style={styles.group5}>
              <View style={styles.mlLStack}>
                <Text style={styles.mlL}>ml/L</Text>
                <Text style={styles.bL7}>3.6</Text>
              </View>
            </View>
            <View style={styles.group1}>
              <View style={styles.flStack}>
                <Text style={styles.fl}>fl</Text>
                <Text style={styles.bL3}>276</Text>
              </View>
            </View>
            <View style={styles.group}>
              <View style={styles.bLStack}>
                <Text style={styles.bL}>bL</Text>
                <Text style={styles.bL1}>276</Text>
              </View>
            </View>
          </View>
          <View style={styles.rbcRow}>
            <Text style={styles.rbc}>RBC</Text>
            <Text style={styles.mcv}>MCV</Text>
            <Text style={styles.platelets}>Platelets</Text>
          </View>
        </ImageBackground>
      </View>
      <Image
        source={require("../../assets/images/image_Bv5t..png")}
        resizeMode="contain"
        style={styles.image5}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backBtn: {
    width: 318,
    height: 44,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 33
  },
  image1: {
    height: 44,
    width: 44
  },
  text2: {
    fontFamily: "poppins-500",
    color: "rgba(39,42,47,1)",
    height: 29,
    width: 88,
    fontSize: 18,
    textAlign: "center",
    marginLeft: 67,
    marginTop: 8
  },
  image1Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 119
  },
  image2: {
    height: 17,
    width: 136,
    marginTop: 29,
    marginLeft: 117
  },
  text: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    fontSize: 12,
    marginTop: 7,
    marginLeft: 98
  },
  image3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 266,
    width: 288
  },
  image4: {
    position: "absolute",
    top: 250,
    left: 3,
    height: 225,
    width: 358
  },
  image4_imageStyle: {},
  group4: {
    width: 69,
    height: 31
  },
  mmolL2: {
    top: 9,
    left: 4,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 22,
    width: 69,
    textAlign: "right",
    fontSize: 10
  },
  bL6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 31,
    width: 29,
    textAlign: "right",
    fontSize: 20
  },
  mmolL2Stack: {
    width: 73,
    height: 31,
    marginLeft: -4
  },
  group3: {
    width: 69,
    height: 31,
    marginLeft: 37
  },
  mmolL1: {
    top: 9,
    left: 7,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 22,
    width: 69,
    textAlign: "right",
    fontSize: 10
  },
  bL5: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 31,
    width: 32,
    textAlign: "right",
    fontSize: 20
  },
  mmolL1Stack: {
    width: 76,
    height: 31,
    marginLeft: -7
  },
  group2: {
    width: 69,
    height: 31,
    marginLeft: 40
  },
  mmolL: {
    top: 9,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 22,
    width: 69,
    textAlign: "right",
    fontSize: 10
  },
  bL4: {
    top: 0,
    left: 5,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 31,
    width: 20,
    textAlign: "right",
    fontSize: 20
  },
  mmolLStack: {
    width: 69,
    height: 31
  },
  group4Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 38,
    marginRight: 36
  },
  glucose: {
    fontFamily: "poppins-500",
    color: "rgba(177,177,177,1)",
    height: 15,
    width: 60
  },
  cholesterol: {
    fontFamily: "poppins-500",
    color: "rgba(177,177,177,1)",
    height: 15,
    width: 83,
    marginLeft: 40
  },
  bilirubin: {
    fontFamily: "poppins-500",
    color: "rgba(177,177,177,1)",
    height: 15,
    width: 60,
    marginLeft: 40
  },
  glucoseRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 38,
    marginRight: 37
  },
  group5: {
    width: 61,
    height: 31
  },
  mlL: {
    top: 9,
    left: 32,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 22,
    width: 45,
    textAlign: "right",
    fontSize: 10
  },
  bL7: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 31,
    width: 50,
    textAlign: "right",
    fontSize: 20
  },
  mlLStack: {
    width: 77,
    height: 31,
    marginLeft: -11
  },
  group1: {
    width: 61,
    height: 31,
    marginLeft: 50
  },
  fl: {
    top: 11,
    left: 15,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 22,
    width: 45,
    textAlign: "right",
    fontSize: 10
  },
  bL3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 31,
    width: 50,
    textAlign: "right",
    fontSize: 20
  },
  flStack: {
    width: 60,
    height: 33,
    marginTop: -2,
    marginLeft: -2
  },
  group: {
    width: 66,
    height: 31,
    marginLeft: 47
  },
  bL: {
    top: 11,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 22,
    width: 57,
    textAlign: "right",
    fontSize: 10,
    left: 7
  },
  bL1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "#121212",
    height: 31,
    width: 50,
    textAlign: "right",
    fontSize: 20
  },
  bLStack: {
    width: 64,
    height: 33,
    marginTop: -2,
    marginLeft: -2
  },
  group5Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 36,
    marginRight: 37
  },
  rbc: {
    fontFamily: "poppins-500",
    color: "rgba(177,177,177,1)",
    height: 15,
    width: 30
  },
  mcv: {
    fontFamily: "poppins-500",
    color: "rgba(177,177,177,1)",
    height: 15,
    width: 33,
    marginLeft: 79
  },
  platelets: {
    fontFamily: "poppins-500",
    color: "rgba(177,177,177,1)",
    height: 15,
    width: 61,
    marginLeft: 65
  },
  rbcRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 53,
    marginRight: 37
  },
  image3Stack: {
    width: 361,
    height: 475,
    marginTop: 21,
    marginLeft: 6
  },
  image5: {
    height: 44,
    width: 188,
    marginTop: 29,
    marginLeft: 94
  }
});

export default Report;
