import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../App';

import * as Yup from 'yup';

import Form from '../common/forms/Form';
import FormField from '../common/forms/FormField';
import FormButton from '../common/forms/FormButton';
import FormErrorMessage from '../common/forms/FormErrorMessage';

import { registerWithEmail, IUserInfo } from '../../../../controllers/src/firebase/Firebase';

const validationSchema = Yup.object().shape({
    name:   Yup.string().required().label('Name'),
    email:  Yup.string().required('Please enter valid email').label('Email'),
    password: Yup.string().required()
        .min(6, 'Password must have at least 6 characters').label('Password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Confirm Password must match Password')
        .required('Confirm Passward is required') 
});

interface ISignUpProps {
    navigation: StackNavigationProp<RootStackParamList, "SignUp">
}
interface ISignUpInputValues extends IUserInfo { 
    name : string
}

const SignUpScreen = ({navigation}: ISignUpProps) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('eye');
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);
    const [registerError, setRegisterError] = useState('');

    function handlePasswordVisibility() {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      }
    
    function handleConfirmPasswordVisibility() {
        if (confirmPasswordIcon === 'eye') {
            setConfirmPasswordIcon('eye-off');
            setConfirmPasswordVisibility(!confirmPasswordVisibility);
        } else if (confirmPasswordIcon === 'eye-off') {
            setConfirmPasswordIcon('eye');
            setConfirmPasswordVisibility(!confirmPasswordVisibility);
        }
    }

    async function handleOnSignUp(values : ISignUpInputValues) {
        console.log("SignUp pressed ");
        console.log(values);

        try {
            await registerWithEmail(values);
            //TODO : USER Information Register in DB 
            //TODO : USER Information Register in Local
        } catch(e) {
            setRegisterError(e.message);
        }
    }

    return (
        <View style={{flex:1}}> 
            <Form
                initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values: ISignUpInputValues) => handleOnSignUp(values)}
            >
                <FormField
                    name="name"
                    leftIcon="account"
                    placeholder="Enter name"
                    autoFocus={true}
                    theme={null}
                />
                <FormField
                    name="email"
                    leftIcon="email"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    theme={null}
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
                    theme={null}
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
                    theme={null}
                />
                <FormButton title={'Register'} />
                {<FormErrorMessage error={registerError} visible={true} />}
            </Form>
        </View>
    );
}

export default SignUpScreen;
