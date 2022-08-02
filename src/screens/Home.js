import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Categories from "../components/home/Categories";
import { Button } from "react-native-elements";
// import CardAnnonces from "../components/home/CardAnnonces";
import Card from "../components/home/CardAnnonces";
import Promo from "../components/home/CardPromo";
const Home = (props) => {
  const RecentAnnounced = [
    {
      Titre: "Jean HM",
      prix: "100 DT",
      description:
        "Jean 5 poches en denim de coton lavé. Modèle taille haute avec braguette zippée surmontée d’un bouton. Jambes droites et amples.",
      path: require("../../assets/jean.jpg"),
    },
    {
      Titre: "Mercedes Gla",
      prix: "149.000 DT",
      description:
        "Mercedes GLA excellant état, première main, toujours garée dans un garage fermé, édition limitée en finition avec toit ouvrant.",
      path: require("../../assets/gla.jpeg"),
    },
    {
      Titre: "Thermomix TM5",
      prix: "120DT",
      description:
        "Thermomix connecté en très bon état, il vient d'être révisé et a donc un an de garantie confort.Pas sérieux s'abstenir",
      path: require("../../assets/thermomix.jpeg"),
    },
    {
      Titre: "Nettoyeur bouteil lb",
      prix: "123 DT",
      description:
        "Vend nettoyeur bouteille graver lb déposée je le vend 120 Dinars.Pas sérieux s'abstenir",
      path: require("../../assets/lb.jpeg"),
    },
    {
      Titre: "Sac chanel",
      prix: "8.000 DT",
      description:
        "Véritable sac CHANEL modèle double rabat en cuir matelassé rouge. Caractérisé par la présence d'une pochette de chaque côté, à voir sur les photos. Modèle rare.",
      path: require("../../assets/sac.jpeg"),
    },
    {
      Titre: "VELO VTC",
      prix: "450 DT",
      description:
        "Velo vtc tres bon état general ,équipé du coffre arriére à clés amovible,panier avant, sacoche avec bidon,support avec pompe.compteur de vitesse.S i pas trop loin,je peux vous le livrer.",
      path: require("../../assets/velo.jpeg"),
    },
    {
      Titre: "Rouge à lévres",
      prix: "35 DT",
      description:
        "Rouge à lèvres liquide ultra mat de la marque SEPHORA, ultra couvrant, longue tenue et sans transfert.",
      path: require("../../assets/Rouge.jpg"),
    },
    {
      Titre: "Pull",
      prix: "50 DT ",
      description: "Pull en maille retournée basique de la marque pull&bear",
      path: require("../../assets/pull.jpg"),
    },
    {
      Titre: "Eau de parfum mon Guerlain ",
      prix: "352 DT ",
      description:
        "Mon Guerlain est le nouveau parfum de la Maison, un hommage à la féminité d’aujourd’hui : une féminité forte, libre et sensuelle, inspirée par Angelina Jolie.",
      path: require("../../assets/parfum.jpg"),
    },
    {
      Titre: "Apple Watch series 6 ",
      prix: "1899 DT ",
      description:
        "L’Apple Watch Series 6 est une montre connectée. Elle représente la version 2020 de la célèbre montre d’Apple.",
      path: require("../../assets/applewatch.png"),
    },
    {
      Titre: "Short Nike ",
      prix: "15 DT ",
      description: "Short Nike pour femme peu utilisé.",
      path: require("../../assets/short.jpg"),
    },
    {
      Titre: "Tv Samsung Smart ",
      prix: "700 DT ",
      description:
        "Tv Samsung Smart état comme neuf, vente à cause de déménagement international.",
      path: require("../../assets/Tv.jpeg"),
    },
  ];
  const BlackFridayAnnounced = [
    {
      Titre: "Jean HM",
      prix: "100 DT",
      description:
        "Jean 5 poches en denim de coton lavé. Modèle taille haute avec braguette zippée surmontée d’un bouton. Jambes droites et amples.",
      path: require("../../assets/jean.jpg"),
      soldeRemise: "-20%",
      newPrice: "80 DT", // fonction
    },
    {
      Titre: "Mercedes Gla",
      prix: "149.000 DT",
      description:
        "Mercedes GLA excellant état, première main, toujours garée dans un garage fermé, édition limitée en finition avec toit ouvrant.",
      path: require("../../assets/gla.jpeg"),
      soldeRemise: "-10%",
      newPrice: "134.100 DT",
    },
    {
      Titre: "Thermomix TM5",
      prix: "352 DT",
      description:
        "Thermomix connecté en très bon état, il vient d'être révisé et a donc un an de garantie confort.Pas sérieux s'abstenir",
      path: require("../../assets/thermomix.jpeg"),
      soldeRemise: "-40%",
      newPrice: "281.6 DT",
    },
    {
      Titre: "Nettoyeur bouteil lb",
      prix: "123 DT",
      description:
        "Vend nettoyeCur bouteille graver lb déposée je le vend 120 Dinars.Pas sérieux s'abstenir",
      path: require("../../assets/lb.jpeg"),
      soldeRemise: "-40%",
      newPrice: "73.8 DT",
    },
    {
      Titre: "Sac chanel",
      prix: "8.000 DT",
      description:
        "Véritable sac CHANEL modèle double rabat en cuir matelassé rouge. Caractérisé par la présence d'une pochette de chaque côté, à voir sur les photos. Modèle rare.",
      path: require("../../assets/sac.jpeg"),
      soldeRemise: "-40%",
      newPrice: "60 DT",
    },
    {
      Titre: "VELO VTC",
      prix: "450 DT",
      description:
        "Velo vtc tres bon état general ,équipé du coffre arriére à clés amovible,panier avant, sacoche avec bidon,support avec pompe.compteur de vitesse.S i pas trop loin,je peux vous le livrer.",
      path: require("../../assets/velo.jpeg"),
      soldeRemise: "-40%",
      newPrice: "60 DT",
    },
    {
      Titre: "Rouge à lévres",
      prix: "35 DT",
      description:
        "Rouge à lèvres liquide ultra mat de la marque SEPHORA, ultra couvrant, longue tenue et sans transfert.",
      path: require("../../assets/Rouge.jpg"),
      soldeRemise: "-40%",
      newPrice: "60 DT",
    },
    {
      Titre: "Pull",
      prix: "50 DT ",
      description: "Pull en maille retournée basique de la marque pull&bear",
      path: require("../../assets/pull.jpg"),
      soldeRemise: "-40%",
      newPrice: "60 DT",
    },
    {
      Titre: "Eau de parfum mon Guerlain ",
      prix: "352 DT ",
      description:
        "Mon Guerlain est le nouveau parfum de la Maison, un hommage à la féminité d’aujourd’hui : une féminité forte, libre et sensuelle, inspirée par Angelina Jolie.",
      path: require("../../assets/parfum.jpg"),
      soldeRemise: "-40%",
      newPrice: "60 DT",
    },
    {
      Titre: "Apple Watch series 6 ",
      prix: "1899 DT ",
      description:
        "L’Apple Watch Series 6 est une montre connectée. Elle représente la version 2020 de la célèbre montre d’Apple.",
      path: require("../../assets/applewatch.png"),
      soldeRemise: "-40%",
      newPrice: "1139.4 DT",
    },
  
  ];
  const [search, setSearch] = useState("");

  const updateSearch = () => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.headerStyle1}>
          <View style={styles.header}>
            <Image
              style={styles.tinyLogo}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.appName}>Market Search</Text>
            <Ionicons name="cart-sharp" size={40} color="black" />
          </View>
          {/* <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          /> */}

          <View style={styles.containerInput}>
            <TextInput
              autoCorrect={false}
              placeholderTextColor="#aaaaaa"
              placeholderStyle={{ fontWeight: "900" }}
              autoCompleteType="off"
              placeholder=" Rechercher"
              style={styles.textInput}
            />

            <Ionicons
              style={styles.search}
              name="search"
              size={24}
              color="black"
            />
            <Ionicons
              style={styles.camera}
              name="camera"
              size={24}
              color="black"
            />
          </View>
          <Categories />
        </View>

        <View>
          <Text style={styles.newsArtcl}>Ajout récents</Text>
        </View>
        <FlatList
          data={RecentAnnounced}
          horizontal={true}
          keyExtractor={(item) => item.Titre}
          renderItem={({ item }) => (
            <ScrollView horizontal={true}>
              <View style={styles.product}>
                <Card
                  Titre={item.Titre}
                  prix={item.prix}
                  description={item.description}
                  path={item.path}
                />
              </View>
            </ScrollView>
          )}
        />

        <View>
          <View
            style={{
              width: 400,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              style={styles.BlackFridayimg}
              source={require("../../assets/black-friday.png")}
            />
          </View>
          <Text style={styles.BlackFriday}>Black Friday</Text>
        </View>

        {/* <Promo
              Titre="Jean HM"
              prix="100 DT"
              description="Jean 5 poches en denim de coton lavé. Modèle taille haute avec braguette zippée surmontée d’un bouton. Jambes droites et amples."
              path={require("../../assets/jean.jpg")}
              soldeRemise="SOLDE - 20%"
              newPrice="80 DT"
            />
            <Promo
              Titre="Mercedes GLA"
              prix="149.000 DT"
              description="Mercedes GLA excellant état, première main, toujours garée dans un garage fermé, édition limitée en finition avec toit ouvrant ."
              path={require("../../assets/gla.jpeg")}
              soldeRemise="SOLDE - 10%"
              newPrice="134.100 DT"
            />
            <Promo
              Titre="Eau de parfum mon Guerlain"
              prix="352 DT"
              description="Mon Guerlain est le nouveau parfum de la Maison, un hommage à la féminité d’aujourd’hui : une féminité forte, libre et sensuelle, inspirée par Angelina Jolie."
              path={require("../../assets/parfum.jpg")}
              soldeRemise="SOLDE - 20%"
              newPrice="281.6 DT"
            />
            <Promo
              Titre="Tv Samsung Smart "
              prix="700 DT"
              description="Tv Samsung Smart état comme neuf, vente à cause de déménagement international."
              path={require("../../assets/Tv.jpeg")}
              soldeRemise="SOLDE - 40%"
              newPrice="420 DT"
            />
            <Promo
              Titre="Rouge à lévres"
              prix="35 DT"
              description="Rouge à lèvres liquide ultra mat de la marque SEPHORA, ultra couvrant, longue tenue et sans transfert."
              path={require("../../assets/Rouge.jpg")}
              soldeRemise="SOLDE -5%"
              newPrice="33.25 DT"
            />
            <Promo
              Titre="Apple Watch series 6 "
              prix="1899 DT"
              description="L’Apple Watch Series 6 est une montre connectée. Elle représente la version 2020 de la célèbre montre d’Apple."
              path={require("../../assets/applewatch.png")}
              soldeRemise="SOLDE -30%"
              newPrice="1329.3 DT"
            /> */}
        <FlatList
          data={BlackFridayAnnounced}
          horizontal={true}
          keyExtractor={(item) => item.Titre}
          renderItem={({ item }) => (
            <ScrollView horizontal={true}>
              <View style={styles.product}>
                <Promo
                  Titre={item.Titre}
                  prix={item.prix}
                  description={item.description}
                  path={item.path}
                  soldeRemise={item.soldeRemise}
                  newPrice={item.newPrice}
                />
              </View>
            </ScrollView>
          )}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // remplis toute la page
  },
  headerStyle1: {
    backgroundColor: "#cce4ff", // cce4ff
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    marginLeft: "3%",
    marginRight: "3%",
  },
  appName: {
    marginTop: "4%",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  newsArtcl: {
    fontSize: 28,
    color: "#008b8b",
    marginTop: "5%",
    marginBottom: "2%",
    marginLeft: "3%",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  containerInput: {
    marginTop: 30,
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    height: 60,
    borderColor: "#c6c6c6",
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "white",
    fontSize: 22,
    paddingLeft: "15%",
    borderRadius: 20,
  },
  search: {
    position: "absolute",
    marginTop: 7,
    marginLeft: "8%",
    fontSize: 46,
    zIndex: 2,
  },
  camera: {
    position: "absolute",
    marginTop: 7,
    marginLeft: "80%",
    fontSize: 42,
    zIndex: 2,
  },
  tini: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "relative",
  },
  product: {
    flexDirection: "row",
  },
  newsArtcl: {
    fontSize: 28,
    color: "#008b8b",
    marginTop: "5%",
    marginLeft: "3%",
  },
  card: {
    width: "300",
    height: "400",
    position: "absolute",
  },
  BlackFriday: {
    color: "red",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: "5%",
    marginLeft: "3%",
  },
  BlackFridayimg: {
    width: 390,
    height: 290,

    // borderRadius: 50,
  },
});
export default Home;
