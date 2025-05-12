import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const CustomButton = ({ text, action, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "red",
  },
  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },
  container_TERTIARY: {},

  text: { color: "white", textAlign: "center", fontWeight: "bold" },
  text_TERTIARY: {
    color: "grey",
  },
  text_SECONDARY: {
    color: "#3B71F3",
  },
});
export default CustomButton;
