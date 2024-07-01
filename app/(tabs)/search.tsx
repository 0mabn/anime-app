import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search"></TextInput>
        <TouchableOpacity style={styles.searchButton}>
          <Svg
            viewBox="0 0 24 24"
            id="search"
            width={35}
            height={35}
            fill="white"
          >
            <Path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z"></Path>
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={styles.preSearch}>
        <Text style={styles.preSearchText}>Previously Searched</Text>
        <ScrollView>
          <View style={styles.animes}>
            <Image
              style={styles.image}
              source={require("./../../assets/images/naruto.jpg")}
            ></Image>
            <View style={styles.texts}>
              <Text style={styles.textAnime}>Naruto</Text>
              <Text style={styles.textAnime2}>1999 | 220 episode</Text>
            </View>
          </View>
          <View style={styles.animes}>
            <Image
              style={styles.image}
              source={require("./../../assets/images/bleach.jpg")}
            ></Image>
            <View style={styles.texts}>
              <Text style={styles.textAnime}>Bleach</Text>
              <Text style={styles.textAnime2}>2004 | 336 episode</Text>
            </View>
          </View>
          <View style={styles.animes}>
            <Image
              style={styles.image}
              source={require("./../../assets/images/aot.jpg")}
            ></Image>
            <View style={styles.texts}>
              <Text style={styles.textAnime}>Attack on Titan</Text>
              <Text style={styles.textAnime2}>2011 | 89 episode</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#050B1B",
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 70,
    paddingLeft: 10,
  },
  search: {
    display: "flex",
    flexDirection: "row",
  },
  searchButton: {
    marginTop: 70,
    marginLeft: 10,
  },
  preSearchText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 140,
  },
  preSearch: {
    marginTop: 40,
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
  },
  image: {
    width: 125,
    height: 185,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
  },
  animes: {
    marginTop: 30,
    // marginLeft: 40,
    display: "flex",
    flexDirection: "row",
  },
  texts: {
    display: "flex",
    marginLeft: 20,
    gap: 10,
  },
});
