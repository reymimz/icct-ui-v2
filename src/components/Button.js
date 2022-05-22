import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "./Colors";

const Button = (props) => {
  const { label, onPress, top } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.rootContainer, { marginTop: top }]}
    >
      <Text
        style={{
          color: Colors.white,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  rootContainer: {
    height: 46,
    width: "100%",
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
