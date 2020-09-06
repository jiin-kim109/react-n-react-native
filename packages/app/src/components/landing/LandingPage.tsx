import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";

import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../../App";
import { WithFontText } from "../common/Text";
import { WithTouchableGradient } from "../common/Hoc";

interface LandingProps {
  navigation: StackNavigationProp<RootStackParamList, "Landing">;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(162, 213, 242)",
  },
  topView: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    color: "white",
    marginTop: 30,
    textShadowOffset: {
      width: -2,
      height: -2,
    },
    textShadowColor: "#e0ece4",
    textShadowRadius: 10,
  },
  bottomView: {
    flex: 1,
  },
  button: {
    width: "70%",
    height: 45,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: "center",
  },
  button_text: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
});

const LandingPage = ({ navigation }: LandingProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%", opacity: 1.0 }}
        source={{
          uri:
            "https://previews.123rf.com/images/danmorgan12/danmorgan121609/danmorgan12160900090/63022992-two-happy-laughing-teenager-girls-skating-longboard-together-in-park-vertical-image-composition.jpg",
        }}
      >
        <LinearGradient
          colors={["rgba(64, 168, 196, 1.0)", "rgba(64, 168, 196, 0.1)"]}
          start={[0.0, 0.0]}
          end={[0.0, 0.4]}
          style={styles.topView}
        >
          <WithFontText style={styles.title}>Action</WithFontText>
        </LinearGradient>
        <LinearGradient
          colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,1.0)"]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
          style={styles.bottomView}
        >
          <WithTouchableGradient
            style={styles.button}
            onPress={() => navigation.navigate("Survey")}
          >
            <WithFontText style={styles.button_text}>Get Started</WithFontText>
          </WithTouchableGradient>
          <WithTouchableGradient
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <WithFontText style={styles.button_text}>Get Started</WithFontText>
          </WithTouchableGradient>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
// onPress={() => navigation.navigate("Survey")}
