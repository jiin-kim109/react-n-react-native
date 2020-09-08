import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import Swiper from "react-native-swiper";
import { ProgressBar } from "react-native-paper";

import { RootStackParamList } from "../../App";
import SurveySlide, {
  SingleChoice,
  MultiChoice,
  MultiChoiceList,
} from "./SurveySlide";
import * as Common from "../common/Common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.Color.White,
  },
  headerView: {
    flex: 1,
  },
  surveyBody: {
    flex: 6,
  },
  bottomView: {
    flex: 1.1,
  },
  slide: {
    flex: 1,
  },
  continueButton: {
    height: 60,
    marginHorizontal: 50,
    borderRadius: 30,
    justifyContent: "center",
  },
});

interface SurveyData {
  key: string;
  items: Array<string>;
  surveyIdx: number;
}

interface SurveyProps {
  navigation: StackNavigationProp<RootStackParamList, "Survey">;
}

const numOfSlides = 3;

export default function SurveyPage({ navigation }: SurveyProps) {
  const [activeIdx, setIdx] = useState(0);
  const [isNextAllowed, allowNext] = useState(false);
  const [currSurveyToStore, reserveSurveyToStore] = useState<SurveyData>({
    key: "",
    items: [],
    surveyIdx: -1,
  });
  const [progress, setProgress] = useState(1.0 / numOfSlides);
  const swiperRef = useRef<Swiper>(null);

  const onItemSelected = (key: string, items: Array<string>) => {
    reserveSurveyToStore({ key, items, surveyIdx: activeIdx });
    items.length > 0 ? allowNext(true) : allowNext(false);
  };

  const onSkipPage = () => {
    const swiper = swiperRef.current;
    if (activeIdx < numOfSlides - 1) {
      setProgress(progress + 1.0 / numOfSlides);
      swiper?.scrollBy(1, true);
    }
  };

  const onPrevPage = () => {
    const swiper = swiperRef.current;
    if (activeIdx > 0) {
      if (currSurveyToStore.surveyIdx >= activeIdx - 1) {
        allowNext(true);
      }
      setProgress(progress - 1.0 / numOfSlides);
      swiper?.scrollBy(-1, true);
    }
  };

  const onPressContinue = () => {
    if (activeIdx >= numOfSlides - 1) {
      navigation.navigate("Home");
      return;
    }
    onSkipPage();
    allowNext(false);
    const { key, items } = currSurveyToStore;
    // asyncStorage.save({ key, items });
    console.log(key, items);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <ProgressBar
          style={{ height: 31 }}
          progress={progress}
          color={Common.Color.PrimaryGreen}
        />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 17,
          }}
        >
          <Common.FontText
            fontType="header"
            style={{ marginTop: -15, fontSize: 60 }}
            onPress={() => onPrevPage()}
          >
            ‹
          </Common.FontText>
          <Common.FontText
            fontType="header"
            style={{ marginTop: 15, fontSize: 20 }}
            onPress={() => onSkipPage()}
          >
            SKIP
          </Common.FontText>
        </View>
      </View>
      <View style={styles.surveyBody}>
        <Swiper
          ref={swiperRef}
          loop={false}
          index={0}
          scrollEnabled={false}
          showsPagination={false}
          onIndexChanged={(idx) => {
            setIdx(idx);
            if (currSurveyToStore.surveyIdx < idx) allowNext(false);
            else allowNext(true);
          }}
        >
          <View style={styles.slide}>
            <SurveySlide description={{ title: "I am a", subtitle: "" }}>
              <SingleChoice
                onItemSelected={onItemSelected}
                survey={{
                  key: "gender",
                  items: ["WOMAN", "MAN", "MORE"],
                }}
              />
            </SurveySlide>
          </View>
          <View style={styles.slide}>
            <SurveySlide
              description={{
                title: "Passions",
                subtitle:
                  "Let everyone know what you're passionate about by adding it to your profile.",
              }}
            >
              <MultiChoice
                onItemSelected={onItemSelected}
                survey={{
                  key: "passions",
                  items: [
                    "Disney",
                    "Athlete",
                    "Instagram",
                    "Working Out",
                    "Soccer",
                    "Grab a drink",
                    "DIY",
                    "Swimming",
                    "Music",
                    "Walking",
                  ],
                }}
              />
            </SurveySlide>
          </View>
          <View style={styles.slide}>
            <SurveySlide
              description={{
                title: "My sexual orientation is",
                subtitle: "Select up to 3",
              }}
            >
              <MultiChoiceList
                onItemSelected={onItemSelected}
                maxChoiceNum={3}
                survey={{
                  key: "sexualOrientation",
                  items: [
                    "Straight",
                    "Gay",
                    "Lesbian",
                    "Bisexual",
                    "Asexual",
                    "Demisexual",
                    "Transgender",
                    "Hetero",
                  ],
                }}
              />
            </SurveySlide>
          </View>
        </Swiper>
      </View>
      <View style={styles.bottomView}>
        {isNextAllowed ? (
          <Common.TouchableGradient
            style={styles.continueButton}
            onPress={onPressContinue}
            gradientPreset="preset_2"
            isShadow
          >
            <Common.FontText
              style={{ textAlign: "center", color: "white" }}
              fontType="header_2"
            >
              CONTINUE
            </Common.FontText>
          </Common.TouchableGradient>
        ) : (
          <Common.DisabledButton style={styles.continueButton}>
            CONTINUE
          </Common.DisabledButton>
        )}
      </View>
    </View>
  );
}
