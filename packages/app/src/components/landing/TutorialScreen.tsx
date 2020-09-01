import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
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

import { RootStackParamList } from "../../App";

interface SlideProps {
  title: string;
  text: string;
  backgroundImgUrl?: string;
  selectionOptions?: Array<{ optionText: string; img: string }>;
  onSelect?: (name: string) => Record<string, unknown>;
}

interface TutorialScreenProp {
  navigation: StackNavigationProp<RootStackParamList, "Tutorial">;
}

const Slide = ({
  title,
  text,
  backgroundImgUrl,
  selectionOptions,
  onSelect,
}: SlideProps) => {
  return (
    <View style={styles.slide}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{ uri: backgroundImgUrl }}
      >
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <Text>{text}</Text>
        </View>
        <Content>
          {selectionOptions?.map((option) => {
            <Button style={{ height: 100 }}>
              <Card>
                <CardItem cardBody>
                  <Image source={{ uri: option.img }} style={{ height: 70 }} />
                </CardItem>
                <CardItem>
                  <Text>{option.optionText}</Text>
                </CardItem>
              </Card>
            </Button>;
          })}
        </Content>
      </ImageBackground>
    </View>
  );
};

export default class TutorialScreen extends Component<TutorialScreenProp> {
  render() {
    return (
      <Container>
        <Swiper style={styles.wrapper}>
          <View style={styles.slide}>
            <Text>Page1</Text>
          </View>
          <View style={styles.slide}>
            <Text>Page2</Text>
          </View>
          <View style={styles.slide}>
            <Text>Page3</Text>
          </View>
        </Swiper>
      </Container>
    );
  }
}
/*
    <Slide
        title={"The fastest way to meet new people"}
        text={"Have a better social life in a single tap"}
        backgroundImgUrl={"https://scx1.b-cdn.net/csz/news/800/2018/cardiacarres.jpg"}
    />
    <Slide
        title={"Let us know who you are"}
        text={"Now tell me... what are your favorite sports?"}
        selectionOptions={[
            {
                optionText: "Soccer",
                img: "https://image.freepik.com/free-vector/doodle-soccer-ball_1034-741.jpg"
            },
            {
                optionText: "Basketball",
                img: "https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_1280.png"
            },
            {
                optionText: "Tennis",
                img: "https://cdn.pixabay.com/photo/2017/01/31/15/31/tennis-2025095_1280.png"
            },
            {
                optionText: "Hockey",
                img: "https://cdn.pixabay.com/photo/2016/06/24/16/49/hockey-puck-1477440_1280.png"
            },
            {
                optionText: "Baseball",
                img: "https://cdn.pixabay.com/photo/2012/04/18/23/13/baseball-38208_1280.png"
            },
        ]}
    />
    <Slide
        title={"Let us know who you are"}
        text={"Okay! Now choose everything you loves"} 
        selectionOptions={[
            {
                optionText: "coffee",
                img: "https://cdn.pixabay.com/photo/2013/07/13/09/51/coffee-156144_1280.png"
            },
            {
                optionText: "book",
                img: "https://cdn.pixabay.com/photo/2017/01/31/00/09/book-2022464_1280.png"
            },
            {
                optionText: "Yoga",
                img: "https://cdn.pixabay.com/photo/2014/04/03/10/38/yoga-310940_1280.png"
            },
            {
                optionText: "fitness",
                img: "https://cdn.pixabay.com/photo/2016/06/24/16/49/hockey-puck-1477440_1280.png"
            },
            {
                optionText: "Baseball",
                img: "https://cdn.pixabay.com/photo/2012/04/18/23/13/baseball-38208_1280.png"
            },
        ]}
    />
*/

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
