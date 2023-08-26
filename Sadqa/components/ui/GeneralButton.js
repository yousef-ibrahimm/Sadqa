import { View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
export default function GeneralButton({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>{children}</Pressable>
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
});
