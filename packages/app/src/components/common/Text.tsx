/* eslint-disable */
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { 
    Text, 
    StyleSheet, 
    TextStyle,
    Animated,
 } from "react-native"; 

interface withFontTextProps {
    style: TextStyle
}
export const WithFontText: FunctionComponent<withFontTextProps> = ({ children, style }) => {
    return (
        <Text style={{ ...style, fontFamily: 'Kufam-Italic-VariableFont_wght' }}>
          {children}
        </Text>
    )


interface withCustomFontTextProps {
    style: TextStyle
    fontFamily: string,
}
export const WithCustomFontText: FunctionComponent<withCustomFontTextProps> = (props) => {
    const font = { fontFamily: props.fontFamily };
    return (
        <Text style={{ ...props.style, ...font }}>
          {props.children}
        </Text>
    )
}