import React, { FunctionComponent, useState } from "react";
import { 
    View,
    StyleSheet,
} from "react-native";
import { 
    useSearch
} from "@hashes/controllers"
import { Searchbar } from 'react-native-paper'
import { useTheme } from "react-native-paper";
import FontText from "./Text";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title?: string,
    subtitle?: string,
    back?: boolean,
    invert?: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ title, subtitle, back, invert, ...props }) => {
    const theme = useTheme()
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        container: {
            height: 65,
            paddingLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderColor: "red",
            backgroundColor: !invert ? theme.colors.white : theme.colors.black
        },
        label: {
            flexDirection: "row",
            alignItems: "center",
        },
        icon: {
            marginRight: 25,
            color: !invert ? theme.colors.black : theme.colors.white
        },
        title: {
            fontSize: 20,
            color: !invert ? theme.colors.black : theme.colors.white
        }
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.label}>
                { back && (
                    <Ionicons 
                        name="md-arrow-back" 
                        size={30} 
                        color="black" 
                        style={styles.icon}
                        onPress={() => back && navigation.goBack()}
                    />
                )}
                { title && (
                    <FontText 
                        fontset={theme.fontsets.header3}
                        style={styles.title}
                    >
                        {title}
                        {subtitle}
                    </FontText>
                )}
            </View>
            {props.children}
        </View>
    )
}

export default Header;

export const SearchBar: React.FunctionComponent = () => {
    const theme = useTheme();
    const { 
      query, 
      onChangeQuery 
    } = useSearch();
    const styles = StyleSheet.create({
      container: {
        height: 70,
        justifyContent: "center",
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.specialColors.disabledBorder,
        borderWidth: 1,
      },
    })
  
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeQuery}
          clearIcon="close-circle"
          value={query}
        />
      </View>
    )
  }