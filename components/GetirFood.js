import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback,
} from "react-native";
import Kampanya from "../assets/kampanya1.jpeg"
import Kizilay from "../assets/kizilay.jpg"
import Afad from "../assets/afad.jpg"
import Mudavim from "../assets/mudavim.png"
import Discount from "../assets/discount.png"

import AddCuisines from "./AddCuisines";
import AddEarthquakeAid from "./AddEarthquakeAid";
import AddRestaurant from "./AddRestaurant";
import GetirTop from "./GetirTop";
import View1Button from "./View1Button";
import GetirBottom from "./GetirBottom";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const justDoIt = () => {} ;


export default function GetirFood() {
    const [refresh, setRefresh] = useState(false);

    const onRefresh = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        }, 2000);
    }

    return (
      <SafeAreaView>
        <GetirTop />
        <ScrollView
          stickyHeaderIndices={[1]}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        >
          <Image source={Kampanya} style={styles.campainImages} />
          <TouchableWithoutFeedback
           style={styles.searchBarArea}


           >
            <View style={styles.searchBar}>
              <View style={styles.searchContain}>
                <Image
                  source={require("../assets/searchIcon.jpg")}
                  style={{
                    width: screenWidth / 16.1538,
                    resizeMode: "contain",
                    marginLeft: screenWidth / 25,
                  }}
                />
                <Text style={styles.searchText}>{"  What do you want ?"}</Text>
                <View style={{ width: screenWidth / 30 }} />
                <Text style={[styles.searchText, { color: "#5D3EBD" }]}>
                  {"     Filter & Sort  "}
                </Text>
                <Image
                  source={require("../assets/settingsIcon.jpg")}
                  style={{
                    alignSelf: "center",
                    width: screenWidth / 16.1538,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.containerText}>{"Earthquake Aid"}</Text>
          <AddEarthquakeAid
            name={"Deprem Yardımı / AFAD"}
            image={Afad}
            styles={styles}
          />
          <AddEarthquakeAid
            name={"Deprem Yardımı / Kızılay"}
            image={Kizilay}
            styles={styles}
          />
          <Text style={styles.containerText}>Cuisines</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
            style={{ width: screenWidth, left: screenWidth / 50 }}
          >
            <AddCuisines name={"Discounted"} image={Discount} styles={styles} />
            <AddCuisines name={"Müdavim"} image={Mudavim} styles={styles} />
            <AddCuisines name={"Çiğ Köfte"} image={null} styles={styles} />
          </ScrollView>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.containerText}>{"All restourants (0)"}</Text>
            <View style={{ width: (screenWidth * 38.5) / 97.5 }}></View>
            <View1Button />
          </View>

          <ScrollView
            style={{ width: (screenWidth * 96) / 100, alignSelf: "center" }}
          >
            <AddRestaurant
              name="Komagene Etsiz Çiğ Köfte, Kocasinan (Gesi Cad.)"
              image={require("../assets/restaurants/cigKofte.jpeg")}
              minute={"20-30"}
              price={"42.00"}
              starPoint={"4.5"}
              starCount={"(200+)"}
              styles={styles}
            />

            <AddRestaurant
              name="Mersin Express Tantuni, Kocasinan (Kocasinan"
              image={require("../assets/restaurants/tantuni.jpg")}
              minute={"30-40"}
              price={"30.00"}
              starPoint={"4.3"}
              starCount={"(200+)"}
              styles={styles}
            />

            <AddRestaurant
              name="İldem Pide, Melikgazi (Cumhuriyet Mah. - İldem)"
              image={require("../assets/restaurants/pide.jpg")}
              minute={"60-70"}
              price={"70.00"}
              starPoint={"4.5"}
              starCount={"(200+)"}
              styles={styles}
            />

            <AddRestaurant
              name="Domino's Pizza, Melikgazi (Demokrasi Mah.)"
              image={require("../assets/restaurants/pizza.jpeg")}
              minute={"30-40"}
              price={"59.99"}
              starPoint={"4.1"}
              starCount={"(500+)"}
              styles={styles}
            />

            <AddRestaurant
              name="Şahin Yuvası Köşk Kebap (Beyazşehir Mah.)"
              image={require("../assets/restaurants/tavukDoner.jpg")}
              minute={"35-45"}
              price={"60.00"}
              starPoint={"3.9"}
              starCount={"(50+)"}
              styles={styles}
            />
          </ScrollView>
          <View style={{ height: screenHeight / 4 }}></View>
        </ScrollView>
        <GetirBottom />
      </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
  containerText: {
    left: screenWidth / 27,
    marginBottom: screenHeight / 100,
    marginTop: screenHeight / 30,
  },

  campainImages: {
    height: (screenHeight * 23) / 100,
    width: screenWidth,
  },

  searchBarArea: {
    width: screenWidth,
    height: (screenHeight * 12) / 100,
    justifyContent: "center",
    alignItems: "center",
  },

  searchBar: {
    width: (screenWidth * 91) / 100,
    height: (screenHeight * 6.5) / 100,
    marginTop: (screenHeight * 23) / 25 / 50,
    backgroundColor: "white",
    borderRadius: 8,
    shadowOpacity: 20,
    elevation: 5,
    justifyContent: "center",
  },

  searchText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#797F8C",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  searchContain: {
    flexDirection: "row",
  },

  emergencyRect: {
    height: (screenHeight * 13) / 50,
    width: (screenWidth * 24) / 25,
    backgroundColor: "white",
    marginTop: screenHeight / 100,
    marginLeft: screenWidth / 50,
    borderRadius: 12,
    justifyContent: "flex-start",
    elevation: 6,
  },

  emergencyImg: {
    height: (screenHeight * 9) / 50,
    width: (screenWidth * 24) / 25,
    resizeMode: "contain",
  },

  emergencyTextContain: {
    position: "absolute",
    width: (79 * screenWidth) / 100,
    height: (screenHeight * 13) / 50,
    justifyContent: "flex-end",
  },

  emergencyText: {
    marginBottom: screenHeight / 60,
    marginLeft: screenWidth / 25,
    fontSize: 16,
  },

  dotShadow: {
    position: "absolute",
    height: screenWidth / 5.5,
    width: screenWidth / 5.5,
    backgroundColor: "#0000",
    alignSelf: "flex-end",
    elevation: 12,
    opacity: 0.5,
    borderBottomLeftRadius: 100,
  },

  cuisinesRect: {
    height: (screenHeight * 3) / 25,
    width: (screenWidth * 34) / 100,
    marginLeft: screenWidth / 50,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },

  cuisinesText: {
    alignSelf: "center",
    fontSize: 13,
    marginBottom: screenHeight / 95,
  },

  cuisinesImg: {
    resizeMode: "contain",
    height: screenHeight / 14,
    alignSelf: "center",
  },

  starCountText: {
    fontSize: 12,
    opacity: 0.7,
    left: screenWidth / 30,
    top: screenHeight / 150,
  },

  starPointText: {
    alignSelf: "center",
    left: screenWidth / 45,
    color: "#5F3FBC",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },

  starImg: {
    width: screenWidth / 25,
    height: screenHeight / 50,
    resizeMode: "contain",
    left: screenWidth / 75,
    alignSelf: "center",
  },

  starContain: {
    position: "absolute",
    width: (screenWidth * 6) / 25,
    height: (screenHeight * 3) / 100,
    left: (screenWidth * 68) / 100,
    borderRadius: 7,
    top: (screenHeight * 17) / 100,
    backgroundColor: "white",
    flexDirection: "row",
  },

  restorantText: {
    top: screenHeight / 50,
    left: screenWidth / 30,
    fontSize: 18,
    width: (screenWidth * 91) / 100,
  },

  restorantImg: {
    resizeMode: "center",
    alignSelf: "center",
    top: screenHeight / 100,
    height: (screenHeight * 2) / 10,
    width: (screenWidth * 92) / 100,
    borderRadius: 12,
  },

  restorantRect: {
    height: (screenHeight * 3) / 10,
    width: (screenWidth * 96) / 100,
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: screenHeight / 100,
  },

  circleContainer: {
    height: screenWidth / 25,
    width: screenWidth / 25,
    borderRadius: 50,
    backgroundColor: "#247C28",
    justifyContent: "center",
    alignItems: "center",
  },

  containTail: {
    top: screenHeight / 40,
    left: screenWidth / 30,
    height: screenWidth / 20,
    flexDirection: "row",
    alignItems: "center",
  },

  minuteText: {
    left: screenWidth / 40,
    opacity: 0.5,
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
  },

  heart: {
    position: "absolute",
    width: (screenWidth * 8) / 100,
    height: (screenHeight * 3.3) / 100,
    left: (screenWidth * 84) / 100,
    top: screenHeight / 50,
  },
});