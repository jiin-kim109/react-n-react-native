/* eslint-disable */
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { 
    Text, 
    StyleSheet, 
    TextStyle,
    Animated,
    GestureResponderEvent
 } from "react-native"; 

const fontSize: Record<string, number>= {
    paragraph: 14,
    header: 38,
    header_2: 32,
    header_3: 24,
    subheader: 18,
}

export type FontPresetType = 'custom' | 'paragraph' | 'header' | 'header_2' | 'header_3' | 'subheader';

function getFontPreset(textType: FontPresetType = 'paragraph') {
    switch(textType){
        case 'paragraph':
            return {
                fontSize: fontSize.paragraph,
                fontFamily: 'OpenSans-Regular',
            }
        case 'header':
            return {
                fontSize: fontSize.header,
                fontFamily: 'Roboto-Regular',
            }
        case 'header_2':
            return {
                fontSize: fontSize.header_2,
                fontFamily: 'Roboto-Regular',
            }
        case 'header_3':
            return {
                fontSize: fontSize.header_3,
                fontFamily: 'Roboto-Regular'
            }   
        case 'subheader':
            return {
                fontSize: fontSize.subheader,
                fontFamily: 'Roboto-Regular'            
            }
    }
}

interface FontTextProps {
    style?: TextStyle
    onPress?: (e?: GestureResponderEvent) => void
    fontType?: FontPresetType
}
export const FontText: FunctionComponent<FontTextProps> = (props) => {
    const style = {
        ...getFontPreset(props.fontType),
        ...props.style
    }; 
    return (
        <Text style={style} onPress={props.onPress}>
          {props.children}
        </Text>
    )
}