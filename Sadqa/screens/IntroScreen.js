import { View, Text, StyleSheet, Image } from "react-native";
import { useCallback } from "react";
import Colors from "../constants/colors";
import { useFonts } from "expo-font";
import GeneralButton from "../components/ui/GeneralButton";
import GeneralWrapper from "../components/ui/GeneralWrapper";
import * as SplashScreen from "expo-splash-screen";
import NotebookWrapper from "../components/ui/NotebookWrapper";

export default function IntroScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    ArefRuqaaRegular: require("../fonts/ArefRuqaa-Regular.ttf"),
    ArefRuqaaBold: require("../fonts/ArefRuqaa-Bold.ttf"),
    AmiriRegular: require("../fonts/Amiri-Regular.ttf"),
    AmiriBold: require("../fonts/Amiri-Bold.ttf"),
    AmiriQuran: require("../fonts/AmiriQuran-Regular.ttf"),
    SaleemQuran: require("../fonts/_PDMS_Saleem_QuranFont.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function navigateToHome() {
    navigation.navigate("MainScreens");
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.introContainer}>
        <GeneralWrapper>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </GeneralWrapper>
        {/* <GeneralWrapper style={{ width: "50%" }}>
          <Text style={styles.introText}>
            Welcome to Sadqa, your new Islamic app!
          </Text>
        </GeneralWrapper> */}
      </View>
      <View style={styles.about}>
        <NotebookWrapper title="About">
          <Text style={styles.txt}>
            Sadqa is an ad-free non-profit app for muslims all around the world.
            Explore all the features by clicking the "Continue" button.
          </Text>
        </NotebookWrapper>
      </View>
      <GeneralWrapper>
        <Text style={styles.bismellahTxt}>
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </Text>
      </GeneralWrapper>
      <GeneralWrapper>
        <Text style={styles.sadqaText}>صدقة جارية علي روح ادهم ياسر زمزم</Text>
      </GeneralWrapper>
      <GeneralButton onPress={navigateToHome}>
        <Text style={styles.btn}>Continue التالي</Text>
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
    fontSize: 25,
    fontFamily: "AmiriRegular",
  },
  about: {
    flex: 0.6,
  },
});
