import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons"; 

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
        <View style={styles.locationsContainer}>
          <View style={styles.circle} />
          <View
            style={{
              justifyContent: "center",
              paddingLeft: screenWidth * 0.05,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/yasIcon.png")}
                style={styles.yasIcon}
              />
              <Text style={{ fontWeight: "600", fontSize: 14 }}>
                {"Earthquake Aid - Virtual Warehouse"}
              </Text>
            </View>
            <Text style={{ color: "#595F6B", fontSize: 13 }}>
              {"Address created for earthquake aid."}
            </Text>
          </View>
        </View>
        <View style={styles.addLocationContainer}>
          <FontAwesome5
            name="plus"
            size={screenHeight * 0.0166}
            color="#5D3EBD"
          />
          <View style={styles.stick} />
          <Text style={{ color: "#5D3EBD", fontWeight: "600" }}>
            {"Add New Address"}
          </Text>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  selectText: {
    color: "#595F6B",
    fontSize: 14,
    fontWeight: "600",
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
    fontWeight: "700",
  },

  locationsContainer: {
    height: screenHeight * 0.09,
    width: screenWidth * 0.91,
    alignSelf: "center",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: screenHeight / 60,
    borderColor: "#F5F4F9",
    flexDirection: "row",
  },

  circle: {
    borderRadius: 50,
    backgroundColor: "white",
    elevation: 8,
    height: screenHeight * 0.03,
    width: screenHeight * 0.03,
    alignSelf: "center",
    marginLeft: screenWidth / 100,
  },

  yasIcon: {
    height: screenHeight / 40,
    width: screenWidth * 0.03,
    resizeMode: "contain",
    marginHorizontal: screenWidth / 50,
  },

  addLocationContainer: {
    paddingLeft: screenWidth / 17,
    marginTop: screenHeight * 0.015,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom : screenHeight * 0.0615,
  },

  stick: {
    height: screenHeight * 0.04,
    width: screenWidth * 0.005,
    borderRadius: 50,
    backgroundColor: "#F6F5FD",
    marginHorizontal: screenWidth * 0.035,
  },
});