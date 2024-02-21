import React from "react";
import Colors from "../../constants/colors";
import { View, Text, StyleSheet } from "react-native";

const NotebookWrapper = ({ title, children }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  titleView: {
    backgroundColor: "yellow",
  },
  content: {
    fontSize: 16,
  },
});

export default NotebookWrapper;
