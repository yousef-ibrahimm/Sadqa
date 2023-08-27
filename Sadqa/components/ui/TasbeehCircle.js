import React from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const TasbeehCircle = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.circle}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
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
    fontSize: 30,
    fontFamily: "AmiriBold",
  },
});

export default TasbeehCircle;
