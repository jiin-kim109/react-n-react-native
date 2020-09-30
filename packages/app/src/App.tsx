/* eslint-disable */
import React, { Component } from "react";
import { registerRootComponent } from "expo";
import { Provider } from "mobx-react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RootStore,
  Injector,
} from "@act/controllers";
import * as Font from "expo-font";
import { Image, YellowBox } from "react-native";
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash';

import LandingPage from "./components/landing/LandingPage";
import SurveyPage from "./components/landing/SurveyPage";
import HomeTab from "./components/HomeTab";
import SignInScreen from './components/user/SignInScreen';
import SignUpScreen from './components/user/SignUpScreen';
import ForgotPasswordScreen from './components/user/ForgotPasswordScreen';
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
  private rootStore: RootStore = new RootStore();

  constructor(props: Props) {
    super(props);
    this.state = {
      loadEssentials: false,
    };
  }
  
  async componentDidMount() {
    Injector.setScope('app');

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
      <Provider rootStore={this.rootStore}>
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