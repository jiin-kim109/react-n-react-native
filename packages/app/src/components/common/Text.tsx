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
import * as Styles from './styles/Styles';

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

/**
 * AppTextInput
 * TextInput wrapper
 */

export interface AppTextInputProps extends TextInputProps {
    leftIcon? : any;
    width? : string; 
    rightIcon? : any; 
    handlePasswordVisibility? : (event : GestureResponderEvent) => void ; 
};

export const AppTextInput : FunctionComponent<AppTextInputProps>  = ({
    leftIcon,
    width ="100%",
    rightIcon, 
    handlePasswordVisibility,
    ...otherProps}) => {
    return (
        <View style={[appTextInputStyles.container, { width }]}>
            {leftIcon && (
                <MaterialCommunityIcons
                    name={leftIcon} 
                    size={20}
                    color={Styles.Color.PrimaryGray}
                    style={appTextInputStyles.icon}
                />
            )}
            <TextInput
                style={appTextInputStyles.input}
                placeholderTextColor={Styles.Color.PrimaryGray}
                {...otherProps}
            />
            {rightIcon && (
                <TouchableOpacity onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                    name={rightIcon}
                    size={20}
                    color={Styles.Color.PrimaryGray}
                    style={appTextInputStyles.rightIconStyles}
                />
                </TouchableOpacity>
            )}
        </View>
    );
};

const appTextInputStyles = StyleSheet.create({
    container: {
        backgroundColor: Styles.Color.White,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        width: '100%',
        fontSize: 18,
        color: Styles.Color.Black
    },
    rightIconStyles: {
        alignSelf: 'center',
        marginLeft: 10
    }
});
  