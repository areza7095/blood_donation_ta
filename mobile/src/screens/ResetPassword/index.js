import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function ResetPassword(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.emailInput}>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
            <Icon name="mail" style={styles.icon}></Icon>
            <View style={styles.rect2}></View>
            <TextInput placeholder="Email" style={styles.email}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.resetBtn}>
        <View style={styles.recReset}>
          <Text style={styles.send}>Send</Text>
        </View>
      </View>
      <Text style={styles.loremIpsum}>
        Your password reset will be send in your registered email address.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emailInput: {
    width: 314,
    height: 65,
    marginTop: 301,
    marginLeft: 31
  },
  rect: {
    width: 314,
    height: 65,
    backgroundColor: "rgba(248,248,248,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,33,86,1)",
    fontSize: 34,
    height: 34,
    width: 34,
    marginTop: 2
  },
  rect2: {
    width: 1,
    height: 49,
    backgroundColor: "#E6E6E6",
    marginLeft: 19
  },
  email: {
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 47,
    width: 204,
    marginLeft: 18,
    marginTop: 2
  },
  iconRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 22,
    marginLeft: 16,
    marginTop: 10
  },
  resetBtn: {
    width: 306,
    height: 61,
    marginTop: 100,
    marginLeft: 35
  },
  recReset: {
    width: 306,
    height: 61,
    backgroundColor: "rgba(255,33,86,1)",
    borderRadius: 30
  },
  send: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    height: 29,
    width: 62,
    fontSize: 22,
    marginTop: 16,
    marginLeft: 122
  },
  loremIpsum: {
    fontFamily: "poppins-regular",
    color: "rgba(126,126,126,1)",
    height: 50,
    width: 314,
    fontSize: 16,
    textAlign: "center",
    marginTop: -129,
    marginLeft: 31
  }
});

export default ResetPassword;
