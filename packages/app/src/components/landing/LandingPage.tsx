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
import { StatusBar } from "expo-status-bar";

import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../../App";
import { WithBaseFontText } from "../../util/hoc";

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
  touchableOpacity: {
    alignItems: "center",
  },
  button: {
    width: "70%",
    height: 45,
    marginTop: 10,
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
      <StatusBar hidden />
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
          <WithBaseFontText style={styles.title}>Action</WithBaseFontText>
        </LinearGradient>
        <LinearGradient
          colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,1.0)"]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
          style={styles.bottomView}
        >
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate("Survey")}
            delayPressIn={0}
          >
            <LinearGradient
              colors={["#40a8c4", "#07689f", "#192f6a"]}
              start={{ x: 0.4, y: 0.1 }}
              end={{ x: 0.8, y: 1.0 }}
              locations={[0, 0.65, 0.85]}
              style={styles.button}
            >
              <WithBaseFontText style={styles.button_text}>
                Get Started
              </WithBaseFontText>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
