import GetirFood from "./src/GetirFood";
import Search from "./src/Search";

import { Image, View, Dimensions, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  return (
    <View style={{height : screenHeight, width : screenWidth}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            title: "",

            tabBarActiveTintColor: "#5F3FBC",

            tabBarStyle: {
              backgroundColor: "white",
              height: (screenHeight * 7) / 100,
            },

            tabBarIcon: ({ color, size }) => {
              if (route.name === "Account") {
                return (
                  <MaterialCommunityIcons
                    style={{ top: 7 }}
                    name="account"
                    size={size * 1.4}
                    color={color}
                  />
                );
              } else if (route.name === "Prize") {
                return (
                  <FontAwesome5
                    style={{ top: 7 }}
                    name="gift"
                    size={size}
                    color={color}
                  />
                );
              }
            },
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
            component={GetirFood}
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
          <Tab.Screen name="Account" component={GetirFood} />
          <Tab.Screen name="Prize" component={GetirFood} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
