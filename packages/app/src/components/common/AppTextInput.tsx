import React, { FunctionComponent, ReactNode } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Styles from './styles/Styles';
import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';

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
        <View style={[styles.container, { width }]}>
            {leftIcon && (
                <MaterialCommunityIcons
                    name={leftIcon} 
                    size={20}
                    color={Styles.Color.PrimaryGray}
                    style={styles.icon}
                />
            )}
            <TextInput
                style={styles.input}
                placeholderTextColor={Styles.Color.PrimaryGray}
                {...otherProps}
            />
            {rightIcon && (
                <TouchableOpacity onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                    name={rightIcon}
                    size={20}
                    color={Styles.Color.PrimaryGray}
                    style={styles.rightIconStyles}
                />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
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
  
