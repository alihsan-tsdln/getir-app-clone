import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  Button
} from "react-native";

import { Entypo } from "@expo/vector-icons"; 

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function GetirTop({button}) {
  return (
    <>
      <View style={styles.adressEtaView}>
        <Pressable
          style={styles.adressRect}
          onPress={button}
          android_ripple={{ color: "grey" }}
        >
          <>
            <Text style={styles.adressText}>Select Delivery Address</Text>
            <Entypo name="chevron-down" size={24} color="#5D3EBD" style={{
              alignSelf : "center",
              left : screenWidth / 5.5,
            }} />
          </>
        </Pressable>
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
    width : screenWidth / 1.45,
    backgroundColor: "white",
    borderRadius: 12,
    shadowOpacity: 25,
    elevation: 12,
    //justifyContent : "center",
    textAlign: "center",
    flexDirection: "row",
  },

  adressText: {
    fontFamily: "Alfabetica-SemiBold",
    //fontWeight : "500",
    left: (screenWidth * 7) / 100,
    fontSize: 15,
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
