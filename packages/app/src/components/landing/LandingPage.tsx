import React, { Component } from "react";
import { ServiceInjector } from "@act/controllers";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Button } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

interface LandingProps {
  navigation: StackNavigationProp<RootStackParamList, "Landing">;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 100,
  },
  button: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
});

const LandingPage = ({ navigation }: LandingProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri:
            "https://previews.123rf.com/images/danmorgan12/danmorgan121609/danmorgan12160900090/63022992-two-happy-laughing-teenager-girls-skating-longboard-together-in-park-vertical-image-composition.jpg",
        }}
      >
        <View style={styles.header}>
          <Text style={{ fontSize: 60, color: "white", marginTop: 50 }}>
            ACT
          </Text>
        </View>
        <View style={styles.bottom}>
          <Button
            rounded
            style={styles.button}
            onPress={() => navigation.navigate("Survey")}
          >
            <Text>{ServiceInjector.get('SampleService').printName()}</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;
