import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function SuccessCreateRequest(props) {
  return (
    <View style={styles.container}>
      <View style={styles.back1}>
        <View style={styles.image1Row}>
          <Image
            source={require("../../assets/images/image_pz9s..png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.text1}>Create A Request</Text>
        </View>
      </View>
      <View style={styles.reqBtn1Stack}>
        <View style={styles.reqBtn1}>
          <Image
            source={require("../../assets/images/image_bofV..png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.popUpSuccess}>
          <View style={styles.rect}>
            <View style={styles.insidePopUp}>
              <Image
                source={require("../../assets/images/image_HSKC..png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <View style={styles.loremIpsumStack}>
                <Text style={styles.loremIpsum}>
                  Blood is successfully requested.
                </Text>
                <View style={styles.btnBack}>
                  <Image
                    source={require("../../assets/images/image_ZIzn..png")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
              </View>
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
    backgroundColor: "rgba(38,50,56,0.5)"
  },
  back1: {
    width: 245,
    height: 44,
    flexDirection: "row",
    marginTop: 68,
    marginLeft: 33
  },
  image1: {
    height: 44,
    width: 44,
    backgroundColor: "rgba(255,255,255,1)"
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
    flex: 1
  },
  reqBtn1: {
    top: 419,
    left: 76,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2: {
    height: 200,
    width: 200
  },
  popUpSuccess: {
    top: 0,
    left: 0,
    width: 352,
    height: 451,
    position: "absolute"
  },
  rect: {
    width: 352,
    height: 451,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20
  },
  insidePopUp: {
    width: 295,
    height: 417,
    marginTop: 10,
    marginLeft: 28
  },
  image3: {
    height: 268,
    width: 295
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(124,124,124,1)",
    height: 94,
    width: 192,
    fontSize: 18,
    textAlign: "center"
  },
  btnBack: {
    top: 81,
    left: 69,
    width: 45,
    height: 45,
    position: "absolute"
  },
  image4: {
    height: 45,
    width: 45
  },
  loremIpsumStack: {
    width: 192,
    height: 126,
    marginTop: 23,
    marginLeft: 56
  },
  reqBtn1Stack: {
    width: 352,
    height: 619,
    marginTop: 27,
    marginLeft: 12
  }
});

export default SuccessCreateRequest;
