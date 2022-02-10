import React, { Fragment, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RadioButton from "expo-radio-button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as yup from "yup";

const Inscription = (props) => {
  const InscriptionValidationSchema = yup.object().shape({
    nom: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Seulement des alphabets\n sont acceptes")
      .required("Veuillez saisir votre nom"),
    prenom: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Seulement des alphabets\n sont acceptes")
      .required("Veuillez saisir votre prénom"),
    email: yup
      .string()
      .email("Veuillez entrer une adresse e-mail valide")
      .required("Adresse email obligatoire"),
    password: yup
      .string()
      .min(
        8,
        ({ min }) =>
          `Le mot de passe doit comporter au moins ${min} caractères.`
      )
      .required("Mot de passe obligatiore"),
    tel: yup
      .string()
      .min(8, "Le numéro de téléphone doit être composé de 8 chiffres")
      .matches(/^[0-9]+$/, "doit être nombre")
      .max(8, "Le numéro de téléphone doit être composé de 8 chiffres")
      .required("Numero de tel obligatoire")
  });

      const [current, setCurrent] = useState("");
      const [isSelected, setIsSelected] = useState(false)
      const [date, setDate] = useState()
      let verif = false
      const handleCheckRadio=() => { 
        if (current == "") {
         Alert.alert("Merci de selectionner un gender ! ")
        } else 
        {
          verif = true
          setIsSelected(true)
          console.log('direction connexion !!! ')
        }
      }
  const {
    container,
    text,
    logoUser,
    label,
    boxInputR,
    boxInputC,
    textInput,
    textInputC,
    labelMail,
    labelTel,
    textInput216,
    textInput216Right,
    radioButton,
    VButton,
    textButton,
    Vlink,
    link,
  } = styles;
  return (
    <Fragment>
      <View style={container}>
        <KeyboardAwareScrollView>
          <Formik
            validationSchema={InscriptionValidationSchema}
            initialValues={{
              nom: "",
              prenom: "",
              email: "",
              password: "",
              tel: "",
              gender : ""
            }}
            onSubmit={(values) => (
              // props.navigation.navigate("Connexion"),
              handleCheckRadio(),

              (() => {
                  if (verif == true){
                    setDate(values)
                    console.log(values) 
                    date["gender"] = current 
                    console.log('data : ', date)                
                  } 
               
              
              })()
            )}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <View style={logoUser}>
                  <Ionicons name="person-circle" size={90} color="green" />
                </View>
                <Text style={text}>Créer un nouveau compte client</Text>

                <View style={boxInputR}>
                  <Text style={label}> Nom </Text>
                  <Text style={label}> Prénom </Text>
                </View>
                <View style={boxInputR}>
                  <View style={{ flexDirection: "column" }}>
                    <TextInput
                      name="nom"
                      style={textInput}
                      autoCorrect={false}
                      placeholderTextColor="#aaaaaa"
                      placeholderStyle={{ fontSize: 12 }}
                      autoCompleteType="off"
                      placeholder="Nom de famille"
                      onChangeText={handleChange("nom")}
                      onBlur={handleBlur("nom")}
                      value={values.nom}
                    />
                    {errors.nom && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.nom}
                      </Text>
                    )}
                  </View>
                  <View style={{ flexDirection: "column", marginLeft: "7%" }}>
                    <TextInput
                      name="prenom"
                      style={textInput}
                      autoCorrect={false}
                      placeholderTextColor="#aaaaaa"
                      placeholderStyle={{ fontWeight: "500" }}
                      autoCompleteType="off"
                      placeholder="Votre prénom"
                      onChangeText={handleChange("prenom")}
                      onBlur={handleBlur("prenom")}
                      value={values.prenom}
                    />
                    {errors.prenom && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.prenom}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={boxInputC}>
                  <Text style={labelMail}>Adresse e-mail</Text>
                  <TextInput
                    name="email"
                    style={textInputC}
                    autoCorrect={false}
                    placeholderTextColor="#aaaaaa"
                    placeholderStyle={{ fontWeight: "500" }}
                    autoCompleteType="off"
                    placeholder="Prénom_nom@gmail.com"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={boxInputC}>
                  <Text style={label}>Mot de passe</Text>
                  <TextInput
                    name="password"
                    style={textInputC}
                    autoCorrect={false}
                    placeholderTextColor="#aaaaaa"
                    placeholderStyle={{ fontWeight: "500" }}
                    autoCompleteType="off"
                    placeholder="Au moins 8 caractères"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View style={boxInputR}>
                  <Text style={labelTel}> Numéro de téléphone </Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View style={boxInputR}>
                    <TextInput
                      name="tel"
                      keyboardType="numeric"
                      style={textInput216Right}
                      autoCorrect={false}
                      placeholderTextColor="#aaaaaa"
                      placeholderStyle={{ fontWeight: "500" }}
                      autoCompleteType="off"
                      placeholder="12345678"
                      onChangeText={handleChange("tel")}
                      onBlur={handleBlur("tel")}
                      value={values.tel}
                    />
                  </View>

                  {errors.tel && (
                    <Text
                      style={{ fontSize: 10, color: "red", marginLeft: "8%" }}
                    >
                      {errors.tel}
                    </Text>
                  )}
                </View>
                <View style={radioButton}>
                  <RadioButton
                    value="option 1"
                    selected={current}
                    onSelected={(value) => setCurrent(value)}
                    radioBackground="green"
                  >
                    <Text style={label}> Femme </Text>
                  </RadioButton>

                  <RadioButton
                    value="option 2"
                    selected={current}
                    onSelected={(value) => setCurrent(value)}
                    radioBackground="green"
                  >
                    <Text style={label}> Homme </Text>
                  </RadioButton>
                </View>
                <TouchableOpacity style={VButton} onPress={handleSubmit}>
                  <Text style={textButton}>S'inscrire</Text>
                </TouchableOpacity>

                <View style={Vlink}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Connexion")}
                  >
                    <Text style={link}>
                      Vous-avez déja un compte ? Connexion
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoUser: {
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    fontSize: 19,
    fontWeight: "bold",
    marginRight: "50%",
  },
  labelMail: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "50%",
    width: "100%",
  },
  labelTel: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "50%",
    width: "100%",
  },
  boxInputR: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: "25%",
    marginTop: "4%",
    marginLeft: "7%",
  },
  boxInputC: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: "25%",
    marginTop: "5%",
    marginLeft: "7%",
  },

  textInput: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    width: "80%",
    paddingLeft: "5%",
    backgroundColor: "white",
    fontSize: 15,
    color: "black",
    marginRight: "15%",
    borderRadius: 10,
    marginTop: -13,
  },
  textInputC: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    width: "125%",
    paddingLeft: "5%",
    backgroundColor: "white",
    fontSize: 15,
    color: "black", // 41474a
    borderRadius: 10,
    marginTop: 5,
  },
  textInput216Right: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    width: "87%",
    paddingLeft: "5%",
    backgroundColor: "white",
    fontSize: 15,
    color: "black",
    marginRight: "6%",
    borderRadius: 10,
    marginTop: -10,
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: "45%",
    marginTop: "6%",
    marginLeft: "9%",
  },
  VButton: {
    backgroundColor: "#3f9d2f",
    width: "50%",
    marginHorizontal: "25%",
    marginVertical: "4%",
    height: 55,
    fontSize: 30,
    borderRadius: 30,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    marginTop: 8,
    fontSize: 25,
    fontWeight: "700",
  },
  Vlink: {
    alignItems: "center",
  },
  link: {
    color: "#2b7bd6",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Inscription;
