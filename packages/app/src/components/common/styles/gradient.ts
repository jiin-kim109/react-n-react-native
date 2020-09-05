import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface GradientPresetType {
  colors: Array<string>;
  start: { x: number; y: number };
  end: { x: number; y: number };
  locations: Array<number>;
}

export const PresetOne: GradientPresetType = {
  colors: ["#40a8c4", "#07689f", "#192f6a"],
  start: { x: 0.4, y: 0.1 },
  end: { x: 0.8, y: 1.0 },
  locations: [0, 0.65, 0.85],
};

export const PresetTwo: GradientPresetType = {
  colors: ["#40a8c4", "#07689f", "#192f6a"],
  start: { x: 0.4, y: 0.1 },
  end: { x: 0.8, y: 1.0 },
  locations: [0, 0.65, 0.85],
};
