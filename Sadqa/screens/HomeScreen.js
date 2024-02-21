import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
import GlowingContainer from "../components/ui/GlowingContainer";

export default function HomeScreen({ navigation }) {
  function navigateToQuran() {
    navigation.navigate("Quran");
  }
  function navigateToDuaa() {
    navigation.navigate("Duaa");
  }
  function navigateToTasbeeh() {
    navigation.navigate("Tasbeeh");
  }
  return (
    <View style={styles.root}>
      <View>
        <GlowingContainer onPress={navigateToQuran}>
          <Text style={styles.txt}>القرآن الكريم</Text>
          <Image source={require("../assets/Moshaf.png")} style={styles.book} />
          <Text style={styles.txt}>The Holy Quran</Text>
        </GlowingContainer>
        <GlowingContainer onPress={navigateToDuaa}>
          <Text style={styles.txt}>الأذكار</Text>
          <Image source={require("../assets/duaa.png")} style={styles.book} />
          <Text style={styles.txt}>Duaa</Text>
        </GlowingContainer>
        <GlowingContainer onPress={navigateToTasbeeh}>
          <Text style={styles.txt}>تسبيح</Text>
          <Image source={require("../assets/hands.png")} style={styles.book} />
          <Text style={styles.txt}>Tasbeeh</Text>
        </GlowingContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-around",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 0.3,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 0.3,
  },
  txt: {
    fontSize: 25,
    color: "black",
    fontFamily: "AmiriRegular",
    textAlign: "center",
  },
  book: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  textBox: {
    flex: 0.3,
  },
});
