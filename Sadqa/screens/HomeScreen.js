import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
