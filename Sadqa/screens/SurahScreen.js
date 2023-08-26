import { FlatList, StyleSheet, Text, View } from "react-native";
import AyahWrapper from "../components/ui/AyahWrapper";
import Colors from "../constants/colors";

export default function SurahScreen({ route }) {
  const ayat = route.params.ayat;
  const surahName = route.params.name;
  const surahEngName = route.params.engName;

  function renderAyat(data) {
    return <AyahWrapper text={data.item.text} num={data.item.numberInSurah} />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.engName}>
          <Text style={styles.engName}>{surahEngName}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.name}>{surahName}</Text>
        </View>
      </View>
      <FlatList
        data={ayat}
        renderItem={renderAyat}
        keyExtractor={(item) => item.numberInSurah}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  engName: {
    marginRight: 25,
    fontSize: 28,
    fontFamily: "AmiriRegular",
  },
  name: {
    fontSize: 28,
    fontFamily: "AmiriRegular",
  },
});
