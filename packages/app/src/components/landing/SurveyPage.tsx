import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import Swiper from "react-native-swiper";
import { ProgressBar } from "react-native-paper";

import { isComputed } from "mobx";
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

interface SurveyProps {
  navigation: StackNavigationProp<RootStackParamList, "Survey">;
}

interface SurveyState {
  currSlideIdx: number;
  progress: number;
  resultToStore: Record<number, { key: string; items: Array<string> }>;
}

const NUM_OF_SLIDES = 3;

export default class SurveyPage extends Component<SurveyProps, SurveyState> {
  private swiperRef: React.RefObject<Swiper>;

  constructor(props: SurveyProps) {
    super(props);
    this.state = {
      currSlideIdx: 0,
      progress: 1.0 / NUM_OF_SLIDES,
      resultToStore: {},
    };
    this.swiperRef = React.createRef();
  }

  isContinueAllowed = (): boolean => {
    const currSuvResult = this.state.resultToStore[this.state.currSlideIdx];
    return currSuvResult && currSuvResult.items.length > 0;
  };

  onIndexChanged = (idx: number) => {
    this.setState({
      currSlideIdx: idx,
      progress: (idx + 1) / NUM_OF_SLIDES,
    });
  };

  onItemSelected = (key: string, items: Array<string>) => {
    this.setState((prevStat) => {
      const result = { ...prevStat.resultToStore };
      result[prevStat.currSlideIdx] = { key, items };
      return { resultToStore: result };
    });
  };

  onNextSlide = () => {
    const swiper = this.swiperRef.current;
    if (this.state.currSlideIdx < NUM_OF_SLIDES - 1) {
      swiper?.scrollBy(1, true);
    } else {
      // asyncStorage.save({ key, items });
      this.props.navigation.navigate("Home");
    }
  };

  onPrevSlide = () => {
    const swiper = this.swiperRef.current;
    if (this.state.currSlideIdx > 0) swiper?.scrollBy(-1, true);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <ProgressBar
            style={{ height: 31 }}
            progress={this.state.progress}
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
              onPress={() => this.onPrevSlide()}
            >
              ‹
            </Common.FontText>
            <Common.FontText
              fontType="header"
              style={{ marginTop: 15, fontSize: 20 }}
              onPress={() => this.onNextSlide()}
            >
              SKIP
            </Common.FontText>
          </View>
        </View>
        <View style={styles.surveyBody}>
          <Swiper
            ref={this.swiperRef}
            loop={false}
            index={0}
            scrollEnabled={false}
            showsPagination={false}
            onIndexChanged={this.onIndexChanged}
          >
            <View style={styles.slide}>
              <SurveySlide description={{ title: "I am a", subtitle: "" }}>
                <SingleChoice
                  onItemSelected={this.onItemSelected}
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
                  onItemSelected={this.onItemSelected}
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
                  onItemSelected={this.onItemSelected}
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
          {this.isContinueAllowed() ? (
            <Common.TouchableGradient
              style={styles.continueButton}
              onPress={() => this.onNextSlide()}
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
}
