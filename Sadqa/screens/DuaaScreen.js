import { View, Text, StyleSheet } from "react-native";
import { supabase } from "../App";
import { useEffect, useState } from "react";
import Colors from "../constants/colors";
import DuaaWrapper from "../components/ui/DuaaWrapper";
import GeneralButton from "../components/ui/GeneralButton";

export default function DuaaScreen() {
  const [duaas, setDuaas] = useState([]);
  const [duaa, setDuaa] = useState(
    "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ"
  );
  const [names, setNames] = useState([]);

  async function getNames() {
    const { data, error } = await supabase.from("names").select("name");
    if (error) {
      console.log("error");
    } else {
      return data;
    }
  }

  async function getDuaas() {
    const { data, error } = await supabase.from("duaa").select("duaa");

    if (error) {
      console.log("error");
    } else {
      return data;
    }
  }

  function getRandomDuaa(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
  useEffect(() => {
    getDuaas().then((data) => {
      setDuaas(data);
      setDuaa(getRandomDuaa(duaas).duaa);
    });
  }, []);

  useEffect(() => {
    getNames().then((data) => {
      setNames(data);
    });
  }, []);
  return (
    <View style={styles.root}>
      <View style={styles.rootContainer}>
        {duaa && (
          <DuaaWrapper>
            <Text style={styles.duaaTxt}>{duaa}</Text>
          </DuaaWrapper>
        )}
        <GeneralButton onPress={() => setDuaa(getRandomDuaa(duaas).duaa)}>
          <Text style={styles.buttonTxt}>Get Duaa دعاء جديد</Text>
        </GeneralButton>
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
    marginTop: 150,
    alignItems: "center",
  },
  duaaTxt: {
    fontFamily: "SaleemQuran",
    fontSize: 40,
  },
  buttonTxt: {
    fontFamily: "AmiriRegular",
    fontSize: 20,
    color: Colors.accent,
  },
});
