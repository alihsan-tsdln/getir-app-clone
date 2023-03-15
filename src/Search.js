import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TextInput, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; 
import AddPopularSearch from "../components/AddPopularSearch";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const popularList = [
    "donas",
    "dürüm",
    "çiğ köfte",
    "pizza",
    "lahmacun",
    "waffle",
    "köfte",
    "pasta tatlı",
    "burger",
    "döner",
    "tantuni",
    "tavuk"
];

const popularRender = ({item}) => {
    return (
        <AddPopularSearch text={item} />
    );
}

export default function Search() {
    return (
      <SafeAreaView style={{ backgroundColor: "#F5F5F5" }}>
        <View style={styles.searchBar}>
          <FontAwesome5
            style={styles.searchIcon}
            name="search"
            size={screenHeight / 30}
            color="#5F3FBC"
          />
          <TextInput
            style={styles.searchArea}
            placeholder="What are you craving?"
          />
        </View>
        <Text style={styles.popularText}>Popular Searches</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator = {false}
          data={popularList}
          renderItem={popularRender}
          ListHeaderComponent={
            <View style={{ paddingLeft: (screenWidth * 2) / 100 }} />
          }
          style={{
            backgroundColor: "white",
            height: (screenHeight * 7) / 100,
            marginTop: screenHeight / 60,
            elevation : 8,
          }}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  searchBar: {
    height: (screenHeight * 7) / 100,
    backgroundColor: "white",
    flexDirection: "row",
  },

  searchIcon: {
    marginLeft: screenWidth / 25,
    marginRight: screenWidth / 25,
    alignSelf: "center",
  },

  searchArea: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },

  popularText: {
    marginTop: (screenHeight * 2.3) / 100,
    marginLeft: screenWidth / 25,
    fontSize : 13,
    fontWeight : "500",
  },
});