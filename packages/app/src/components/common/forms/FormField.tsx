import React, { FunctionComponent } from 'react';
import { useFormikContext } from 'formik';

import * as Common from '../Common';
import FormErrorMessage from './FormErrorMessage';

interface IFormFieldProps extends Common.AppTextInputProps {
    name : string,
    width? : undefined, 
    leftIcon : string,
    value? : any,
}

const FormField : FunctionComponent<IFormFieldProps> = ({name, width, ...otherProps}) => {
    const { 
        setFieldTouched,
        setFieldValue,
        values,
        errors,
        touched
    } = useFormikContext<any>();

    return (
        <React.Fragment>
            <Common.AppTextInput
                value={values[name]}
                onChangeText={(text:string)=> setFieldValue(name, text)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <FormErrorMessage error={errors[name]} visible={touched[name]}/>
        </React.Fragment>

    );
}

export default FormField;
