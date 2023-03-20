import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Octicons } from "@expo/vector-icons"; 

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function AddLocation() {

    return (
      <>
        <View style={styles.selectContainer}>
          <Text style={styles.selectText}>
            {"Select your delivery location"}
          </Text>
          <Octicons name="location" size={24} color="#5D3EBD" />
          <Text style={styles.myAdressText}>{"My Adresses"}</Text>
        </View>
        <View style={styles.locationsContainer}></View>
      </>
    );
}

const styles = StyleSheet.create({
  selectText: {
    color: "#6C7385",
    fontSize: 15,
    paddingRight: screenWidth / 20,
  },

  selectContainer: {
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: screenHeight / 70,
  },

  myAdressText: {
    color: "#5D3EBD",
    textDecorationLine: "underline",
    paddingHorizontal: screenWidth / 40,
    fontWeight : "600"
  },

  locationsContainer: {
    height: screenHeight * 0.09,
    width : screenWidth * 0.91,
    alignSelf: "center",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: screenHeight / 60,
    borderColor: "#F5F4F9",
  },
});