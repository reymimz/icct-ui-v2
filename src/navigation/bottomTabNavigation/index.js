import { View, Text, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Step1 from "../../screens/DashboardScreen/ProfileScreen/Step1";
import Step2 from "../../screens/DashboardScreen/ProfileScreen/Step2";
import Step3 from "../../screens/DashboardScreen/ProfileScreen/Step3";
import Step4 from "../../screens/DashboardScreen/ProfileScreen/Step4";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      //initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#1976FF",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#0067FF",

          height: 50,
        },
      }}
    >
      <Tab.Screen
        name={"Step1"}
        component={Step1}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={25}
              color={"white"}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Step2"}
        component={Step2}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Step3"}
        component={Step3}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Image
                style={{ width: 24, height: 24 }}
                source={{
                  uri: "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1649339323/Icct-portal/parental-control-solid_jnhztk.png",
                }}
              />
            ) : (
              <Image
                style={{ width: 24, height: 24 }}
                source={{
                  uri: "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1649339323/Icct-portal/parental-control-outline_mu6l1s.png",
                }}
              />
            ),
        }}
      />

      <Tab.Screen
        name={"Step4"}
        component={Step4}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Image
                style={{ width: 22, height: 22 }}
                source={{
                  uri: "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1649341020/Icct-portal/call-solid_kw1rbk.png",
                }}
              />
            ) : (
              <Image
                style={{ width: 22, height: 22 }}
                source={{
                  uri: "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1649341020/Icct-portal/call-outline_zu4zpr.png",
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
