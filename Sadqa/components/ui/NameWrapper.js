import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function NameWrapper({ name, engName, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View styles={styles.ayah}>
          <Text style={styles.nameTxt}>
            {engName} {name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: Colors.accent,
    flex: 1,
  },
  nameTxt: {
    fontSize: 30,
    fontFamily: "AmiriRegular",
    textAlign: "center",
  },
  engTxt: {
    fontSize: 30,
    fontFamily: "AmiriRegular",
  },
  ayah: {
    flexDirection: "row", // Display children in a row
    alignItems: "center", // Center align vertically
    justifyContent: "flex-end", // Align children to the right
  },
});
