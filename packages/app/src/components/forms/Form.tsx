import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as ReactNativePaper from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Formik, useFormikContext } from "formik";
import { TextInput, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";
import * as util from "../../util/util";
import FontText from "../Text";
import { TouchableGradient } from "../Button";

/**
 * Form
 *
 * Formik wrapper component
 */
interface FormProps {
  initialValues: any;
  onSubmit: (e: any) => void;
  validationSchema: any;
}

const Form: FunctionComponent<FormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  ...props
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{props.children}</>}
    </Formik>
  );
};

export default Form;

/**
 * FormInput
 *
 * TextInput component for Form
 */
export interface FormInputProps {
  leftIconName?: string;
  width?: string;
  rightIconName?: string;
  handlePasswordVisibility?: (event: GestureResponderEvent) => void;
  config?: Partial<TextInputProps>;
}

export const FormInput: FunctionComponent<FormInputProps> = ({
  leftIconName,
  rightIconName,
  handlePasswordVisibility,
  config,
}) => {
  const theme = useTheme();
  const FormInputStyles = StyleSheet.create({
    container: {
      borderRadius: 25,
      flexDirection: "row",
      padding: 15,
      marginVertical: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      width: "100%",
      fontSize: 18,
    },
    rightIconStyles: {
      alignSelf: "center",
      marginLeft: 10,
    },
  });
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <View
      style={{
        ...FormInputStyles.container,
        backgroundColor: theme.colors.white,
        width: "100%",
      }}
    >
      {leftIconName && (
        <MaterialCommunityIcons
          name={leftIconName}
          size={20}
          color={theme.colors.specialColors.disabledBorder}
          style={FormInputStyles.icon}
        />
      )}
      <TextInput
        style={{ ...FormInputStyles.input, color: theme.colors.black }}
        placeholderTextColor={theme.colors.specialColors.disabledText}
        theme={ReactNativePaper.DefaultTheme}
        mode="outlined"
        {...config}
      />
      {rightIconName && (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIconName}
            size={20}
            color={theme.colors.specialColors.disabledBorder}
            style={FormInputStyles.rightIconStyles}
          />
        </TouchableOpacity>
      )}
    </View>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

/**
 * FormButton
 *
 * Button component for Form
 */
interface FormButtonProps {
  title: string;
}

export const FormButton: FunctionComponent<FormButtonProps> = (props) => {
  const { handleSubmit } = useFormikContext();
  const theme = useTheme();
  const styles = StyleSheet.create({
    buttonView: {
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
  return (
    <LinearGradient
      colors={[
        util.ToRgbA(theme.colors.white, 0.1),
        util.ToRgbA(theme.colors.white, 1.0),
      ]}
      start={[0.0, 0.0]}
      end={[0.0, 0.5]}
      style={styles.buttonView}
    >
      <TouchableGradient
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
        isShadow
      >
        <FontText
          style={{ textAlign: "center", color: theme.colors.white }}
          fontset={theme.fontsets.header3}
        >
          {props.title}
        </FontText>
      </TouchableGradient>
    </LinearGradient>
  );
};

/**
 * FormButton
 *
 * Displays error message for Form
 */
interface FormErrorMessageProps {
  error: any;
  visible?: any;
}

export const FormErrorMessage: FunctionComponent<FormErrorMessageProps> = ({
  error,
  visible,
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    errorText: {
      marginLeft: 15,
      color: theme.colors.primaryRed,
      marginBottom: 5,
    },
  });
  if (!error || !visible) {
    return null;
  }
  return (
    <FontText fontset={theme.fontsets.header4} style={styles.errorText}>
      {error}
    </FontText>
  );
};

export interface FormFieldProps extends FormInputProps {
  name: string;
  width?: string | undefined;
  config?: Partial<TextInputProps>;
}

export const FormField: FunctionComponent<FormFieldProps> = ({
  name,
  width,
  config,
}) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext<any>();

  return (
    <>
      <FormInput
        width={width}
        config={{
          value: values[name],
          onChangeText: (text: string) => setFieldValue(name, text),
          onBlur: () => setFieldTouched(name),
          ...config,
        }}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
