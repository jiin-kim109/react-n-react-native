import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTab from "../../containers/HomeTab";

// Typing props to each stack screen
// undefine means that a screen has no param
// union (e.g. param | undefined) means that the params are optional
export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeTab} />
    </Stack.Navigator>
  );
}
