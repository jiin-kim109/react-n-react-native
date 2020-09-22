import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../App';
import { LinearGradient } from "expo-linear-gradient";
import * as ReactNativePaper from 'react-native-paper';

import * as Yup from 'yup';

import Form from '../common/forms/Form';
import FormField from '../common/forms/FormField';
import FormButton from '../common/forms/FormButton';
import FormErrorMessage from '../common/forms/FormErrorMessage';
import * as Common from "../common/Common";

import { signInWithEmail, IUserInfo } from '../../../../controllers/src/firebase/Firebase';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Please enter a registered email')
        .email()
        .label('Email'),
    password: Yup.string()
        .required()
        .min(6, 'Password must have at least 6 characters')
        .label('Password')
});

interface ISignInProps { 
    navigation: StackNavigationProp<RootStackParamList, "SignIn">
}

const SignInScreen = ({navigation} : ISignInProps) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [loginError, setLoginError] = useState('');

    function handlePasswordVisibility() {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    }

    async function handleOnLogin(values : IUserInfo) {
        try {
            await signInWithEmail(values);
        } catch (error) {
            setLoginError(error.message);
        }
    }

    return (
        <View style={{flex:1}}>
            <Form
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values : IUserInfo) => handleOnLogin(values)}
            >
                <FormField
                    name="email"
                    leftIcon="email"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
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
                <FormButton title={'Login'} />
                {<FormErrorMessage error={loginError} visible={true} />}
            </Form>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
                <LinearGradient
                    colors={[
                        Common.Color.ToRgbA(Common.Color.White, 0.1),
                        Common.Color.ToRgbA(Common.Color.White, 1.0),
                    ]}
                    start={[0.0, 0.0]}
                    end={[0.0, 0.5]}
                    >
                    <Common.TouchableGradient
                        style={styles.button}
                        onPress={() => navigation.navigate("SignUp")}
                        isShadow
                    >
                        <Common.FontText
                        style={{ textAlign: "center", color: Common.Color.White }}
                        fontType="header_3"
                        >
                        Sign Up
                        </Common.FontText>
                    </Common.TouchableGradient>
                </LinearGradient>
            </View>
        </View>
    );
}

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

export default SignInScreen;
