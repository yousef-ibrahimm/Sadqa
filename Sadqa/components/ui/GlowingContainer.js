import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

const GlowingContainer = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.innerContainer}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5, // for Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginVertical: 20,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4, // optional
    borderColor: "black", // optional
  },
});

export default GlowingContainer;
