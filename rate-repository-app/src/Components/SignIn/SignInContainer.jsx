import React from "react"; 
import { Formik } from "formik";
import { Pressable, View , StyleSheet} from "react-native";  
import * as yup from 'yup';  

import FormikTextInput from '../Extra/FormikTextInput';
import Text from "../Extra/Text";
import theme from "../../thene";  


const styles = StyleSheet.create({
  container:{
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.white,
    display: "flex",
    marginBottom: 10
  },
  padding:{
    paddingTop: 10,
    paddingLeft: 10, 
    paddingRight: 10
  } ,
  box:{
    height: 46, 
    borderRadius: 5,
    borderWidth: 1, 
    marginBottom: 5
  },
  textBox:{ 
    borderColor: theme.colors.lightGray,
    paddingLeft: 10,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  },
  buttonBox:{
    backgroundColor: theme.colors.primary,  
    borderColor: theme.colors.white,
    justifyContent: 'center'
  },
  buttonText:{ 
    color: theme.colors.white,  
    marginRight: 10,
    marginLeft: 10,  
    alignSelf:'center', 
  }
  
  // ...
}); 

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')}
);

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({onSubmit}) =>{ 
  return(
    <View  style={[styles.container, styles.padding]}>
      <FormikTextInput    name="username" placeholder="Username" />
      <FormikTextInput   name="password" placeholder="Password" secureTextEntry/>
      <Pressable onPress={onSubmit}  > 
        <View style={[styles.box, styles.buttonBox]}>
          <Text   
            style={styles.buttonText}
            fontWeight="bold" 
            fontSize="subheading"  >Sign In</Text>  
        </View>
      </Pressable>
    </View>
  );
    
};

const SignInContainer = ({onSubmit}) => { 

  
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;