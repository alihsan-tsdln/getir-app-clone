import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function View1Button() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      left: (screenWidth * 75) / 97.5,
      top: (screenHeight * 7) / 211,
      height: (screenHeight * 1.5) / 422,
      position: "absolute",
    },
    view1Button: {
      width: (screenWidth * 40) / 195,
    },

    font: {
      fontSize: 13,
      alignSelf: "center",
      textAlign: "center",
      top: -screenHeight / 780,
      fontWeight: "700",
      opacity: 0.5,
    },

    rows: {
      width: (screenWidth * 12) / 195,
      height: (screenHeight * 1.5) / 422,
      marginBottom: (screenHeight * 1.5) / 422,
      backgroundColor: "#5F3FBC",
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ height: 1000 }}>
        <Text style={styles.font}>{"View  "}</Text>
      </View>
      <View style={styles.view1Button}>
        <View style={styles.rows} />
        <View style={styles.rows} />
        <View style={styles.rows} />
        <View style={styles.rows} />
      </View>
    </View>
  );
}
