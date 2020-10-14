import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainTab from "../../containers/MainScreen";

// Typing props to each stack screen
// undefine means that a screen has no param
// union (e.g. param | undefined) means that the params are optional
export type RootStackParamList = {
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainTab} />
    </Stack.Navigator>
  );
}
