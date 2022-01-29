import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup'

const Mesinfos = (props) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })
  return (
    <View style={styles.container}>
     <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ email: '', password: '' }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,
   }) => (
     <>
       <TextInput
         name="email"
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
       {errors.email &&
         <Text style={{ fontSize: 16, color: 'red' }}>{errors.email}</Text>
       }
       <TextInput
         name="password"
         placeholder="Password"
         style={styles.textInput}
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry
       />
       {errors.password &&
         <Text style={{ fontSize: 16, color: 'red' }}>{errors.password}</Text>
       }
       <Button
         onPress={handleSubmit}
         title="LOGIN"
         disabled={!isValid}
       />
     </>
   )}
 </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  // container : {
  //     flex: 1 ,
  //     flexGrow: 1
  // },
  // titleHeader: {
  //     fontSize : 17,
  //     textAlign : 'center',
  //     fontWeight : 'bold'
  // }
  container: {
    flex: 1,
    alignItems: "center",
  },
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
  },
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});

export default Mesinfos;
