import React, { useState } from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Yup from "yup";
import { useAuthentication } from "@act/controllers";
import { RootStackParamList } from "../../components/navigation/AuthStack";

import Form, {
  FormButton,
  FormField,
  FormErrorMessage,
} from "../../components/forms/Form";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a registered email")
    .email("Enter a valid email")
    .label("Email"),
});

interface ISignUpPros {
  navigation: StackNavigationProp<RootStackParamList, "ForgotPassword">;
}

const ForgotPasswordScreen = ({ navigation }: ISignUpPros) => {
  const [customError, setCustomError] = useState("");
  const { resetPassword } = useAuthentication();

  async function onResetPassword(email: string) {
    try {
      await resetPassword(email);
      navigation.navigate("Home");
    } catch (error) {
      setCustomError(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Form
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(result) => onResetPassword(result.email)}
      >
        <FormField
          name="email"
          leftIconName="email"
          config={{
            placeholder: "Enter email",
            autoCapitalize: "none",
            keyboardType: "email-address",
            textContentType: "emailAddress",
            autoFocus: true,
          }}
        />
        <FormButton title="Forgot Password" />
        <FormErrorMessage error={customError} visible />
      </Form>
    </View>
  );
};

export default ForgotPasswordScreen;
