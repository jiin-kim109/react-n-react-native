/* eslint-disable */
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { 
    Text, 
    StyleSheet, 
    TextStyle,
    ViewStyle,
    Animated,
    TouchableOpacity,
    GestureResponderEvent
 } from "react-native";
 import * as GradientStyle from "./styles/gradient";

interface withTouchableProps {
  onPress?: (e?:GestureResponderEvent) => void
  style: ViewStyle
  colors?: Array<string>,
  start?: { x: number, y: number },
  end?: { x: number, y: number },
  locations?: Array<number>,      
  gradientPreset?: GradientStyle.GradientPresetType
}
export const WithTouchableGradient: FunctionComponent<withTouchableProps> = (props) => {
  const { colors, start, end, locations } = props.gradientPreset ? props.gradientPreset : props;
  return (
      <TouchableOpacity 
        style={{alignItems: 'center'}}
        onPress={props.onPress}
        delayPressIn={0}
      >
        <LinearGradient
          style={props.style}
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
WithTouchableGradient.defaultProps = {
  onPress: () => {},
  ...GradientStyle.PresetOne
} as Partial<withTouchableProps>