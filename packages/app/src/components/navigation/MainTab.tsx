import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    AntDesign,
    Ionicons,
    Octicons,
    SimpleLineIcons,
    Feather,
    FontAwesome,
  } from "@expo/vector-icons"
import { useTheme } from "react-native-paper"

import Home from "../../containers/home/Home"
import Trends from "../../containers/trends/Trends"
import Create from "../../containers/create/Create"
import Inbox from "../../containers/inbox/Inbox"
import Profile from "../../containers/profile/Profile"

const Tab = createBottomTabNavigator();

const ICON_SIZE = 24;

export default function MainTab () {
    const theme = useTheme();
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                  case "Home":
                    return <Octicons name="home" size={size} color={color} />
                  case "Trends":
                    return (
                      <Feather name="hash" size={size} color={color} />
                    )
                  case "Create":
                    return (
                      <FontAwesome
                        name={focused ? "plus-square" : "plus-square-o"}
                        size={size}
                        color={color}
                      />
                    )
                  case "Inbox":
                    return <SimpleLineIcons name="people" size={size} color={color} />
                  case "Profile":
                    return <AntDesign name="profile" size={size} color={color} />
              }
            },
          })}
          tabBarOptions={{
            showLabel: false,
            activeTintColor: theme.colors.primaryBlue,
            inactiveTintColor: theme.colors.lightBlue,
          }}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trends" component={Trends} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}