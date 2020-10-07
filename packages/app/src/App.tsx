/* eslint-disable */
import React, { Component } from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  store,
  injector,
} from "@act/controllers";
import * as Font from "expo-font";
import { Image, YellowBox } from "react-native";
import { Provider as ThemeProvider } from 'react-native-paper';
import theme from "./styles/styles";
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash';

import LandingPage from "./containers/landing/LandingPage";
import SurveyPage from "./containers/landing/SurveyPage";
import HomeTab from "./containers/HomeTab";
import SignInScreen from './containers/user/SignInScreen';
import SignUpScreen from './containers/user/SignUpScreen';
import ForgotPasswordScreen from './containers/user/ForgotPasswordScreen';

// Set prop types for each route
// undefine means the route has no param
// union (e.g. param | undefined) means that the params are optional
export type RootStackParamList = {
  Landing: undefined;
  Survey: undefined;
  Home: undefined;
  SignIn: undefined; 
  SignUp: undefined; 
  ForgotPassword: undefined; 
};

interface Props {
  dummy: string;
}

interface State {
  loadEssentials: boolean;
}

const Stack = createStackNavigator<RootStackParamList>();

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loadEssentials: false,
    };
  }
  
  async componentDidMount() {
    injector.setScope('app');

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
        <Provider store={store}>
          <StatusBar style="light" backgroundColor="black"/>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen
                name="Landing"
                component={LandingPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Survey"
                component={SurveyPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Home" component={HomeTab} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default registerRootComponent(App);

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = (message: any) => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};