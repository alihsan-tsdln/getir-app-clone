import React from "react";
import { View, Text, Image } from "react-native";

export default function AddCuisines({ name, image, styles }) {
  return (
    <View style={styles.cuisinesRect}>
      <Image source={image} style={styles.cuisinesImg} />
      <Text style={styles.cuisinesText}>{name}</Text>
    </View>
  );
}
