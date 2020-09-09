import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

import * as Common from "../common/Common";
import { RootStackParamList } from "../../App";

interface LandingProps {
  navigation: StackNavigationProp<RootStackParamList, "Landing">;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.Color.Sky,
  },
  topView: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    color: Common.Color.White,
    marginTop: 80,
    textShadowOffset: {
      width: -2,
      height: -2,
    },
    textShadowColor: Common.Color.Mint,
    textShadowRadius: 10,
  },
  bottomView: {
    flex: 1,
  },
  button: {
    height: 60,
    marginHorizontal: 30,
    marginTop: 40,
    borderRadius: 10,
    justifyContent: "center",
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
          colors={[
            Common.Color.ToRgbA(Common.Color.LightBlue, 1.0),
            Common.Color.ToRgbA(Common.Color.LightBlue, 0.1),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.4]}
          style={styles.topView}
        >
          <Common.FontText style={styles.title} fontType="header">
            Action
          </Common.FontText>
        </LinearGradient>
        <LinearGradient
          colors={[
            Common.Color.ToRgbA(Common.Color.White, 0.1),
            Common.Color.ToRgbA(Common.Color.White, 1.0),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
          style={styles.bottomView}
        >
          <Common.TouchableGradient
            style={styles.button}
            onPress={() => navigation.navigate("Survey")}
            isShadow
          >
            <Common.FontText
              style={{ textAlign: "center", color: Common.Color.White }}
              fontType="header_3"
            >
              GET STARTED
            </Common.FontText>
          </Common.TouchableGradient>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
// onPress={() => navigation.navigate("Survey")}
