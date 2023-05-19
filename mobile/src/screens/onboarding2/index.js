import React, {useEffect} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function Onboarding2({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.group2}>
        <View style={styles.group}>
          <Image
            source={require("../../assets/images/image_QIru..png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        <View style={styles.textLogoStack}>
          <View style={styles.textLogo}>
            <Text style={styles.postABloodRequest}>Post A Blood Request</Text>
            <Text style={styles.loremIpsum}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              tristique tristique quam in.
            </Text>
          </View>
          <Image
            source={require("../../assets/images/image_e5jk..png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
        <Text style={styles.loremIpsum2}></Text>
        <View style={styles.btnNextSkip}>
          <View style={styles.skipRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Onboarding3")}
              style={styles.skip}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Onboarding3")}
              style={styles.next}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group2: {
    width: 332,
    height: 660,
    marginTop: 112,
    marginLeft: 21
  },
  group: {
    width: 332,
    height: 243
  },
  image3: {
    height: 243,
    width: 332
  },
  textLogo: {
    top: 0,
    left: 0,
    width: 332,
    height: 164,
    position: "absolute"
  },
  postABloodRequest: {
    fontFamily: "poppins-500",
    color: "#121212",
    fontSize: 20,
    marginLeft: 61
  },
  loremIpsum: {
    fontFamily: "poppins-500",
    color: "rgba(126,126,126,1)",
    height: 119,
    width: 332,
    fontSize: 18,
    textAlign: "center",
    marginTop: 34
  },
  image4: {
    position: "absolute",
    top: 149,
    left: 146,
    height: 27,
    width: 40
  },
  textLogoStack: {
    width: 332,
    height: 176,
    marginTop: 40
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 48,
    marginLeft: 170
  },
  btnNextSkip: {
    width: 332,
    height: 30,
    flexDirection: "row",
    marginTop: 75
  },
  skip: {
    width: 40,
    height: 30
  },
  skipText: {
    fontFamily: "poppins-regular",
    color: "rgba(58,67,81,1)",
    fontSize: 20
  },
  next: {
    width: 43,
    height: 30,
    marginLeft: 249
  },
  nextText: {
    fontFamily: "poppins-regular",
    color: "rgba(255,33,86,1)",
    fontSize: 20
  },
  skipRow: {
    height: 30,
    flexDirection: "row",
    flex: 1
  }
});
