import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Mudavim from "./Mudavim/Mudavim";

const Tab = createMaterialTopTabNavigator();

export default function Prize() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Müdavim" component={Mudavim} />
        <Tab.Screen name="Promotions" component={Mudavim} />
        <Tab.Screen name="Announcem.." component={Mudavim} />
      </Tab.Navigator>
    );
}