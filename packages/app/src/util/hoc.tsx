/* eslint-disable */
import React, { FunctionComponent } from "react";
import { 
    Text, 
    StyleSheet, 
    TextStyle,
    ViewStyle
 } from "react-native"; 
 import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

type WithBaseFontTextProps = {
    style: TextStyle
}
export const WithBaseFontText: FunctionComponent<WithBaseFontTextProps> = ({ children, style }) => {
    return (
        <Text style={{ ...style, fontFamily: 'Kufam-Italic-VariableFont_wght' }}>
          {children}
        </Text>
    )
}

type WithFadeInGradientProps = {
    colors: Array<string>
    start: [number, number]
    end: [number, number]
    style: ViewStyle
    duration: number
}
export const WithFadeInGradient: FunctionComponent<WithFadeInGradientProps> = ({ children, colors, start, end, style, duration}) => {
    return (
        <LinearGradient colors={{...colors}} start={{...start}} end={{...end}} style={{...style}}>
          {children}
        </LinearGradient>
    )
}