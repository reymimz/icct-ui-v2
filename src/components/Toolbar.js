import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./Colors";

const Toolbar = (props) => {
  const { label, bgColor, fgColor, onPress } = props;
  return (
    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={"arrow-back"} size={30} color={Colors.blue} />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color: fgColor }]}>{label}</Text>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
    borderBottomColor: Colors.light,
    borderBottomWidth: 2,
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    height: 30,
    width: "100%",
    textAlign: "left",
    marginLeft: 15,
  },
});
