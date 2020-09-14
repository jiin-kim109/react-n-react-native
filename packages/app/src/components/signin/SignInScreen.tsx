import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../App';

import * as Yup from 'yup';

import Form from '../common/forms/Form';
import FormField from '../common/forms/FormField';
import FormButton from '../common/forms/FormButton';
import FormErrorMessage from '../common/forms/FormErrorMessage';

import { signInWithEmail } from '../../../../controllers/src/firebase/Firebase';

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

const SignIn = ({navigation} : ISignInProps) => {
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

    async function handleOnLogin(values : any) {
        const { email, password } = values;
    
        try {
            await signInWithEmail({email, password});
        } catch (error) {
            setLoginError(error.message);
        }
    }

    return (
        <View>
            <Form
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values : any) => handleOnLogin(values)}
            >
                <FormField
                    name="email"
                    leftIcon="email"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
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
                />
                <FormButton title={'Login'} />
                {<FormErrorMessage error={loginError} visible={true} />}
            </Form>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}