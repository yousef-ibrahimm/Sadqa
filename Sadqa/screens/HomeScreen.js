import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>Working Progress</Text>
      <Text style={styles.txt}>Navigate to other tabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  txt: {
    marginTop: 150,
    fontSize: 30,
  },
});
