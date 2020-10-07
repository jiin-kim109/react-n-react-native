/* eslint-disable */
import React, { FunctionComponent, useState } from "react";
import { 
    View,
    ViewStyle,
    TouchableOpacity,
    GestureResponderEvent
} from "react-native";
import { useTheme } from "react-native-paper";
import FontText from "./Text";
import { LinearGradient } from "expo-linear-gradient";

interface DisabledButtonProps {
    style: ViewStyle,
}

export const DisabledButton: FunctionComponent<DisabledButtonProps> = (props) => {
    const theme = useTheme();
    return (
      <TouchableOpacity disabled={true} style={{...props.style, backgroundColor: theme.colors.specialColors.statusBar}}>
          {
              props.children ? (
                  <FontText style={{ textAlign: "center", color: theme.colors.specialColors.disabledText}} fontset={theme.fontsets.header2}>
                      {props.children}
                  </FontText>    
              ) : null
          }
      </TouchableOpacity>
    )
}

interface TouchableGradientProps {
    onPress?: (e?:GestureResponderEvent) => void
    style?: ViewStyle,
    theme?: ReactNativePaper.Gradient
    isShadow?: boolean
};
  
export const TouchableGradient: FunctionComponent<TouchableGradientProps> = (props) => {
  const theme = useTheme();
  const { colors, start, end, locations } = props.theme ? props.theme : theme.colors.gradient.primary;
  const style = props.isShadow ? { 
    ...props.style, 
    shadowColor: '#000000',
    shadowOffset: { //iOS shadow
      width: 0,
      height: 3
    },
    shadowRadius: 8, //iOS shadow
    shadowOpacity: 0.8, //iOS shadow
    elevation: 4, //Android shadow
  } : props.style;
  return (
    <TouchableOpacity 
      onPress={props.onPress}
      delayPressIn={0}
    >
      <LinearGradient
        style={style}
        colors={colors ? colors : []}
        start={start}
        end={end}
        locations={locations}
      >
          {props.children}
      </LinearGradient>
    </TouchableOpacity>
  )
}

interface ToggleButtonProps {
  theme: ReactNativePaper.ValidColor | ReactNativePaper.Gradient
  style?: Omit<ViewStyle, "backgroundColor" | "borderColor" | "borderWidth">,
  checked?: boolean,
  text: string,
  fontset?: ValueOf<ReactNativePaper.Theme['fontsets']>,
  onPress: () => void,
}

export const ToggleButton: FunctionComponent<ToggleButtonProps> = (props) => {
  const theme = useTheme();
  const style = {
    borderColor: theme.colors.specialColors.disabledBorder,
    borderWidth: 2,
    ...props.style,
  }
  if(props.checked){
      return (
        // REQUIRE EDIT:: when Typescript updates so that custom formatted string type is allowed
        typeof props.theme === "string" ? (
          <TouchableOpacity onPress={() => props.onPress()}>
            <View style={{...style, backgroundColor: props.theme}}>
              <FontText style={{color: theme.colors.white ,textAlign: "center"}} fontset={props.fontset}>
                {props.text}
              </FontText>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableGradient onPress={() => props.onPress()} style={props.style} theme={props.theme} isShadow={true}>
            <FontText style={{color: theme.colors.white ,textAlign: "center"}} fontset={props.fontset}>
              {props.text}
            </FontText>
          </TouchableGradient>
        )
      )
  }
  else{
      return (
        <TouchableOpacity onPress={() => props.onPress()}>
          <View style={{...style, backgroundColor: theme.colors.white}}>
            <FontText style={{color: theme.colors.specialColors.disabledText ,textAlign: "center"}} fontset={props.fontset}>
              {props.text}
            </FontText>
          </View>
        </TouchableOpacity>
      )
  }
}

ToggleButton.defaultProps = {
  checked: false,
}