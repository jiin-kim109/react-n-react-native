import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Yup from "yup";
import { useAuthentication } from "@hashes/controllers";
import { RootStackParamList } from "../../components/navigation/AuthStack";
import Form, {
  FormButton,
  FormField,
  FormErrorMessage,
} from "../../components/forms/Form";
import { useTheme } from "react-native-paper";
import FontText from "../../components/Text";
import Header from "../../components/Header"

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

interface SignUpData {
  email: string;
  password: string;
}
interface SignUpScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
}

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const theme = useTheme();
  const authData = useAuthentication();
  const { 
    passwordVisibility,
    passwordIcon,
    confirmPasswordVisibility,
    confirmPasswordIcon,
    errorMessage,
    signUp,
    setErrorMessage,
    handlePasswordVisibility,
    handleConfirmPasswordVisibility,
   } = authData;

  async function onSignUp(result: SignUpData) {
    try {
      await signUp(result.email, result.password);
      navigation.navigate("Main");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Sign Up" back/>
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        style={styles.form}
        onSubmit={(result: SignUpData) => onSignUp(result)}
      >
        <FormField
          name="name"
          leftIconName="account"
          config={{
            placeholder: "Enter name",
            autoFocus: true,
          }}
        />
        <FormField
          name="email"
          leftIconName="email"
          config={{
            placeholder: "Enter email",
            autoCapitalize: "none",
            keyboardType: "email-address",
            textContentType: "emailAddress",
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
        <FormField
          name="confirmPassword"
          leftIconName="lock"
          rightIconName={confirmPasswordIcon}
          handlePasswordVisibility={handleConfirmPasswordVisibility}
          config={{
            placeholder: "Confirm password",
            autoCapitalize: "none",
            autoCorrect: false,
            secureTextEntry: confirmPasswordVisibility,
            textContentType: "password",
          }}
        />
        <View style={styles.form__bottom}>
          <FormButton
            style={{marginBottom: 20, ...styles.form__bottom__button, backgroundColor: theme.colors.primaryBlue}}
            submit
          >
            <FontText
              style={{ textAlign: "center", color: theme.colors.white, ...styles.form__bottom__button__font }}
              fontset={theme.fontsets.paragraph}
            >
              Register
            </FontText>         
          </FormButton>
        </View>
        <FormErrorMessage error={errorMessage} visible />
      </Form>
    </View>
  );
};

export default SignUpScreen;
