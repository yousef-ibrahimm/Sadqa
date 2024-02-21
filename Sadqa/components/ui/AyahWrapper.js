import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function AyahWrapper({ text, num, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View styles={styles.ayah}>
          <Text style={styles.ayahTxt}>{text}</Text>
        </View>
        <View styles={styles.numberContainer}>
          <View style={styles.NumberCircle}>
            <Text style={styles.numText}>{num.split(":")[1]}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.accent,
  },
  NumberCircle: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
  ayahTxt: {
    fontSize: 35,
    textAlign: "right",
    verticalAlign: "middle",
    fontFamily: "SaleemQuran",
    color: "black",
  },
  numText: {
    color: "#050505",
  },
});
