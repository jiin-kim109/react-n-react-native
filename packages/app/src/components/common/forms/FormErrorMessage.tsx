import React, { FunctionComponent } from 'react';
import {StyleSheet, Text } from 'react-native';

import * as Common from '../Common';

interface IFormErrorMessage {
    error : any;
    visible? : any;
}

const FormErrorMessage: FunctionComponent<IFormErrorMessage> = ({error, visible}) => {
    if(!error || !visible) {
        return null; 
    }
    return <Common.FontText fontType="subheader" style={styles.errorText}>{error}</Common.FontText>
}

const styles = StyleSheet.create({
    errorText : {
        marginLeft: 15,
        color: Common.Color.PrimaryRed,
        marginBottom: 5
    }
});

export default FormErrorMessage;