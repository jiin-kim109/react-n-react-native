import React, { Component } from "react";
import { registerRootComponent } from "expo";
import { Provider } from "mobx-react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStore } from "@act/controllers";
import { Root } from "native-base";
import HomeScreen from "./components/HomeScreen";
import LandingPage from "./components/landing/LandingPage";
import SurveyPage from "./components/landing/SurveyPage";

// Set prop types for each route
// undefine means the route has no param
// union (e.g. param | undefined) means that the params are optional
export type RootStackParamList = {
  Landing: undefined;
  Survey: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
class App extends Component {
  private rootStore: RootStore = new RootStore();

  render() {
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
