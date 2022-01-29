import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import { Formik } from "formik";
import * as yup from "yup";

const Mesinfos = (props) => {
  const loginValidationSchema = yup.object().shape({
    nom : yup 
      .string()
      .required('nom required'),
      prenom : yup 
      .string()
      .required('prénom required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{nom : "", prenom: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
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
              <Card>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>NOM DE FAMILLE</Text>
                  <TextInput
                    name="nom"
                    placeholder="nom"
                    style={styles.textInput}
                    onChangeText={handleChange("nom")}
                    onBlur={handleBlur("nom")}
                    value={values.Nom}
                  />
                </View>
                {errors.nom && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.nom}
                  </Text>
                )}
                <Card.Divider />
                {/* second form */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>PRÉNOM</Text>
                  <TextInput
                    name="prenom"
                    placeholder="prénom"
                    style={styles.textInput}
                    onChangeText={handleChange("prenom")}
                    onBlur={handleBlur("prenom")}
                    value={values.prenom}
                  />
                </View>
                {errors.prenom && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.prenom}
                  </Text>
                )}
                <Card.Divider />
                  {/* third form */}
                  <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>Email</Text>
                  <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={styles.textInput}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                </View>
                {errors.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
                <Card.Divider />

                {/* <TextInput
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
       } */}
              </Card>
              <Card>
                <Button
                  onPress={handleSubmit}
                  title="SAUVEGARDER LES MODIFICATIONS"
                  disabled={!isValid}
                />
              </Card>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: "bold",
    color: "#43484D",
    paddingBottom: "3%",
    marginTop: "1%",
  },
  container: {
    flex: 1,
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
    backgroundColor: "white",
  },
});

export default Mesinfos;
