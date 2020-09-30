import React, { FunctionComponent, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";

import { ListItem } from "react-native-elements";

import { db } from "@act/controllers/src/firebase/Firebase";
import * as Common from "../common/Common";
import * as util from "../../util/util";
import { FontText } from "../common/Common";

const styles = StyleSheet.create({
  sliderHeader: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 40,
  },
  sliderBody: {
    flex: 4,
    marginBottom: 20,
  },
  bigButton: {
    height: 50,
    marginVertical: 7,
    marginHorizontal: 50,
    justifyContent: "center",
    borderRadius: 30,
  },
  smallButton: {
    height: 32,
    paddingHorizontal: 13,
    marginHorizontal: 4,
    marginVertical: 5,
    borderRadius: 30,
  },
});

interface SurveySlideProps {
  description: { title: string; subtitle: string };
}

const SurveySlide: FunctionComponent<SurveySlideProps> = (props) => {
  const { title, subtitle } = props.description;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.sliderHeader}>
        <Common.FontText fontType="header">{title}</Common.FontText>
        <Common.FontText fontType="paragraph" style={{ marginTop: 20 }}>
          {subtitle}
        </Common.FontText>
      </View>
      <View style={styles.sliderBody}>{props.children}</View>
    </View>
  );
};

export default SurveySlide;

interface Survey {
  survey: {
    key: string;
    items: [string, ...Array<string>];
  };
  onItemSelected: (key: string, choises: Array<string>) => void;
}

export const SingleChoice: FunctionComponent<Survey> = (props) => {
  const [currItem, checkItem] = useState("");
  const uniqueKeys: Array<string> = util.UniqueKeyArray(
    props.survey.items.length
  );

  const onSelect = (item: string) => () => {
    props.onItemSelected(props.survey.key, [item]);
    checkItem(item);
  };

  return (
    <View style={{ marginTop: 90 }}>
      {props.survey.items.map((item, idx) => (
        <Common.ToggleButton
          checked={currItem === item}
          onPress={onSelect(item)}
          style={styles.bigButton}
          activeColor="preset_2"
          text={item}
          fontType="header_3"
          key={uniqueKeys[idx]}
        />
      ))}
    </View>
  );
};

export const MultiChoice: FunctionComponent<Survey> = (props) => {
  const [checkedItems, checkItem] = useState<Array<string>>([]);
  const uniqueKeys: Array<string> = util.UniqueKeyArray(
    props.survey.items.length
  );

  const onPress = (item: string) => {
    if (checkedItems.includes(item)) {
      const itemsWithout = util.Remove(checkedItems, item);
      props.onItemSelected(props.survey.key, itemsWithout);
      checkItem(itemsWithout);
    } else {
      const itemsWith = [...checkedItems, item];
      props.onItemSelected(props.survey.key, itemsWith);
      checkItem(itemsWith);
    }
  };

  return (
    <View
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
        paddingHorizontal: 10,
      }}
    >
      {props.survey.items.map((item, idx) => (
        <Common.ToggleButton
          checked={checkedItems.includes(item)}
          onPress={() => onPress(item)}
          style={styles.smallButton}
          activeColor="preset_2"
          text={item}
          fontType="subheader"
          key={uniqueKeys[idx]}
        />
      ))}
    </View>
  );
};

export const MultiChoiceList: FunctionComponent<
  Survey & { maxChoiceNum: number }
> = (props) => {
  const [checkedItems, checkItem] = useState<Array<string>>([]);
  const uniqueKeys: Array<string> = util.UniqueKeyArray(
    props.survey.items.length
  );

  const onCheck = (item: string) => {
    if (checkedItems.includes(item)) {
      const itemsWithout = util.Remove(checkedItems, item);
      props.onItemSelected(props.survey.key, itemsWithout);
      checkItem(itemsWithout);
    } else if (checkedItems.length < props.maxChoiceNum) {
      const itemsWith = [...checkedItems, item];
      props.onItemSelected(props.survey.key, itemsWith);
      checkItem(itemsWith);
    }
  };

  return (
    <ScrollView style={{ flex: 1, marginTop: 50, paddingHorizontal: 20 }}>
      {props.survey.items.map((item, idx) => (
        <ListItem key={uniqueKeys[idx]} bottomDivider>
          <ListItem.Content>
            <FontText style={{ marginLeft: 25 }} fontType="subheader">
              {item}
            </FontText>
          </ListItem.Content>
          <ListItem.CheckBox
            checked={checkedItems.includes(item)}
            onPress={() => onCheck(item)}
          />
        </ListItem>
      ))}
    </ScrollView>
  );
};
