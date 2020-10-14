import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import * as Yup from "yup";
import { useTheme } from "react-native-paper";
import { useAuthentication } from "@hashes/controllers";
import { RootStackParamList } from "../../components/navigation/AuthStack";
import Header from "../../components/Header"

import FontText from "../../components/Text";
import { TouchableGradient } from "../../components/Button";
import Form, {
  FormButton,
  FormField,
  FormErrorMessage,
} from "../../components/forms/Form";
import * as util from "../../util/util";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a registered email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
});

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 15,
  },
  form__bottom: {
    marginTop: 30
  },
  form__bottom__button: {
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  form__bottom__button__font: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

interface SignInData {
  email: string;
  password: string;
}

interface SignInScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "SignIn">;
}

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const theme = useTheme();
  const authData = useAuthentication();
  const 
  { passwordVisibility, 
    passwordIcon, 
    errorMessage, 
    signIn, 
    setErrorMessage,
    handlePasswordVisibility } = authData;
    
  async function onSignIn(result: SignInData) {
    try {
      await signIn(result.email, result.password);
      navigation.navigate("Main");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Sign In" />
      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        style={styles.form}
        onSubmit={(result: SignInData) => onSignIn(result)}
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
        <FormField
          name="password"
          leftIconName="lock"
          rightIconName={passwordIcon}
          handlePasswordVisibility={handlePasswordVisibility}
          config={{
            placeholder: "Enter password",
            autoCapitalize: "none",
            autoCorrect: false,
            secureTextEntry: passwordVisibility,
            textContentType: "password",
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <FontText style={{color: theme.colors.lightBlue, marginTop: 5}}>Forgot Password?</FontText>
        </TouchableOpacity>
        
        <View style={styles.form__bottom}>
          {errorMessage ? <FormErrorMessage error={errorMessage} visible /> : null}
          <FormButton
            style={{marginBottom: 20, ...styles.form__bottom__button, backgroundColor: theme.colors.primaryGreen}}
            submit
          >
            <FontText
              style={{ textAlign: "center", color: theme.colors.white, ...styles.form__bottom__button__font }}
              fontset={theme.fontsets.paragraph}
            >
              Login
            </FontText>         
          </FormButton>
          <FormButton
            style={{...styles.form__bottom__button, backgroundColor: theme.colors.primaryBlue}}
            onPress={() => navigation.navigate("SignUp")}
          >
            <FontText
                style={{ textAlign: "center", color: theme.colors.white, ...styles.form__bottom__button__font }}
                fontset={theme.fontsets.paragraph}
              >
                Sign Up
              </FontText>         
          </FormButton>
        </View>
      </Form>
    </View>
  );
};

export default SignInScreen;
