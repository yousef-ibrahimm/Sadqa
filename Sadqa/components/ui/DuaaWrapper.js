import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function DuaaWrapper({ children }) {
  return (
    <View style={styles.container}>
      <View styles={styles.ayah}>
        <Text style={styles.ayahTxt}>{children}</Text>
      </View>
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
    borderColour: "black",
    borderWidth: 3,
    backgroundColor: Colors.accent,
  },
  NumberCircle: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  ayahTxt: {
    fontSize: 20,
    textAlign: "right",
    verticalAlign: "middle",
  },
  numText: {
    color: "white",
  },
});
