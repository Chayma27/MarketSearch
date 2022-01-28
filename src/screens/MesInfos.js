import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Formik } from "formik";

const Mesinfos = (props) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ nom: "", prenom: "", email : "", mdp : "", date_naissance : "", tel : "", Adresse : "", CodePostal : "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <TextInput
              name="nom"
              placeholder="Nom"
              style={styles.textInput}
              onChangeText={handleChange("nom")}
              onBlur={handleBlur("nom")}
              value={values.nom}
              keyboardType="email-address"
            />
            <TextInput
              name="prenom"
              placeholder="prenom"
              style={styles.textInput}
              onChangeText={handleChange("prenom")}
              onBlur={handleBlur("prenom")}
              value={values.prenom}
            />
            <TextInput
              name="email"
              placeholder="email"
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              secureTextEntry
            />
            <TextInput
              name="mdp"
              placeholder="mdp"
              style={styles.textInput}
              onChangeText={handleChange("mdp")}
              onBlur={handleBlur("mdp")}
              value={values.mdp}
              secureTextEntry
            />
            <TextInput
              name="date_naissance"
              placeholder="date_naissance"
              style={styles.textInput}
              onChangeText={handleChange("date_naissance")}
              onBlur={handleBlur("date_naissance")}
              value={values.date_naissance}
            />
              <TextInput
              name="tel"
              placeholder="tel"
              style={styles.textInput}
              onChangeText={handleChange("tel")}
              onBlur={handleBlur("tel")}
              value={values.tel}
            />
             <TextInput
              name="Adresse"
              placeholder="Adresse"
              style={styles.textInput}
              onChangeText={handleChange("Adresse")}
              onBlur={handleBlur("Adresse")}
              value={values.Adresse}
            />
            <TextInput
              name="codePostal"
              placeholder="codePostal"
              style={styles.textInput}
              onChangeText={handleChange("codePostal")}
              onBlur={handleBlur("codePostal")}
              value={values.codePostal}
            />
            <Button onPress={handleSubmit} title="Submit" />
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
