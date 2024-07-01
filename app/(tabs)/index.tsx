import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textGenre}>Choose genre</Text>
          <View style={styles.rows}>
            <View style={styles.row1}>
              <Text style={styles.genreRed}>Action</Text>
              <Text style={styles.genreGray}>Adventure</Text>
              <Text style={styles.genreGray}>Horror</Text>
              <Text style={styles.genreRed}>Fantasy</Text>
            </View>
            <View style={styles.row2}>
              <Text style={styles.genreRed}>Drama</Text>
              <Text style={styles.genreRed}>Thriller</Text>
              <Text style={styles.genreGray}>Romance</Text>
              <Text style={styles.genreGray}>More</Text>
            </View>
          </View>
          {/* rows end  */}
        </View>
        {/* box end  */}
        <View style={styles.popular}>
          <Text style={styles.textPopular}>Popular</Text>
          <ScrollView horizontal>
            <View style={styles.animes}>
              <Link href="../animeScreen">
                <Image
                  style={styles.image}
                  source={require("./../../assets/images/naruto.jpg")}
                ></Image>
              </Link>
              <Text style={styles.textAnime}>Naruto</Text>
              <Text style={styles.textAnime2}>1999 | 220 episode</Text>
            </View>
            <View style={styles.animes}>
              <Image
                style={styles.image}
                source={require("./../../assets/images/bleach.jpg")}
              ></Image>
              <Text style={styles.textAnime}>Bleach</Text>
              <Text style={styles.textAnime2}>2004 | 336 episode</Text>
            </View>
            <View style={styles.animes}>
              <Image
                style={styles.image}
                source={require("./../../assets/images/aot.jpg")}
              ></Image>
              <Text style={styles.textAnime}>Attack on Titan</Text>
              <Text style={styles.textAnime2}>2011 | 89 episode</Text>
            </View>
          </ScrollView>
        </View>
        {/* popular end  */}
        <View style={styles.forYou}>
          <Text style={styles.textForYou}>For you</Text>
          <ScrollView horizontal>
            <View style={styles.animes}>
              <Image
                style={styles.image}
                source={require("./../../assets/images/demon.png")}
              ></Image>
              <Text style={styles.textAnime}>Demon Slayer</Text>
              <Text style={styles.textAnime2}>2019 | 26 episode</Text>
            </View>
            <View style={styles.animes}>
              <Image
                style={styles.image}
                source={require("./../../assets/images/hunter.png")}
              ></Image>
              <Text style={styles.textAnime}>Hunter X Hunter</Text>
              <Text style={styles.textAnime2}>2011 | 148 episode</Text>
            </View>
            <View style={styles.animes}>
              <Image
                style={styles.image}
                source={require("./../../assets/images/deathnote.jpeg")}
              ></Image>
              <Text style={styles.textAnime}>Deathnote</Text>
              <Text style={styles.textAnime2}>2006 | 50 episode</Text>
            </View>
          </ScrollView>
        </View>
        {/* for you end */}
      </View>
    </ScrollView>
    // container end
  );
}
const styles = StyleSheet.create({
  textGenre: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "sans-serif",
  },
  all: {
    display: "flex",
    gap: 20,
  },
  textPopular: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  textForYou: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  genreRed: {
    color: "white",
    backgroundColor: "#D4625E",
    padding: 20,
    paddingBottom: 8,
    paddingTop: 8,
    fontSize: 11,
    fontWeight: "600",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderRadius: 16,
  },
  genreGray: {
    color: "white",
    backgroundColor: "#3F4042",
    padding: 15,
    paddingBottom: 8,
    paddingTop: 8,
    fontSize: 11,
    fontWeight: "600",
  },
  textAnime: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    paddingTop: 5,
  },
  textAnime2: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 5,
  },
  image: {
    width: 125,
    height: 185,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
  },
  animes: {
    marginTop: 15,
    marginRight: 15,
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  rows: {
    display: "flex",
    gap: 10,
  },
  popular: {
    marginTop: 22,
    marginLeft: 20,
    height: 265,
  },
  forYou: {
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 30,
    height: 265,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#050B1B",
  },
  box: {
    marginTop: 60,
  },
});
