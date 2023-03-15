import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions, Image } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function AddChain({text, image}) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.chainContainer}>
          <Image source={image} style={styles.logo} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  chainContainer: {
    flexDirection: "row",
    height: screenHeight / 20,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F3F2F7",
    paddingLeft : screenWidth / 80,
  },

  container: {
    justifyContent: "center",
    paddingRight: (screenWidth * 3) / 100,
  },

  text: {
    paddingHorizontal: (screenWidth * 2) / 100,
    color: "#5F3FBC",
    fontSize: 13,
    fontWeight: "500",
    textAlign : "center",
    alignSelf : "center",
  },

  logo : {
    height : screenHeight / 25,
    width : screenWidth * 8 / 100,
    resizeMode : "contain",
    alignSelf : "center",
  },
});