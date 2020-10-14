import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from '@expo/vector-icons';
import { useTheme } from "react-native-paper";

import FontText from "../../components/Text";
import { TouchableGradient } from "../../components/Button";
import { RootStackParamList } from "../../components/navigation/AuthStack";

interface LandingProps {
  navigation: StackNavigationProp<RootStackParamList, "Landing">;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__body: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  container__buttons: {
    flex: 1,
  },
  logo: {
    marginTop: 80,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textShadowOffset: {
      width: -2,
      height: -2,
    },
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
  /*
    <ImageBackground
      style={{ width: "100%", height: "100%", opacity: 1.0 }}
      source={{
        uri:
          "https://previews.123rf.com/images/danmorgan12/danmorgan121609/danmorgan12160900090/63022992-two-happy-laughing-teenager-girls-skating-longboard-together-in-park-vertical-image-composition.jpg",
      }}
    >
  */
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.white }}>
      <ImageBackground
        style={{ width: "100%", height: "100%", opacity: 1.0 }}
        source={{
          uri:
            ".",
        }}
      >
        <View style={styles.container__body}>
          <Fontisto style={styles.logo} name="hashtag" size={80} color="black" />
          <FontText
            style={{ ...styles.appTitle, color: theme.colors.black }}
            fontset={theme.fontsets.paragraph}
          >
            HASHES
          </FontText>
        </View>
        <View
          style={styles.container__buttons}
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
              Continue
            </FontText>
          </TouchableGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
// onPress={() => navigation.navigate("Survey")}
