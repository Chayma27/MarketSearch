// Formik x React Native example
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";
import { useState } from "react";
import { Text, Card, Icon, Input, Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { result } from "lodash";
import * as ref_Annonce from "../../utilitaires/Ref_Annonce";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
const Admin_SCtg = (props) => {
  const [number, onChangeNumber] = React.useState(null);
  const [text, onChangeText] = React.useState("0");
  const [image, setImage] = useState(null);
  const [selectedCtg, setSelectedCtg] = useState("");
  const ctg = ref_Annonce.ctg;


    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  return (
    <Formik
      initialValues={{ name: "", categorie : "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <ScrollView>
            <View style={styles.container}>
              <Card>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom : '5%'
                  }}
                >
                  {" "}
                  Nom de la sous catégorie{" "}
                </Text>
                <Input
                  placeholder="Merci de saisir le nom de sous catégorie"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
              </Card>


              <Card>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Affectation de la sous catégorie{" "}
                </Text>

                <Dropdown
                  icon="chevron-down"
                  iconColor="#E1E1E1"
                  label="Catégories"
                  data={ctg}
                  onChangeText={(value) => setSelectedCtg(value)}
                  
                />

                <View
                  style={{
                    fontSize: 15,
                    backgroundColor: "#ecf0f1",
                    padding: "3%",
                    borderRadius: 10,
                  }}
                >
                  <Text>
                  Veuillez sélectionner la catégorie qui sera attribuée à la nouvelle sous-catégorie que vous souhaitez créer
                  </Text>
                </View>
              </Card>
              <Card>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Importer une photo de sous catégorie
                </Text>
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={pickImage}
                >
                  <Image
                    style={styles.resizePicture}
                    source={require("../../../assets/add-photo.png")}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                </View>
              </Card>
              <Card>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: "5%",
                  }}
                ></View>
                <Button
                  title="Créer la sous catégorie"
                  buttonStyle={{ backgroundColor: "#4f9deb" }}
                  onPress={handleSubmit}
                />
              </Card>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  inputUnderLine: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 10,
    fontSize: 20,
    marginVertical: "2%",
    borderRadius: 5,
    textAlign: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#43484D",
    paddingBottom: "3%",
    marginTop: "1%",
  },
  input: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  resizePicture: {
    width: 150,
    height: 150,
  },
});
export default Admin_SCtg ;
