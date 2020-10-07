import React, { FunctionComponent, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { ListItem } from "react-native-elements";

import FontText from "../../components/Text";
import { ToggleButton } from "../../components/Button";
import * as util from "../../util/util";

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
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.sliderHeader}>
        <FontText fontset={theme.fontsets.header}>{title}</FontText>
        <FontText fontset={theme.fontsets.paragraph} style={{ marginTop: 20 }}>
          {subtitle}
        </FontText>
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
  const theme = useTheme();

  const onSelect = (item: string) => () => {
    props.onItemSelected(props.survey.key, [item]);
    checkItem(item);
  };

  return (
    <View style={{ marginTop: 90 }}>
      {props.survey.items.map((item, idx) => (
        <ToggleButton
          checked={currItem === item}
          onPress={onSelect(item)}
          style={styles.bigButton}
          theme={theme.colors.gradient.secondary}
          text={item}
          fontset={theme.fontsets.header3}
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
  const theme = useTheme();

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
        <ToggleButton
          checked={checkedItems.includes(item)}
          onPress={() => onPress(item)}
          style={styles.smallButton}
          theme={theme.colors.gradient.secondary}
          text={item}
          fontset={theme.fontsets.header4}
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
  const theme = useTheme();

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
            <FontText
              style={{ marginLeft: 25 }}
              fontset={theme.fontsets.header4}
            >
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
