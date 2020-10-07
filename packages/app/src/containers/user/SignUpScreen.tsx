import React, { useState } from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Yup from "yup";
import { useAuthentication } from "@act/controllers";
import { RootStackParamList } from "../../App";
import Form, {
  FormButton,
  FormField,
  FormErrorMessage,
} from "../../components/forms/Form";

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

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === "eye") {
      setConfirmPasswordIcon("eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === "eye-off") {
      setConfirmPasswordIcon("eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
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
        onSubmit={(result) => auth.signUp(result.email, result.password)}
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
        <FormButton title="Register" />
        <FormErrorMessage error={registerError} visible />
      </Form>
    </View>
  );
};

export default SignUpScreen;
