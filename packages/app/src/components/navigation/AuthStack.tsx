import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "../../containers/landing/LandingPage";
import SurveyPage from "../../containers/landing/SurveyPage";
import HomeTab from "../../containers/HomeTab";
import SignInScreen from "../../containers/user/SignInScreen";
import SignUpScreen from "../../containers/user/SignUpScreen";
import ForgotPasswordScreen from "../../containers/user/ForgotPasswordScreen";

// Typing props to each stack screen
// undefine means that a screen has no param
// union (e.g. param | undefined) means that the params are optional
export type RootStackParamList = {
  Landing: undefined;
  Survey: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
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
  );
}
