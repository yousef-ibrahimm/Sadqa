import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import DuaaWrapper from "../components/ui/DuaaWrapper";
import TasbeehCircle from "../components/ui/TasbeehCircle";

export default function TasbeehScreen() {
  const [renderCount, setRenderCount] = useState(true);
  const [count, setCount] = useState(0);
  const [tasbeehDuaa, setTabseehDuaa] = useState("سُبْحاَنَ اللهِ");
  const [renderDuaa, setRenderDuaa] = useState(false);

  function increment() {
    if (count === 33) {
      setTabseehDuaa("اَلْحَمْدُ لِلهِ");
    } else if (count === 66) {
      setTabseehDuaa("اَلّلَهُ اَكْبَرْ");
    } else if (count === 99) {
      setRenderDuaa(true);
      setRenderCount(false);
      setTabseehDuaa("آمين");
    } else if (count === 100) {
      setCount(0);
      setRenderCount(true);
      setRenderDuaa(false);
      setTabseehDuaa("سُبْحاَنَ اللهِ");
      return; // Early return to prevent further execution
    }
    setCount(count + 1);
  }

  return (
    <View style={styles.root}>
      {renderDuaa && (
        <DuaaWrapper>
          <Text style={styles.duaaAppearText}>
            لاَأِلَاهَ اِلاَّ اللّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلىَ كُلِّ شَيْءِِقَدِيرُ
          </Text>
        </DuaaWrapper>
      )}
      <View style={styles.counterDisplay}>
        <DuaaWrapper>
          <Text style={styles.duaaText}>{tasbeehDuaa}</Text>
        </DuaaWrapper>
        {renderCount && (
          <DuaaWrapper>
            <Text style={styles.counterTxt}>{count}</Text>
          </DuaaWrapper>
        )}
      </View>
      <TasbeehCircle onPress={increment}>سَبِّحِ</TasbeehCircle>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  duaaDisplay: {
    flex: 0.4,
    paddingBottom: 30,
  },
  counterDisplay: {
    flex: 0.3,
    paddingBottom: 20,
    alignItems: "center",
  },
  counterTxt: {
    alignItems: "center",
  },
  duaaText: {
    fontSize: 40,
    fontFamily: "AmiriRegular",
  },
  duaaAppearText: {
    fontSize: 25,
    fontFamily: "AmiriRegular",
  },
});
