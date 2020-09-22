import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../App';
import * as ReactNativePaper from 'react-native-paper';

import * as Yup from 'yup';

import Form from '../common/forms/Form';
import FormField from '../common/forms/FormField';
import FormButton from '../common/forms/FormButton';
import FormErrorMessage from '../common/forms/FormErrorMessage';

import { passwordReset, IUserInfo } from '../../../../controllers/src/firebase/Firebase';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter a registered email')
        .email('Enter a valid email')
        .label('Email')
});

interface ISignUpPros {
    navigation: StackNavigationProp<RootStackParamList, 'ForgotPassword'>
}

const ForgotPasswordScreen = ({navigation} : ISignUpPros) => {
    const [customError, setCustomError] = useState('');

    async function handlePasswordReset(values : IUserInfo) {
        try {
            await passwordReset(values);
            navigation.navigate('SignIn');
        } catch (error) {
            setCustomError(error.message);
        }
    }

    return (
        <View style={{flex:1}}>
            <Form
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={values => handlePasswordReset(values)}
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
                <FormButton title="Forgot Password" />
                {<FormErrorMessage error={customError} visible={true} />}
            </Form>
        </View>
    )
}

export default ForgotPasswordScreen;
