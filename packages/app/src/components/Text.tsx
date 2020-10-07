/* eslint-disable */
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { 
    Text, 
    StyleSheet, 
    TextStyle,
    Animated,
    GestureResponderEvent,
    View,
    TextInput,
    TouchableOpacity
} from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import { useTheme } from "react-native-paper";
import { Theme } from "@react-navigation/native";

interface FontTextProps {
    style?: TextStyle
    onPress?: (e?: GestureResponderEvent) => void
    fontset?: ReactNativePaper.Fontset
}
const FontText: FunctionComponent<FontTextProps> = (props) => {
    const theme = useTheme();
    const style = {
        ...(props.fontset ? props.fontset : theme.fontsets.paragraph),
        ...props.style
    }; 
    return (
        <Text style={style} onPress={props.onPress}>
          {props.children}
        </Text>
    )
}
export default FontText
  