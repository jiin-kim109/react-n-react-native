/* eslint-disable */
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { 
    Text, 
    StyleSheet, 
    TextStyle,
    ViewStyle,
    Animated,
    TouchableOpacity,
    GestureResponderEvent
 } from "react-native";
 import { LinearGradient } from "expo-linear-gradient";

interface withTouchableGradientProps {
  onPress: (e?:GestureResponderEvent) => void
  colors: Array<string>
  start: { x:number, y:number }
  end: { x:number, y:number }
  locations?: Array<number>
  style: ViewStyle
}
export const WithTouchableGradient: FunctionComponent<withTouchableGradientProps> = (props) => {
  return (
      <TouchableOpacity 
        style={{alignItems: 'center'}}
        onPress={props.onPress}
        delayPressIn={0}
      >
        <LinearGradient
          colors={props.colors}
          start={props.start}
          end={props.end}
          style={props.style}
          locations={props.locations}
        >
            {props.children}
        </LinearGradient>
      </TouchableOpacity>
  )
}