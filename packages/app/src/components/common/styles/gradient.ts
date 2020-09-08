/* eslint-disable */
import React, { FunctionComponent } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { 
    ViewStyle,
    TouchableOpacity,
    GestureResponderEvent
} from "react-native";
import * as Color from "./Color";

export type GradientPresetType = 'preset_1' | 'preset_2';

export function GetGradientStyle(preset: GradientPresetType = 'preset_1') {
  switch(preset){
    case 'preset_1':
      return ({
        colors: [Color.LightBlue, Color.PrimaryBlue, Color.DarkBlue],
        start: { x: 0.4, y: 0.1 },
        end: { x: 0.8, y: 1.0 },
        locations: [0, 0.65, 0.85],
      })
    case 'preset_2':
      return ({
        colors: [Color.SecondaryGreen, Color.LightBlue],
        start: { x: 0.4, y: 0.1 },
        end: { x: 0.8, y: 1.0 },
        locations: [0, 0.9],
      })
  }
}