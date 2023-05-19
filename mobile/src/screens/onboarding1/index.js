import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function Onboarding1({navigation}) {
  const handleNext = () => {
    navigation.replace('Onboarding2');
  }

  const handleSkip = () => {
    navigation.replace('Onboarding3');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.mainLogo}>
          <View style={styles.logo}>
            <Image
              source={require("../../assets/images/image_y3wc.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.textLogoStack}>
            <View style={styles.textLogo}>
              <Text style={styles.findBloodDonors}>Find Blood Donors</Text>
              <Text style={styles.loremIpsum}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                tristique tristique quam in.
              </Text>
            </View>
            <View style={styles.sliderLogo}>
              <Image
                source={require("../../assets/images/image_g1pw..png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.btnNextSkip}>
          <View style={styles.skipRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Onboarding3")}
              style={styles.skip}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Onboarding2")}
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
    screen: {
      width: 332,
      height: 644,
      marginTop: 127,
      alignSelf: "center"
    },
    mainLogo: {
      width: 332,
      height: 448
    },
    logo: {
      width: 200,
      height: 200,
      marginLeft: 66
    },
    image: {
      height: 200,
      width: 200
    },
    textLogo: {
      top: 0,
      left: 0,
      width: 332,
      height: 164,
      position: "absolute"
    },
    findBloodDonors: {
      fontFamily: "poppins-500",
      color: "#121212",
      fontSize: 20,
      marginLeft: 76
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
    sliderLogo: {
      top: 151,
      left: 146,
      width: 40,
      height: 27,
      position: "absolute"
    },
    image2: {
      height: 27,
      width: 40
    },
    textLogoStack: {
      width: 332,
      height: 178,
      marginTop: 66
    },
    btnNextSkip: {
      width: 332,
      height: 30,
      flexDirection: "row",
      marginTop: 137
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
