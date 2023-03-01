import HeartBef from "../assets/heartBef.png";
import HeartAft from "../assets/heartAft.png";

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function AddEarthquakeAid({ name, image, styles }) {
  const [heart, setHeart] = useState(true);
  const changeHeart = () => setHeart((previousState) => !previousState);

  return (
    <View style={styles.emergencyRect}>
      <Image source={image} style={styles.emergencyImg}></Image>
      <View style={styles.emergencyTextContain}>
        <Text style={styles.emergencyText}>{name}</Text>
      </View>
      <View style={styles.dotShadow} />
      <TouchableWithoutFeedback onPress={changeHeart}>
        <Image source={heart ? HeartBef : HeartAft} style={[styles.heart, {top : screenHeight / 65, left : screenWidth / 1.17}]} />
      </TouchableWithoutFeedback>
    </View>
  );
}
