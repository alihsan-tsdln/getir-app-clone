import React, { useState } from "react";

import HeartBef from "../assets/heartBef.png";
import HeartAft from "../assets/heartAft.png";

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";

export default function AddRestaurant({
  name,
  image,
  minute,
  price,
  starPoint,
  starCount,
  styles,
}) {
  const [heart, setHeart] = useState(true);
  const changeHeart = () => setHeart((previousState) => !previousState);

  return (
    <View style={styles.restorantRect}>
      <Image source={image} style={styles.restorantImg} />
      <Text
        style={styles.restorantText}
        numberOfLines={1}
        ellipsizeMode={"tail"}
      >
        {name}
      </Text>
      <View style={styles.containTail}>
        <View style={styles.circleContainer}>
          <Text style={{ color: "white", fontSize: 12 }}>{"R"}</Text>
        </View>
        <Text style={styles.minuteText}>
          {minute + " min \u2022  \u20BA" + price}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={changeHeart}>
        <Image
          style={styles.heart}
          source={heart ? HeartBef : HeartAft}
        />
      </TouchableWithoutFeedback>
      <View style={styles.starContain}>
        <Image
          source={require("../assets/restaurants/star.jpg")}
          style={styles.starImg}
        />
        <Text style={styles.starPointText}>{starPoint}</Text>
        <Text style={styles.starCountText}>{starCount}</Text>
      </View>
    </View>
  );
}
