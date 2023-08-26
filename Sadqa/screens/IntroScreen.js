import { View, Text, StyleSheet, Button } from "react-native";

export default function IntroScreen({ navigation }) {
  function navigateToHome() {
    navigation.navigate("MainScreens");
  }
  return (
    <View style={styles.container}>
      <Text>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</Text>
      <Text style={styles.introText}>صدقة جارية علي روح ادهم ياسر زمزم</Text>
      <Button title="Click to continue" onPress={navigateToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  introText: {
    fontSize: 20,
    fontFamily: "ArefRuqaaRegular",
  },
});
