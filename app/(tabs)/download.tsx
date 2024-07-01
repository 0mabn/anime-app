import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function DownloadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textDownload}>Downloads</Text>
      <Text style={styles.textDownload2}>Your Downloads</Text>
      <ScrollView>
        <View style={styles.animes}>
          <Image
            style={styles.image}
            source={require("./../../assets/images/demon.png")}
          ></Image>
          <View style={styles.texts}>
            <Text style={styles.textAnime}>Demon Slayer</Text>
            <Text style={styles.textAnime2}>2019 | 26 episode</Text>
          </View>
        </View>
        <View style={styles.animes}>
          <Image
            style={styles.image}
            source={require("./../../assets/images/hunter.png")}
          ></Image>
          <View style={styles.texts}>
            <Text style={styles.textAnime}>Hunter X Hunter</Text>
            <Text style={styles.textAnime2}>2011 | 148 episode</Text>
          </View>
        </View>
        <View style={styles.animes}>
          <Image
            style={styles.image}
            source={require("./../../assets/images/deathnote.jpeg")}
          ></Image>
          <View style={styles.texts}>
            <Text style={styles.textAnime}>Deathnote</Text>
            <Text style={styles.textAnime2}>2006 | 50 episode</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: "#050B1B",
  },
  textDownload: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 70,
    marginLeft: 40,
  },
  textDownload2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 20,
    marginLeft: 40,
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
    marginLeft: 40,
    display: "flex",
    flexDirection: "row",
  },
  texts: {
    display: "flex",
    marginLeft: 20,
    gap: 10,
  },
});
