import React, { useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { AntDesign } from "@expo/vector-icons";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ color: "#909090" }}>Date of Birth</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ fontSize: 20, color: "#909090" }}
            onPress={showDatePicker}
          >
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : "No date selected"}
          </Text>
          <AntDesign
            style={{ paddingHorizontal: 5 }}
            name="calendar"
            size={24}
            color="#0067FF"
            onPress={showDatePicker}
          />
        </View>
      </View>

      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;
