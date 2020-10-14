import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import Header, { SearchBar } from "../../components/Header"
import { useTheme } from "react-native-paper";

const stlyes = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
  }
})

const Home = () => {
  return (
    <View style={stlyes.container}>
      <SearchBar />
      <View style={stlyes.body}>

      </View>
    </View>
  );
};
export default Home;