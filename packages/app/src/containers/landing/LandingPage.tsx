import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";

import FontText from "../../components/Text";
import { TouchableGradient } from "../../components/Button";
import { RootStackParamList } from "../../App";
import * as util from "../../util/util";

interface LandingProps {
  navigation: StackNavigationProp<RootStackParamList, "Landing">;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    marginTop: 80,
    textShadowOffset: {
      width: -2,
      height: -2,
    },
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
  const theme = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.white }}>
      <ImageBackground
        style={{ width: "100%", height: "100%", opacity: 1.0 }}
        source={{
          uri:
            "https://previews.123rf.com/images/danmorgan12/danmorgan121609/danmorgan12160900090/63022992-two-happy-laughing-teenager-girls-skating-longboard-together-in-park-vertical-image-composition.jpg",
        }}
      >
        <LinearGradient
          colors={[
            util.ToRgbA(theme.colors.lightBlue, 1.0),
            util.ToRgbA(theme.colors.lightBlue, 0.1),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.4]}
          style={styles.topView}
        >
          <FontText
            style={{ ...styles.title, color: theme.colors.white }}
            fontset={theme.fontsets.header}
          >
            Action
          </FontText>
        </LinearGradient>
        <LinearGradient
          colors={[
            util.ToRgbA(theme.colors.white, 0.1),
            util.ToRgbA(theme.colors.white, 1.0),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
          style={styles.bottomView}
        >
          <TouchableGradient
            style={styles.button}
            onPress={() => navigation.navigate("Survey")}
            isShadow
          >
            <FontText
              style={{ textAlign: "center", color: theme.colors.white }}
              fontset={theme.fontsets.header3}
            >
              GET STARTED
            </FontText>
          </TouchableGradient>
        </LinearGradient>
        <LinearGradient
          colors={[
            util.ToRgbA(theme.colors.white, 0.1),
            util.ToRgbA(theme.colors.white, 1.0),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
          style={styles.bottomView}
        >
          <TouchableGradient
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
            isShadow
          >
            <FontText
              style={{ textAlign: "center", color: theme.colors.white }}
              fontset={theme.fontsets.header3}
            >
              Sign In
            </FontText>
          </TouchableGradient>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
// onPress={() => navigation.navigate("Survey")}
