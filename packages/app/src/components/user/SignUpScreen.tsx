import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as ReactNativePaper from "react-native-paper";
import * as Yup from "yup";
import { Injector } from "@act/controllers";
import { NavigationHelpersContext } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

import Form from "../common/forms/Form";
import FormField from "../common/forms/FormField";
import FormButton from "../common/forms/FormButton";
import FormErrorMessage from "../common/forms/FormErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required("Please enter valid email").label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match Password")
    .required("Confirm Passward is required"),
});

interface SignUpScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
}

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("eye");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    true
  );
  const [registerError, setRegisterError] = useState("");

  const auth = Injector.get("Auth");
  const db = Injector.get("DB");

  type SignUpFormProps = {
    email: string;
    password: string;
  };

  function handlePasswordVisibility() {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === "eye") {
      setConfirmPasswordIcon("eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === "eye-off") {
      setConfirmPasswordIcon("eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function onSignUp(result: SignUpFormProps) {
    try {
      await auth.createUserWithEmailAndPassword(result.email, result.password);
    } catch (e) {
      setRegisterError(e.message);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(result: SignUpFormProps) => onSignUp(result)}
      >
        <FormField
          name="name"
          leftIcon="account"
          placeholder="Enter name"
          autoFocus
          theme={ReactNativePaper.DefaultTheme}
        />
        <FormField
          name="email"
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          theme={ReactNativePaper.DefaultTheme}
        />
        <FormField
          name="password"
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          rightIcon={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
          theme={ReactNativePaper.DefaultTheme}
        />
        <FormField
          name="confirmPassword"
          leftIcon="lock"
          placeholder="Confirm password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={confirmPasswordVisibility}
          textContentType="password"
          rightIcon={confirmPasswordIcon}
          handlePasswordVisibility={handleConfirmPasswordVisibility}
          theme={ReactNativePaper.DefaultTheme}
        />
        <FormButton title="Register" />
        <FormErrorMessage error={registerError} visible />
      </Form>
    </View>
  );
};

export default SignUpScreen;
