import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "./Colors";

const PickerList = (props) => {
  const { selectedValue, onValueChange, item } = props;

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={[styles.picker]}
    >
      {item.map((text, index) => (
        <Picker.Item key={index} label={text} value={text} />
      ))}
    </Picker>
  );
};

export default PickerList;

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 150,
    color: "#000",
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
