import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
import GeneralButtonLight from "../components/ui/GeneralButtonLight";
import NotebookWrapper from "../components/ui/NotebookWrapper";
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
      <View style={styles.topContainer}>
        <GeneralButtonLight onPress={navigateToQuran}>
          <Text style={styles.txt}>القرآن الكريم</Text>
          <Image source={require("../assets/Moshaf.png")} style={styles.book} />
          <Text style={styles.txt}>The Holy Quran</Text>
        </GeneralButtonLight>
        <GeneralButtonLight onPress={navigateToDuaa}>
          <Text style={styles.txt}>الأذكار</Text>
          <Image source={require("../assets/duaa.png")} style={styles.book} />
          <Text style={styles.txt}>Duaa</Text>
        </GeneralButtonLight>
      </View>
      <View style={styles.bottomContainer}>
        <GeneralButtonLight onPress={navigateToTasbeeh}>
          <Text style={styles.txt}>تسبيح</Text>
          <Image source={require("../assets/hands.png")} style={styles.book} />
          <Text style={styles.txt}>Tasbeeh</Text>
        </GeneralButtonLight>
      </View>
      <View style={styles.textBox}>
        <NotebookWrapper>
          <Text>Test text</Text>
        </NotebookWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
