import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import { fetchQuran } from "../quran-api/https";
import NameWrapper from "../components/ui/NameWrapper";

export default function QuranScreen({ navigation }) {
  const [surahs, setSurahs] = useState([]);

  async function fetchData() {
    const response = await fetchQuran();
    return response.data.surahs;
  }

  async function get() {
    const resData = await fetchData();
    setSurahs(await resData);
  }

  function renderSurahs(itemData) {
    function navigateToSurah() {
      navigation.navigate("Surah", {
        name: itemData.item.name,
        engName: itemData.item.englishName,
        ayat: itemData.item.ayahs,
      });
    }
    return (
      <NameWrapper
        name={itemData.item.name}
        engName={itemData.item.englishName}
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
          keyExtractor={(item) => item.number}
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
