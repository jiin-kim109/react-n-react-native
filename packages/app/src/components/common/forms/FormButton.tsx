import React, { FunctionComponent } from 'react';
import {StyleSheet} from 'react-native';
import { useFormikContext } from 'formik';

import * as Common from "../Common";
import { LinearGradient } from "expo-linear-gradient";

interface IFormButton { 
    title : string; 
}

const FormButton : FunctionComponent<IFormButton> = (props) => {
    const { handleSubmit } = useFormikContext();
    return (
        <LinearGradient
          colors={[
            Common.Color.ToRgbA(Common.Color.White, 0.1),
            Common.Color.ToRgbA(Common.Color.White, 1.0),
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 0.5]}
          style={styles.buttonView}
        >
          <Common.TouchableGradient
            style={styles.button}
            onPress={() => {handleSubmit}}
            isShadow
          >
            <Common.FontText
              style={{ textAlign: "center", color: Common.Color.White }}
              fontType="header_3"
            >
              {props.title}
            </Common.FontText>
          </Common.TouchableGradient>
        </LinearGradient>
    );  
} 

const styles = StyleSheet.create({
    buttonView : {
        flex : 1,
    },
    button : {
        height: 60,
        marginHorizontal: 30,
        marginTop: 40,
        borderRadius: 10,
        justifyContent: "center",
    }

});

export default FormButton; 
