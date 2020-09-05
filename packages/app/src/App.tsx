import React, { Component } from "react";
import { registerRootComponent } from "expo";
import { Provider } from "mobx-react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RootStore,
  ServiceInjector,
  SERVICE_SAMPLE_PLATFORM_TOKEN,
} from "@act/controllers";
import * as Font from "expo-font";
import { Image } from "react-native";

import HomeScreen from "./components/HomeScreen";
import LandingPage from "./components/landing/LandingPage";
import SurveyPage from "./components/landing/SurveyPage";
import SamplePlatformService from "./services/SamplePlatformService";
import HomeTab from "./components/HomeTab";
// Set prop types for each route
// undefine means the route has no param
// union (e.g. param | undefined) means that the params are optional
export type RootStackParamList = {
  Landing: undefined;
  Survey: undefined;
  Home: undefined;
};

interface Props {
  dummy: string;
}

interface State {
  assetLoaded: boolean;
  signedIn: boolean;
  signInTestMode : boolean;
}

const Stack = createStackNavigator<RootStackParamList>();
class App extends Component<Props, State> {
  private rootStore: RootStore = new RootStore();

  constructor(props: Props) {
    super(props);
    this.state = {
      assetLoaded: false,
      signedIn: false,
      signInTestMode: true
    };
  }

  async componentDidMount() {
    this.registerPlatformServices();
    await Font.loadAsync({
      "Kufam-Italic-VariableFont_wght": require("../assets/fonts/Kufam-Italic-VariableFont_wght.ttf"),
    });
    this.setState({ assetLoaded: true });
    this.setState({signedIn: true}); // TEST - Signed up 
  }

  registerPlatformServices = () => {
    ServiceInjector.set(
      SERVICE_SAMPLE_PLATFORM_TOKEN,
      new SamplePlatformService()
    );
  };

  render() {
    const { assetLoaded, signedIn, signInTestMode } = this.state;
    if (signInTestMode) {
      return (
        <>
        
        </>
      )
    }
    if (!assetLoaded) {
      return (
        <Image style={{ flex: 1 }} source={require("../assets/splash.png")} />
      );
    }
    if (signedIn) {
      return (
        <Provider rootStore={this.rootStore}>
          <NavigationContainer>
            <HomeTab/>
          </NavigationContainer>
        </Provider>
      )
    }
    return (
      <Provider rootStore={this.rootStore}>
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
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default registerRootComponent(App);
