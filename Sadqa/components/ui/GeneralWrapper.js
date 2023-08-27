import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function GeneralWrapper({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <View styles={styles.ayah}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.accent,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 1,
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
