import React from "react";
import { View, Text, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Mudavim() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Text
        style={{
          color: "#61687A",
          fontWeight: "600",
          fontSize: 14,
          marginTop: screenHeight * 0.02,
          marginLeft: screenWidth * 0.04,
        }}
      >
        All Loyalty Promos
      </Text>
    </View>
  );
}
