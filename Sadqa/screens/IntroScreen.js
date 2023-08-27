import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
import GeneralButton from "../components/ui/GeneralButton";
import GeneralWrapper from "../components/ui/GeneralWrapper";

export default function IntroScreen({ navigation }) {
  function navigateToHome() {
    navigation.navigate("MainScreens");
  }
  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <GeneralWrapper>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </GeneralWrapper>
        <GeneralWrapper style={{ width: "50%" }}>
          <Text style={styles.introText}>
            Welcome to Sadqa, your new Islamic app!
          </Text>
        </GeneralWrapper>
      </View>
      <GeneralWrapper>
        <Text style={styles.txt}>
          Sadqa is an ad-free non-profit app for muslims all around the world.
          Explore all the features by clicking the "Continue" button.
        </Text>
        <Text style={styles.bismellahTxt}>
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </Text>
      </GeneralWrapper>
      <GeneralWrapper>
        <Text style={styles.sadqaText}>صدقة جارية علي روح ادهم ياسر زمزم</Text>
      </GeneralWrapper>
      <GeneralButton onPress={navigateToHome}>
        <Text style={styles.btn}>Continue</Text>
      </GeneralButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  introContainer: {
    flexDirection: "row",
  },
  sadqaText: {
    fontSize: 22,
    fontFamily: "ArefRuqaaRegular",
  },
  logo: {
    height: 200,
    width: 150,
    alignSelf: "center",
  },
  introText: {
    fontSize: 25,
    fontFamily: "AmiriBold",
  },
  txt: {
    fontSize: 20,
    fontFamily: "AmiriRegular",
  },
  bismellahTxt: {
    fontSize: 18,
    fontFamily: "AmiriQuran",
    textAlign: "center",
  },
  btn: {
    color: "white",
  },
});

{
  /* <Text style={styles.introText}>صدقة جارية علي روح ادهم ياسر زمزم</Text> */
}
