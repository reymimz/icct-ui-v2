import { StyleSheet, View, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import Colors from "./Colors";

const OTPBox = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({});

  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          keyboardType={"number-pad"}
          ref={firstInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 1: text });
            text && secondInput.current.focus();
          }}
          style={styles.number}
          placeholder=""
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          keyboardType={"number-pad"}
          ref={secondInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 2: text });
            text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
          style={styles.number}
          placeholder=""
        />
      </View>
      <View style={styles.box}>
        <TextInput
          maxLength={1}
          keyboardType={"number-pad"}
          ref={thirdInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 3: text });
            text ? fourthInput.current.focus() : secondInput.current.focus();
          }}
          style={styles.number}
          placeholder=""
        />
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder=""
          maxLength={1}
          ref={fourthInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 4: text });
            !text && thirdInput.current.focus();
          }}
          keyboardType={"number-pad"}
          style={styles.number}
        />
      </View>
    </View>
  );
};

export default OTPBox;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  box: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 1,
    backgroundColor: Colors.light,
    marginVertical: 10,
    marginHorizontal: 6,
    padding: 0,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 18,
    color: Colors.lightGray,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    height: 50,
    width: 60,
  },
});
