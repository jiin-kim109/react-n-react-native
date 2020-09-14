import React, {FunctionComponent} from 'react';
import { Formik } from 'formik';

interface IFormProps { 
    children : any;
    initialValues : any; 
    onSubmit : (e: any) => void ; 
    validationchema: any;
}

const Form : FunctionComponent<IFormProps> = (props) => {
    return (
        <Formik
            initialValues = {props.initialValues}
            validationSchema = {props.validationchema}
            onSubmit={props.onSubmit}
        >
            {()=> <React.Fragment>{props.children}</React.Fragment>}
        </Formik>
    );
}

export default From; 
