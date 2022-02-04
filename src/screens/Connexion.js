import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as yup from "yup";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Connexion = (props) => {
  const monLoginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Adresse email obligatoire"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("mot de passe obligatiore"),
  });

  const sendConnexion = (values) => {
    // console.log(values)
    props.navigation.navigate("Home");
  };
  const {
    container,
    text,
    containerInput,
    userIcon,
    keyIcon,
    VButton,
    textButton,
    Vlink,
    link,
    textInput,
  } = styles;
  return (
    <Fragment>
      <View style={container}>
        <KeyboardAwareScrollView>
          <Text style={text}>Identifiez-vous </Text>
          <Formik
            validationSchema={monLoginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => (
              console.log(values), props.navigation.navigate("Home")
            )}
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
                <View>
                  <View style={styles.textInput}>
                    <FontAwesome
                      style={userIcon}
                      name="user"
                      size={30}
                      color="#3B3636"
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingTop: "5%",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <TextInput
                          name="email"
                          style={{ fontSize: 18 }}
                          autoCorrect={false}
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                          placeholderTextColor="#aaaaaa"
                          placeholderStyle={{ fontWeight: "900" }}
                          autoCompleteType="off"
                          placeholder="Adresse e-mail *"
                          keyboardType="email-address"
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                          value={values.email}
                        />
                      </View>
                      {errors.email && (
                        <Text style={{ fontSize: 10, color: "red" }}>
                          {errors.email}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.textInput}>
                    <FontAwesome5
                      style={keyIcon}
                      name="key"
                      size={30}
                      color="#3B3636"
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingTop: "5%",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <TextInput
                          name="password"
                          style={{ color: "black", fontSize: 18 }}
                          autoCompleteType="off"
                          autoCorrect={false}
                          placeholderTextColor="#aaaaaa"
                          autoCompleteType="password"
                          textContentType="password"
                          secureTextEntry={true}
                          placeholder="Mot de passe *"
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                        />
                      </View>
                      {errors.password && (
                        <Text style={{ fontSize: 10, color: "red" }}>
                          {errors.password}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={VButton} onPress={handleSubmit}>
                  <Text style={textButton}>Se connecter</Text>
                </TouchableOpacity>
                <View style={Vlink}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Inscription")}
                  >
                    <Text style={link}>Créer un compte</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("MdpOublie")}
                  >
                    <Text style={link}> Mot de passe oublié ? </Text>
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
    flexDirection: "column",
    marginTop: "-25%",
  },
  text: {
    fontSize: 28,
    color: "black",
    fontWeight: "700",
    marginTop: "40%",
    marginLeft: "2%",
  },
  containerInput: {
    marginTop: 40,
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    height: 70,
    borderColor: "#c6c6c6",
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "4%",
    backgroundColor: "white",
    fontSize: 22,
    color: "black",
    paddingLeft: "15%",
  },
  VButton: {
    backgroundColor: "#3f9d2f",
    width: "75%",
    marginHorizontal: "14%",
    marginVertical: "10%",
    height: 75,
    fontSize: 30,
    borderRadius: 30,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    marginTop: 19,
    fontSize: 25,
    fontWeight: "700",
  },
  Vlink: {
    alignItems: "center",
    marginVertical: "6%",
  },
  link: {
    color: "#2b7bd6",
    fontSize: 25,
    marginBottom: 17,
    fontWeight: "600",
  },
  userIcon: {
    position: "absolute",
    marginTop: 11,
    marginLeft: "5%",
    fontSize: 48,
    zIndex: 2,
  },
  keyIcon: {
    position: "absolute",
    marginTop: 11,
    marginLeft: "5%",
    fontSize: 40,
    zIndex: 2,
  },
});

export default Connexion;
