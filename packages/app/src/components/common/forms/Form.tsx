import React, {FunctionComponent} from 'react';
import { Formik } from 'formik';
import {IFormFieldProps} from './FormField';

interface IFormProps { 
    children : any;
    initialValues : any; 
    onSubmit : (e: any) => void ; 
    validationSchema: any;

}

const Form : FunctionComponent<IFormProps> = ({children, initialValues, onSubmit, validationSchema, ...props}) => {
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit={onSubmit}
        >
            {()=> <React.Fragment>{children}</React.Fragment>}
        </Formik>
    );
}

export default Form; 
