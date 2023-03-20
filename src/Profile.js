import React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function Profile() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }} showsVerticalScrollIndicator={false}>
        <Pressable
          style={[
            {
              height: screenHeight * 0.079,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              elevation: 5,
            },
            { marginBottom: screenHeight * 0.025 },
          ]}
          android_ripple={{ color: "grey" }}
        >
          <MaterialCommunityIcons
            style={{ marginHorizontal: screenWidth * 0.0574 }}
            name="account"
            size={screenHeight * 0.05}
            color={"#5D3EBB"}
          />
          <Text style={{ fontWeight: "600", flex: 0.95 }}>Login</Text>
          <Ionicons name="chevron-forward" size={24} color="#5D3EBB" />
        </Pressable>
        <View style={{ backgroundColor: "white", elevation: 5 }}>
          <Pressable
            style={[styles.container, { paddingBottom: screenHeight * 0.025 }]}
            android_ripple={{ color: "grey" }}
          >
            <Image
              source={require("../assets/mudavim.png")}
              style={styles.mudavim}
            />
            <View style={{ flex: 0.95 }}>
              <Text
                style={{
                  fontWeight: "600",
                  marginTop: screenHeight * 0.03,
                }}
              >
                {"GetirFood Müdavim"}
              </Text>
              <Text style={styles.mudavimDesc}>
                {'GetirFood users become "Müdavim" as they place an order, place 5 orders from selected ' +
                  " GetirFood Müdavim restaurants with online payment and get 50 TL discount on your 6th order. "}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={24}
              color="#5D3EBB"
              style={{ marginTop: screenHeight * 0.028 }}
            />
          </Pressable>
          <View
            style={{
              width: screenWidth * 0.9,
              borderColor: "#F4F4F6",
              borderTopWidth: 2,
              alignSelf: "center",
            }}
          />
          <Pressable
            style={styles.liveSupText}
            android_ripple={{ color: "grey" }}
          >
            <Text style={{ marginLeft: 80, fontWeight: "600", flex: 0.95 }}>
              Live Support
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#5D3EBB" />
          </Pressable>
          <View
            style={{
              width: screenWidth * 0.9,
              borderColor: "#F4F4F6",
              borderTopWidth: 2,
              alignSelf: "center",
            }}
          />
          <Pressable
            style={styles.liveSupText}
            android_ripple={{ color: "grey" }}
          >
            <Text style={{ marginLeft: 80, fontWeight: "600", flex: 0.95 }}>
              My Addresses
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#5D3EBB" />
          </Pressable>
          <View
            style={{
              width: screenWidth * 0.9,
              borderColor: "#F4F4F6",
              borderTopWidth: 2,
              alignSelf: "center",
            }}
          />
          <Pressable
            style={styles.liveSupText}
            android_ripple={{ color: "grey" }}
          >
            <Ionicons
              style={{ marginLeft: screenWidth * 0.065 }}
              name="md-help-circle-outline"
              size={35}
              color="#5D3EBB"
            />
            <Text
              style={{
                marginLeft: screenWidth * 0.055,
                fontWeight: "600",
                flex: 0.95,
              }}
            >
              Support
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#5D3EBB" />
          </Pressable>
        </View>
        <Text
          style={{
            marginLeft: screenWidth * 0.08,
            marginTop: screenHeight * 0.025,
            marginBottom: screenHeight * 0.012,
            color: "#686C77",
            fontWeight: "600",
          }}
        >
          Language
        </Text>
        <View
          style={{
            width: screenWidth * 0.9,
            borderColor: "#F4F4F6",
            borderTopWidth: 2,
            alignSelf: "center",
          }}
        />
        <Pressable
          style={[
            styles.liveSupText,
            { backgroundColor: "white", elevation: 5 },
          ]}
          android_ripple={{ color: "grey" }}
        >
          <Text
            style={{
              marginLeft: screenWidth * 0.075,
              fontWeight: "600",
              flex: 0.95,
            }}
          >
            English
          </Text>
          <Ionicons name="chevron-forward" size={24} color="#5D3EBB" />
        </Pressable>
        <Text
          style={{
            marginLeft: screenWidth * 0.08,
            marginTop: screenHeight * 0.025,
            marginBottom: screenHeight * 0.012,
            color: "#686C77",
            fontWeight: "600",
          }}
        >
          Version
        </Text>
        <View
          style={{
            width: screenWidth * 0.9,
            borderColor: "#F4F4F6",
            borderTopWidth: 2,
            alignSelf: "center",
          }}
        />
        <Pressable
          style={[
            styles.liveSupText,
            { backgroundColor: "white", elevation: 5 },
          ]}
          android_ripple={{ color: "grey" }}
        >
          <Text
            style={{
              marginLeft: screenWidth * 0.075,
              fontWeight: "600",
            }}
          >
            2.16.6
          </Text>
        </Pressable>
        <View style={{height : screenHeight * 0.05}} />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  mudavim: {
    height: screenHeight * 0.05,
    width: screenWidth * 0.095,
    resizeMode: "contain",
    marginTop: screenHeight * 0.025,
    marginHorizontal: screenWidth * 0.064,
  },

  mudavimDesc: {
    fontSize: 11,
    color: "#6E727B",
    marginRight: screenWidth * 0.03,
    marginTop: screenHeight * 0.008,
    paddingBottom: screenHeight * 0.028,
    textAlign: "left",
    textAlignVertical: "center",
  },

  liveSupText: {
    flexDirection: "row",
    height: screenHeight * 0.079,
    alignItems : "center",
  },
});