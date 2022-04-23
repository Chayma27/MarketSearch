import React, { useState, useEffect , useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Animated 
} from "react-native";
import { DataTable, DataTableCell, DataTableRow, DataTablePagination } from 'material-bread';


const User = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
          useNativeDriver: true

  };
  
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  const image = require("../../../assets/background-image-admin.jpeg");
  const [page,setPage]=useState(0)
  const [perPage,setPerPage] = useState(2)
  const data = [
    {
      name: 'Frozen Yogurt',
      calories: '159',
      fat: '6.0',
      carbs: '24',
      protein: '4',
    },
    {
      name: 'Ice Cream Sandwhich',
      calories: '237',
      fat: '9.0',
      carbs: '37',
      protein: '4.3',
    },
    {
      name: 'Blizzard',
      calories: '480',
      fat: '3.4',
      carbs: '80',
      protein: '1',
    },
    {
      name: 'Frosty',
      calories: '200',
      fat: '2.0',
      carbs: '12',
      protein: '8',
    },
    {
      name: 'DillyBar',
      calories: '120',
      fat: '15',
      carbs: '30',
      protein: '10',
    },
    {
      name: 'PushPop',
      calories: '50',
      fat: '1',
      carbs: '2',
      protein: '2',
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}> Gestion des utilisateurs </Text>
      {/* <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View> */}
      <ScrollView>
      <DataTable>
          <DataTableRow>
              <DataTableCell text={'Desert'} type={'header'} relativeWidth flex={2} />
              <DataTableCell text={'Calories'}  type={'header'}  right />
              <DataTableCell text={'Fat (g)'}  type={'header'}  right />
              <DataTableCell text={'Carbs (g)'}  type={'header'}  right />
              <DataTableCell text={'Protein (g)'}  type={'header'}  right />
          </DataTableRow>
          {data
            .slice(
              page * perPage,
              page * perPage + perPage,
            )
            .map(row => (
              <DataTableRow key={row.name}>
                <DataTableCell text={row.name} borderRight flex={2} />
                <DataTableCell text={row.calories} right />
                <DataTableCell text={row.fat} right />
                <DataTableCell text={row.carbs} right />
                <DataTableCell text={row.protein} right />
              </DataTableRow>
            ))}

          <DataTablePagination
            page={page}
            numberOfPages={data.length / perPage}
            numberOfRows={data.length}
            perPage={perPage}
            onChangePage={page => setPage( page )}
            onChangeRowsPerPage={perPage => setPerPage( perPage )}
            possibleNumberPerPage={[2,3,4,5,6]}
          />
      </DataTable>
      </ScrollView>
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
    fontSize: 40,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginTop: "15%",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
});

export default User;
