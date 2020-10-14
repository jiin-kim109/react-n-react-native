import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Yup from "yup";
import { useAuthentication } from "@hashes/controllers";
import { RootStackParamList } from "../../components/navigation/AuthStack";
import FontText from "../../components/Text";
import { useTheme, Button } from "react-native-paper";
import Header from "../../components/Header"
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

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 15,
  },
  form__bottom: {
    marginTop: 15
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

interface ForgotPasswordScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "ForgotPassword">;
}

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const [sentEmail, setEmail] = useState<string | null>(null);
  const authData = useAuthentication();
  const { 
    errorMessage,
    setErrorMessage,
    resetPassword } = authData;
  const theme = useTheme();

  async function onResetPassword(email: string) {
    try {
      await resetPassword(email);
      setEmail(email);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    !sentEmail ? (
    <View style={{ flex: 1 }}>
      <Header back />
      <Form
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        style={styles.form}
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
        <View style={styles.form__bottom}>
          <FormErrorMessage error={errorMessage} visible />
          <FormButton
            style={{...styles.form__bottom__button, backgroundColor: theme.colors.primaryBlue}}
            submit
          >
            <FontText
              style={{ textAlign: "center", color: theme.colors.white, ...styles.form__bottom__button__font }}
              fontset={theme.fontsets.paragraph}
            >
              Reset Password
            </FontText>         
          </FormButton>
        </View>
      </Form>
    </View>)
    : (<EmailSentScreen email={sentEmail} onPress={() => navigation.navigate("SignIn")}/>));
};

const EmailSentScreen: React.FC<{email: string, onPress: () => void}> = (props) => {
  const theme = useTheme();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, alignContent: "center", justifyContent: "center"}}>
        <FontText
          fontset={theme.fontsets.header3}
        >
          Reset Email has been sent to {props.email}!
        </FontText>     
      </View>
      <View style={{flex: 1}}>
        <Button 
          style={{...styles.form__bottom__button, backgroundColor: theme.colors.primaryGreen}}
          onPress={props.onPress}
        >
          <FontText
            style={{ textAlign: "center", color: theme.colors.white, ...styles.form__bottom__button__font}}
            fontset={theme.fontsets.paragraph}
          >
            Confirm
          </FontText>             
        </Button>
      </View>
    </View>
  )
}

export default ForgotPasswordScreen;
