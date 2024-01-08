import { View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
export default function GeneralButtonLight({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        {children}
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
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  pressed: {
    opacity: 0.9,
  },
});
