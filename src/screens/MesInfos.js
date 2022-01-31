import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Mesinfos = (props) => {
  const monProfilValidationSchema = yup.object().shape({
    nom: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Seulement des alphabets sont acceptes")
    .required("Nom obligatoire"),
    prenom: yup.string()
    .matches(/^[aA-zZ\s]+$/, "Seulement des alphabets sont acceptes")
    .required("Prénom obligatoire"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Adresse email obligatoire"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("mot de passe obligatiore"),
      tel : yup 
        .string()
        .min(8, 'Le numéro de téléphone doit être composé de 8 chiffres')
        .matches(/^[0-9]+$/, "doit être nombre")
        .max(8, 'Le numéro de téléphone doit être composé de 8 chiffres')
        .required('Numero de tel obligatoire'),
        adresse : yup 
        .string()
        .required('Adresse de résidence obligatoire'),
        codeP : yup 
        .string()
        .min(5, 'Le code postal doit être composé de 5 chiffres')
        .max(5, 'Le code postal doit être composé de 5 chiffres')
        .matches(/^[0-9]+$/, "doit être nombre")        
        .required('Code postal obligatoire')
      });

  return (
    <ScrollView>
      <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Formik
          validationSchema={monProfilValidationSchema}
          initialValues={{ nom: "", prenom: "", email: "", password: "", tel:  "", adresse : "", codeP: "" }}
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
                    placeholder="Nom"
                    style={styles.textInput}
                    onChangeText={handleChange("nom")}
                    onBlur={handleBlur("nom")}
                    value={values.nom}
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
                    placeholder="Prénom"
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
                    placeholder="Adresse Email"
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
                {/* fourth form */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>Mot de passe</Text>
                  <TextInput
                    name="password"
                    placeholder="Mot de passe"
                    style={styles.textInput}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                </View>
                {errors.password && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
                <Card.Divider />
             {/* cinqueme form */}
             <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>Téléphone</Text>
                  <TextInput
                    name="tel"
                    placeholder="Numéro de téléphone"
                    style={styles.textInput}
                    onChangeText={handleChange("tel")}
                    onBlur={handleBlur("tel")}
                    value={values.tel}
                  />
                </View>
                {errors.tel && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.tel}
                  </Text>
                )}
                <Card.Divider />
               {/* sixeme form */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>Adresse</Text>
                  <TextInput
                    name="adresse"
                    placeholder="Adresse de résidence"
                    style={styles.textInput}
                    onChangeText={handleChange("adresse")}
                    onBlur={handleBlur("adresse")}
                    value={values.adresse}
                  />
                </View>
                {errors.adresse && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.adresse}
                  </Text>
                )}
                <Card.Divider />
              {/* septieme form */}
              <View style={{ flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>Code Postal</Text>
                  <TextInput
                    name="codeP"
                    placeholder="78000"
                    style={styles.textInput}
                    onChangeText={handleChange("codeP")}
                    onBlur={handleBlur("codeP")}
                    value={values.codeP}
                  />
                </View>
                {errors.codeP && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.codeP}
                  </Text>
                )}
                <Card.Divider />
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
      </KeyboardAwareScrollView>
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
