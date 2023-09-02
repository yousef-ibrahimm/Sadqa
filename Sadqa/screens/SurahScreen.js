import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { fetchSurah } from "../quran-api/https";
import AyahWrapper from "../components/ui/AyahWrapper";
import Colors from "../constants/colors";

export default function SurahScreen({ route }) {
  const chapterId = route.params.chapterId;
  const surahName = route.params.name;
  const surahEngName = route.params.engName;
  const bismellahPre = route.params.bismellahPre;
  const [ayat, setAyat] = useState([]);
  const bismellahObj = {
    id: 0,
    text_uthmani: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    verse_key: "0:0",
  };
  async function get() {
    const resData = await fetchSurah(chapterId);
    let ayatArr = await resData;
    if (bismellahPre) {
      ayatArr = [bismellahObj, ...ayatArr];
    }
    return ayatArr;
  }

  get().then((res) => setAyat(res));

  function renderAyat(data) {
    return (
      <AyahWrapper text={data.item.text_uthmani} num={data.item.verse_key} />
    );
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
        keyExtractor={(item) => item.id}
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
