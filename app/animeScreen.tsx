import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AnimeScreen() {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      backgroundColor: "#050B1B",
    },
    poster: {
      width: "100%",
      height: "100%",
      //   position: "absolute",
      //   zIndex: -1,
    },
    logo: {
      width: 190,
      height: 70,
    },
    anime: {
      backgroundColor: "#050B1B",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      //   zIndex: 1,
      //   position: "absolute",
      //   bottom: 40,
    },
    text: {
      color: "white",
      fontSize: 10,
      fontWeight: "semibold",
    },
    star: {
      width: 13,
      height: 13,
    },
    texts: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    textOP: {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
    },
    textSynopsis: {
      color: "white",
      fontSize: 10,
      fontWeight: "semibold",
      marginTop: 10,
    },
    vector: {
      width: 21,
      height: 28,
    },
    play: {
      width: 70,
      height: 70,
      backgroundColor: "#CC3838",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 40,
    },
    animeInfo: {
      display: "flex",
      flexDirection: "row",
      gap: 50,
    },
    infos: {
      width: 360,
      marginTop: 15,
      marginLeft: 20,
    },
    season: {
      backgroundColor: "#CC3838",
      width: 60,
      height: 23,
      paddingTop: 3,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 5,
      marginRight: 15,
    },
    seasonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    seasons: {
      display: "flex",
      gap: 20,
      marginTop: 20,
      marginLeft: 25,
    },
    episodeImg: {
      width: 160,
      height: 90,
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 10,
    },
    episode: {
      marginTop: 20,
      marginLeft: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
    title: {
      color: "white",
      fontWeight: "semibold",
      fontSize: 10,
      width: 180,
    },
    description: {
      color: "white",
      fontWeight: "semibold",
      fontSize: 6,
      width: 180,
    },
    twoTexts: {
      display: "flex",
      gap: 5,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.poster}
          source={require("./../assets/images/onePiece.jpg")}
        ></Image>
        <View style={styles.anime}>
          <Image
            style={styles.logo}
            source={require("./../assets/images/onePieceLogo.png")}
          ></Image>
          <View style={styles.infos}>
            <View style={styles.animeInfo}>
              <View>
                <Text style={styles.textOP}>One Piece</Text>
                <View style={styles.texts}>
                  <Text style={styles.text}>1999- |</Text>
                  <Text style={styles.text}>Action , Adventure , Comedy</Text>
                  <Text style={styles.text}>| 5.0</Text>
                  <Image
                    style={styles.star}
                    source={require("./../assets/images/Star 1.png")}
                  ></Image>
                </View>
              </View>
              {/* styless View end */}
              <View style={styles.play}>
                <Image
                  style={styles.vector}
                  source={require("./../assets/images/Vector.png")}
                ></Image>
              </View>
            </View>
            {/* anime info end  */}
            <Text style={styles.textSynopsis}>
              Follows the adventures of Monkey D. Luffy and his pirate crew in
              order to find the greatest treasure ever left by the legendary
              Pirate, Gold Roger. The famous mystery treasure named "One Piece"
            </Text>
          </View>
          {/* info end */}
          <ScrollView horizontal style={styles.seasons}>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S20</Text>
            </View>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S19</Text>
            </View>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S18</Text>
            </View>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S17</Text>
            </View>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S16</Text>
            </View>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S15</Text>
            </View>
            <View style={styles.season}>
              <Text style={styles.seasonText}>S14</Text>
            </View>
          </ScrollView>
          {/* seasons end */}
          <View style={styles.episode}>
            <Image
              style={styles.episodeImg}
              source={require("./../assets/images/episode.png")}
            ></Image>
            <View style={styles.twoTexts}>
              <Text style={styles.title}>
                Ascend to the Dawn! A Pink Dragon Gets Agitated | Season 20 ,
                Episode 1047
              </Text>
              <Text style={styles.description}>
                One Piece episode 1047 is a solid entry in the ongoing Wano arc.
                It has no real overt negatives to mention, though it does suffer
                from following an absolute tour de force in 1046
              </Text>
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
      {/* anime end */}
    </View>
  );
}
