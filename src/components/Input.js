import { React, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "./Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Input = ({
  label,
  iconName,
  error,
  password,
  marginBottom,
  maxLength,
  keyboard,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginBottom: marginBottom }}>
      <View
        style={[
          style.inputContainer,
          {
            borderBottomColor: error
              ? Colors.red
              : isFocused
              ? Colors.blue
              : Colors.grey,
            alignItems: "center",
          },
        ]}
      >
        <Icon name={iconName} size={24} color={Colors.blue} />
        <TextInput
          underlineColorAndroid={"transparent"}
          autoCorrect={false}
          placeholder={label}
          maxLength={maxLength}
          keyboardType={keyboard}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{
            color: Colors.gray,
            flex: 1,
            fontSize: 16,
            marginLeft: 8,
          }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            color={Colors.lightGray}
            size={24}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 5, color: Colors.red, fontSize: 14 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  inputContainer: {
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1.5,
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 8,
  },
});
