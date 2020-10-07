import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import * as ReactNativePaper from "react-native-paper";
import * as Yup from "yup";
import { useTheme } from "react-native-paper";
import { useAuthentication } from "@act/controllers";
import { RootStackParamList } from "../../App";

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
  bottomView: {
    flex: 1,
  },
  button: {
    height: 60,
    marginHorizontal: 30,
    marginTop: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
});

interface SignInScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "SignIn">;
}

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState(null);
  const theme = useTheme();

  const auth = useAuthentication();

  function handlePasswordVisibility() {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(result) => auth.signIn(result.email, result.password)}
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
          rightIconName={rightIcon}
          handlePasswordVisibility={handlePasswordVisibility}
          config={{
            placeholder: "Enter password",
            autoCapitalize: "none",
            autoCorrect: false,
            secureTextEntry: passwordVisibility,
            textContentType: "password",
          }}
        />
        <FormButton title="Login" />
        {loginError ? <FormErrorMessage error={loginError} visible /> : null}
      </Form>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            util.ToRgbA(theme.colors.white, 0.1),
            util.ToRgbA(theme.colors.white, 1.0),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
        >
          <TouchableGradient
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}
            isShadow
          >
            <FontText
              style={{ textAlign: "center", color: theme.colors.white }}
              fontset={theme.fontsets.header3}
            >
              Sign Up
            </FontText>
          </TouchableGradient>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SignInScreen;
