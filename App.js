import GetirFood from "./src/GetirFood";
import Search from "./src/Search";
import Profile from "./src/Profile";

import React, { useRef, useMemo, useState } from "react";

import { Image, View, Dimensions, Text, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

import Animated, {
  useAnimatedStyle,
} from "react-native-reanimated";

import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AddLocation from "./components/AddLocation";
import { StatusBar } from "expo-status-bar";
import Prize from "./src/Prize";

const Tab = createBottomTabNavigator();
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function App() {

  const bottomSheetRef = useRef(null);
  const [statusBarColor, setStatusBarColor] = useState("#442D87");

  const handleBottomSheet = () => {
    setStatusBarColor("#1C1235");
    bottomSheetRef.current?.present();
  };

  const StyledBackdrop = ({ style }) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: 0.5,
    }));

    // styles
    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: "black",
        },
        containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle]
    );

    return (
      <AnimatedTouchable
        style={containerStyle}
        onPress={() => {
          bottomSheetRef.current?.close();
          setStatusBarColor("#442D87");
        }}
      />
    );
  };

  const snapPoints = [screenHeight * 0.3];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar style="light" translucent backgroundColor={statusBarColor} />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              title: "",

              tabBarActiveTintColor: "#5F3FBC",

              tabBarStyle: {
                backgroundColor: "white",
                height: (screenHeight * 7) / 100,
              }
            })}
          >
            <Tab.Screen
              name="Home"
              options={{
                header: () => (
                  <View style={{ backgroundColor: "#5F3FBC" }}>
                    <Image
                      source={require("./assets/getirFoodLogo.jpg")}
                      style={{
                        width: screenWidth * 0.29,
                        height: screenHeight / 10,
                        alignSelf: "center",
                        resizeMode: "contain",
                        top: screenHeight / 65,
                      }}
                    />
                  </View>
                ),
                tabBarIcon: ({ color, size }) => {
                  return (
                    <Entypo
                      style={{ top: 7 }}
                      name={"home"}
                      color={color}
                      size={size * 1.1}
                    />
                  );
                },
              }}
              children={() => {
                return <GetirFood button={handleBottomSheet} />;
              }}
            />
            <Tab.Screen
              options={{
                header: () => (
                  <View
                    style={{
                      backgroundColor: "#5F3FBC",
                      height: screenHeight / 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        top: 10,
                        color: "white",
                        fontWeight: "500",
                        fontSize: 14,
                      }}
                    >
                      Search
                    </Text>
                  </View>
                ),

                tabBarIcon: ({ color, size }) => {
                  return (
                    <FontAwesome
                      style={{ top: 7 }}
                      name="search"
                      size={size * 1.1}
                      color={color}
                    />
                  );
                },
              }}
              name="Search"
              component={Search}
            />
            <Tab.Screen
              options={{
                header: () => (
                  <View
                    style={{
                      backgroundColor: "#5F3FBC",
                      height: screenHeight / 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        top: 10,
                        color: "white",
                        fontWeight: "500",
                        fontSize: 14,
                      }}
                    >
                      Profile
                    </Text>
                  </View>
                ),
                tabBarIcon: ({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      style={{ top: 7 }}
                      name="account"
                      size={size * 1.4}
                      color={color}
                    />
                  );
                },
              }}
              name="Profile"
              component={Profile}
            />
            <Tab.Screen
              options={{
                header: () => (
                  <View style={{ backgroundColor: "#5F3FBC" }}>
                    <Image
                      source={require("./assets/getirFoodLogo.jpg")}
                      style={{
                        width: screenWidth * 0.29,
                        height: screenHeight / 10,
                        alignSelf: "center",
                        resizeMode: "contain",
                        top: screenHeight / 65,
                      }}
                    />
                  </View>
                ),
                tabBarIcon: ({ color, size }) => {
                  return (
                    <FontAwesome5
                      style={{ top: 7 }}
                      name="gift"
                      size={size}
                      color={color}
                    />
                  );
                },
              }}
              name="Prize"
              component={Prize}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          backdropComponent={StyledBackdrop}
          onDismiss={() => setStatusBarColor("#442D87")}
        >
          <AddLocation />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
