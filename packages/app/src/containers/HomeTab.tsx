import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import ActivityScreen from "./ActivityScreen";
import ChatListScreen from "./ChatListScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <AntDesign name="home" size={size} color={color} />;
            case "Activity":
              return (
                <AntDesign
                  name={focused ? "smile-circle" : "smileo"}
                  size={size}
                  color={color}
                />
              );
            case "Chat":
              return (
                <MaterialCommunityIcons
                  name={focused ? "message-text" : "message-text-outline"}
                  size={size}
                  color={color}
                />
              );
            case "My Profile":
              return <AntDesign name="profile" size={size} color={color} />;
            default:
              return (
                <AntDesign
                  name={focused ? "questioncircle" : "questioncircleo"}
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Chat" component={ChatListScreen} />
      <Tab.Screen name="My Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
