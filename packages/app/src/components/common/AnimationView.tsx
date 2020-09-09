/* eslint-disable */
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { 
    Text, 
    StyleSheet, 
    ViewStyle,
    Animated,
 } from "react-native"; 
 import { LinearGradient } from "expo-linear-gradient";

interface withFadeInViewProps {
    targetOpacity: number
    duration: number
    style: ViewStyle
}
export const WithFadeInView: FunctionComponent<withFadeInViewProps> = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: props.targetOpacity,
          duration: props.duration,
          useNativeDriver: false,
        }).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );    
}

interface withFadeInGradientProps {
    colors: Array<string>
    start: { x:number, y:number }
    end: { x:number, y:number }
    style: ViewStyle
    duration: number
}
export const WithFadeInGradient: FunctionComponent<withFadeInGradientProps> = ({ children, colors, start, end, style, duration}) => {
    return (
        <LinearGradient colors={{...colors}} start={{...start}} end={{...end}} style={{...style}}>
          {children}
        </LinearGradient>
    )
}