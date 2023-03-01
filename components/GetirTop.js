import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function GetirTop() {
  return (
    <>
      <View style={styles.getirTop}>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <Text>{screenHeight + " X "}</Text>
          <Text>{screenWidth}</Text>
        </View>
      </View>
      <View style={styles.adressEtaView}>
        <View style={styles.adressRect}>
          <Text style={styles.adressText}>Select Delivery Address</Text>
          <Image
            source={require("../assets/konumOk.jpg")}
            style={{
              height: screenHeight / 70,
              resizeMode: "contain",
              alignSelf: "center",
              left: screenWidth / 6,
            }}
          />
        </View>
        <View
          style={{
            width: (screenWidth * 7.5) / 25,
            justifyContent: "center",
          }}
        >
          <Text style={styles.etaText}>ETA</Text>
          <Text style={[styles.etaText, { fontSize: 15 }]}>10-75 min</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  getirTop: {
    height: (screenHeight * 4.2) / 41,
    width: screenWidth,
    backgroundColor: "#5D3EBD",
    alignItems: "center",
  },

  adressEtaView: {
    height: screenHeight / 13.5,
    width: screenWidth,
    backgroundColor: "#FFD10C",
    flexDirection: "row",
  },

  adressRect: {
    left: -screenWidth / 50,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    shadowOpacity: 25,
    elevation: 12,
    //justifyContent : "center",
    textAlign: "center",
    flexDirection: "row",
  },

  adressText: {
    left: (screenWidth * 7) / 100,
    fontSize: 14,
    alignSelf: "center",
  },

  etaText: {
    fontSize: 13,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",

    color: "#5D3EBD",
  },
});
