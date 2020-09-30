/* eslint-disable */
import React, { FunctionComponent, useState } from "react";
import { 
    View,
    ViewStyle,
    TouchableOpacity,
    GestureResponderEvent
} from "react-native";

import { FontText, FontPresetType } from "./Text";
import * as Color from "./styles/Color";
import { GetGradientStyle, GradientPresetType } from "./styles/Gradient";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableHighlight } from "react-native-gesture-handler";

interface DisabledButtonStyle {
    style: ViewStyle,
}

export const DisabledButton: FunctionComponent<DisabledButtonStyle> = (props) => {
    return (
      <TouchableOpacity disabled={true} style={{...props.style, backgroundColor: Color.Light}}>
          {
              props.children ? (
                  <FontText style={{ textAlign: "center", color: Color.SecondaryGray}} fontType='header_2'>
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
    gradientPreset?: GradientPresetType
    isShadow?: boolean
};
  
export const TouchableGradient: FunctionComponent<TouchableGradientProps> = (props) => {
  const { colors, start, end, locations } = GetGradientStyle(props.gradientPreset);
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

TouchableGradient.defaultProps = {
  onPress: () => {},
  isShadow: false,
} as Partial<TouchableGradientProps>

interface ToggleButtonProps {
  activeColor: Color.Colors | GradientPresetType,
  style?: Omit<ViewStyle, "backgroundColor" | "borderColor" | "borderWidth">,
  checked?: boolean,
  text: string,
  fontType?: FontPresetType,
  onPress: () => void,
}

export const ToggleButton: FunctionComponent<ToggleButtonProps> = (props) => {
  const style = {
    borderColor: Color.PrimaryGray,
    borderWidth: 2,
    ...props.style,
  }
  if(props.checked){
      return (
        Color.IsSolidColor(props.activeColor) ? (
          <TouchableOpacity onPress={() => props.onPress()}>
            <View style={{...style, backgroundColor: props.activeColor}}>
              <FontText style={{color: Color.White ,textAlign: "center"}} fontType={props.fontType}>{props.text}</FontText>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableGradient onPress={() => props.onPress()} style={props.style} gradientPreset={props.activeColor} isShadow={true}>
            <FontText style={{color: Color.White ,textAlign: "center"}} fontType={props.fontType}>{props.text}</FontText>
          </TouchableGradient>
        )
      )
  }
  else{
      return (
        <TouchableOpacity onPress={() => props.onPress()}>
          <View style={{...style, backgroundColor: Color.White}}>
            <FontText style={{color: Color.PrimaryGray ,textAlign: "center"}} fontType={props.fontType}>{props.text}</FontText>
          </View>
        </TouchableOpacity>
      )
  }
}

ToggleButton.defaultProps = {
  checked: false,
}