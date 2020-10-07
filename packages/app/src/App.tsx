/* eslint-disable */
import React, { Component } from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StateProvider } from "react-redux";
import {
  store,
  setPlatform,
} from "@act/controllers";
import * as Font from "expo-font";
import { Image, YellowBox } from "react-native";
import { Provider as ThemeProvider } from 'react-native-paper';
import theme from "./styles/styles";
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash';
import Routes from "./components/navigation/Routes"

interface Props {
  dummy: string
}

interface State {
  loadEssentials: boolean
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loadEssentials: false,
    };
  }
  
  async componentDidMount() {
    setPlatform('app')
    await Font.loadAsync({
      "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    });
    this.setState({
      loadEssentials: true,
    });
  }

  render() {
    const { loadEssentials } = this.state;
    if (!loadEssentials) {
      return (
        <Image style={{ flex: 1 }} source={require("../assets/splash.png")} />
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <StateProvider store={store}>
          <StatusBar style="light" backgroundColor="black"/>
          <Routes/>
        </StateProvider>
      </ThemeProvider>
    );
  }
}

export default registerRootComponent(App);

// Ignore timeout error on the React Native
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = (message: any) => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};