import React from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const TasbeehCircle = ({ children, onPress }) => {
  return (
    <View style={styles.circle}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Colors.accent,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default TasbeehCircle;
