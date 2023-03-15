import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, Text, View } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function AddPopularSearch({text}) {
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    paddingRight: (screenWidth * 3) / 100,
  },

  textContainer: {
    height: screenHeight / 25,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F3F2F7",
  },

  text: {
    paddingHorizontal: (screenWidth * 2) / 100,
    color : "#5F3FBC",
    fontSize : 13,
    fontWeight : "500"
  },
});