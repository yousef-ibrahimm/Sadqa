import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import DuaaWrapper from "../components/ui/DuaaWrapper";
import TasbeehCircle from "../components/ui/TasbeehCircle";

export default function TasbeehScreen() {
  const [count, setCount] = useState(0);
  const [tasbeehDuaa, setTabseehDuaa] = useState("سُبْحاَنَ اللهِ");
  const [renderDuaa, setRenderDuaa] = useState(false);

  function increment() {
    if (count > 32) {
      setTabseehDuaa("اَلْحَمْدُ لِلهِ");
    } else if (count > 65) {
      setTabseehDuaa("اَلّلَهُ اَكْبَرْ");
    } else if (count > 98) {
      setRenderDuaa(true);
      setTabseehDuaa("آمين");
    } else if (count === 100) {
      reset();
    }
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
    setTabseehDuaa("سُبْحاَنَ اللهِ");
  }

  return (
    <View style={styles.root}>
      {renderDuaa && (
        <DuaaWrapper>
          <Text>
            لاَأِلَاهَ اِلاَّ اللّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلىَ كُلِّ شَيْءِِقَدِيرُ
          </Text>
        </DuaaWrapper>
      )}
      <View style={styles.counterDisplay}>
        <DuaaWrapper>
          <Text>{tasbeehDuaa}</Text>
        </DuaaWrapper>
        <DuaaWrapper>
          <Text style={styles.counterTxt}>{count}</Text>
        </DuaaWrapper>
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
});
