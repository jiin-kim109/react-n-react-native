import React, { Component, FunctionComponent } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Button,
  Right,
  Icon,
  Content,
} from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import Swiper from "react-native-swiper";

import { WithFontText, WithCustomFontText } from "../common/Text";
import { WithTouchableGradient } from "../common/Hoc";
import { PresetTwo } from "../common/styles/gradient";
import { RootStackParamList } from "../../App";

const styles = StyleSheet.create({
  swiper: {
    flex: 3,
  },
  bottomView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
  },
  sliderHeader: {
    flex: 1,
  },
  sliderBody: {
    flex: 4,
  },
  sliderTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  continueButton: {
    width: "70%",
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  continueButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
});

interface SurveySlideProps {
  title: string;
}

const SurveySlide: FunctionComponent<SurveySlideProps> = (
  props: SurveySlideProps
) => {
  const { title } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.sliderHeader}>
        <WithCustomFontText
          style={styles.sliderTitle}
          fontFamily="Kufam-Italic-VariableFont_wght"
        >
          {title}
        </WithCustomFontText>
      </View>
      <View style={styles.sliderBody} />
    </View>
  );
};

interface SurveyProps {
  navigation: StackNavigationProp<RootStackParamList, "Survey">;
}

export default function SurveyPage({ navigation }: SurveyProps) {
  return (
    <Container>
      <Swiper style={styles.swiper} showsButtons>
        <View style={styles.slide} />
        <View style={styles.slide} />
      </Swiper>
      <View style={styles.bottomView}>
        <WithTouchableGradient
          style={styles.continueButton}
          onPress={() => {
            console.log("test");
          }}
          gradientPreset={PresetTwo}
        >
          <WithFontText style={styles.continueButtonText}>
            Continue
          </WithFontText>
        </WithTouchableGradient>
      </View>
    </Container>
  );
}
