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
      <View>
        <GeneralWrapper>
          <View style={styles.introContainer}>
            <GeneralWrapper>
              <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
              />
              <Text style={styles.bismellahTxt}>
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </Text>
            </GeneralWrapper>
          </View>
          <View style={styles.about}>
            <Text style={styles.sadqaText}>
              "صدقة جارية علي روح ادهم ياسر زمزم"
            </Text>
            <Text style={styles.txt}>
              Sadqa is an ad-free non-profit app for muslims all around the
              world.
            </Text>
            <Text style={styles.txt}>
              صدقة هو تطبيق غير هادف لربح خالٍ من الإعلانات للمسلمين في جميع
              أنحاء العالم.
            </Text>
            <Text style={styles.txt}>Press continue to explore our app :)</Text>
            <Text style={styles.txt}>اضغط على "التالي" لاستكشاف تطبيقنا</Text>
            <GeneralButton onPress={navigateToHome}>
              <Text style={styles.btn}>Continue التالي</Text>
            </GeneralButton>
          </View>
        </GeneralWrapper>
      </View>
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
    flexDirection: "column",
  },
  sadqaText: {
    fontSize: 22,
    fontFamily: "ArefRuqaaRegular",
    paddingBottom: 2,
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
    fontSize: 22,
    fontFamily: "AmiriBold",
    color: "black",
  },
  bismellahTxt: {
    fontSize: 40,
    fontFamily: "SaleemQuran",
    textAlign: "center",
  },
  btn: {
    color: "white",
    fontSize: 25,
    fontFamily: "AmiriRegular",
    textAlign: "center",
  },
  about: {
    alignItems: "center",
    paddingBottom: 50,
  },
});
