import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function GetirBottom() {

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            height : screenHeight * 7 / 100,
            width : screenWidth,
            backgroundColor : "white",
            top : screenHeight * 93 / 100,
        },
    });

    return (
        <View style={styles.container}></View>
    );
}