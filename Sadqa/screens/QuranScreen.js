import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import { fetchChapters } from "../quran-api/https";
import NameWrapper from "../components/ui/NameWrapper";

export default function QuranScreen({ navigation }) {
  const [surahs, setSurahs] = useState([]);

  async function get() {
    const resData = await fetchChapters();
    setSurahs(await resData);
  }

  function renderSurahs(itemData) {
    function navigateToSurah() {
      navigation.navigate("Surah", {
        name: itemData.item.name_arabic,
        engName: itemData.item.name_complex,
        chapterId: itemData.item.id,
        bismellahPre: itemData.item.bismillah_pre,
      });
    }
    return (
      <NameWrapper
        name={itemData.item.name_arabic}
        engName={itemData.item.name_complex}
        onPress={navigateToSurah}
      />
    );
  }

  get();
  return (
    <View style={styles.root}>
      <View style={styles.rootContainer}>
        <FlatList
          data={surahs}
          renderItem={renderSurahs}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  rootContainer: {
    marginTop: 25,
  },
});
