import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthentication } from "@hashes/controllers";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Routes() {
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      {user.currentUser ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
