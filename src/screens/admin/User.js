import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import { Button } from "react-native-elements";
import DataTable, { COL_TYPES } from "react-native-datatable-component";

const User = (props) => {
  const image = require("../../../assets/background-image-admin.jpeg");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const dataa = [
    {
      name: "Frozen Yogurt",
      calories: "159",
      fat: "6.0",
      carbs: "24",
      protein: "4",
    },
    {
      name: "Ice Cream Sandwhich",
      calories: "237",
      fat: "9.0",
      carbs: "37",
      protein: "4.3",
    },
    {
      name: "Blizzard",
      calories: "480",
      fat: "3.4",
      carbs: "80",
      protein: "1",
    },
    {
      name: "Frosty",
      calories: "200",
      fat: "2.0",
      carbs: "12",
      protein: "8",
    },
    {
      name: "DillyBar",
      calories: "120",
      fat: "15",
      carbs: "30",
      protein: "10",
    },
    {
      name: "PushPop",
      calories: "50",
      fat: "1",
      carbs: "2",
      protein: "2",
    },
  ];
  const nameOfCols = ["name", "age", "gender", "select"];

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}> Gestion des utilisateurs </Text>
        <ScrollView>
          <DataTable
            onRowSelect={(row) => {
              console.log("ROW => ", row);
            }}
            data={[
              { name: "Muhammad Rafeh", age: 21, gender: "male" },
              { name: "Muhammad Akif", age: 22, gender: "male" },
              { name: "Muhammad Umar", age: 21, gender: "male" },
              { name: "Amna Shakeel", age: 22, gender: "female" },
              { name: "Muhammad Ammar", age: 20, gender: "male" },
              { name: "Muhammad Umar", age: 21, gender: "male" },
              { name: "Amna Shakeel", age: 22, gender: "female" },
              { name: "Muhammad Ammar", age: 20, gender: "male" },
              { name: "Muhammad Umar", age: 21, gender: "male" },
              { name: "Amna Shakeel", age: 22, gender: "female" },
              { name: "Muhammad Ammar", age: 20, gender: "male" },
              { name: "Muhammad Umar", age: 21, gender: "male" },
              { name: "Amna Shakeel", age: 22, gender: "female" },
              { name: "Muhammad Ammar", age: 20, gender: "male" },
              { name: "Muhammad Umar", age: 21, gender: "male" },
              { name: "Amna Shakeel", age: 22, gender: "female" },
              { name: "Muhammad Ammar", age: 20, gender: "male" },
              { name: "Muhammad Moiz", age: 13, gender: "male" },
            ]} // list of objects
            colSettings={[{ name: "select", type: COL_TYPES.CHECK_BOX }]}
            colNames={nameOfCols}
            noOfPages={2.5} //number
            backgroundColor={"rgba(23,2,4,0.2)"} //Table Background Color
          />
        
        </ScrollView>
          <TouchableOpacity style={styles.button} >
      <Text style={styles.textButton}>Supprimer</Text>
    </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 36,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginBottom : '4%'
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#DC143C',
    width: "100%",
    marginBottom : '5%'
  },
  textButton: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default User;
