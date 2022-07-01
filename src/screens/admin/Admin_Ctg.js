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

const Admin_Ctg = (props) => {
  const [number, onChangeNumber] = React.useState(null);
  const [text, onChangeText] = React.useState("0");
  const [image, setImage] = useState(null);
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
      initialValues={{ name: "" }}
      onSubmit={(values) => {
        values['uri_image'] = image;
        console.log(values)
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
                  Nom de la catégorie{" "}
                </Text>
                <Input placeholder="Merci de saisir le nom de catégorie"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')} />
              </Card>

              {/* Image function add database */}

              <Card>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Ajouter une photo pour votre nouvelle catégorie
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
                  title="Créer la catégorie"
                  buttonStyle={{ backgroundColor: "#4f9deb" , marginBottom : '8%' }}
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
export default Admin_Ctg;
