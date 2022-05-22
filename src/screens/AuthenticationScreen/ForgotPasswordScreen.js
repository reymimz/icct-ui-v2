import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { React, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Colors from "../../components/Colors";
import Images from "../../components/Images";
import Toolbar from "../../components/Toolbar";

const SignUpScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const [spinner, setSpinner] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Email required", "email");
      isValid = false;
    }
    if (isValid) {
      onhandleResetPassword();
    } else {
      Alert.alert("Error");
    }
  };

  const [errors, setErrors] = useState({});

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const onhandleBack = () => {
    navigation.goBack();
  };

  const onhandleResend = () => {
    Alert.alert("Set Timer Here");
  };

  const onhandleResetPassword = () => {
    setSpinner(true);
    setTimeout(() => {
      try {
        setSpinner(false);
        navigation.navigate("NewPassword");
      } catch (error) {
        Alert.alert(error);
      }
    }, 1000);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      vertical={true}
      style={styles.container}
    >
      <View style={styles.wrapContainer}>
        <View style={styles.logoContainer}>
          <Toolbar
            style={styles.toolbar}
            fgColor={Colors.gray}
            label={"Forgot Password"}
            onPress={onhandleBack}
          />
          <Image source={Images.email} style={styles.logo} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.des}>we just sent you at </Text>
        </View>

        <Input
          placeholder="Enter your email address"
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          error={errors.email}
        />

        <Button
          label={
            spinner ? (
              <ActivityIndicator size="large" color={Colors.white} />
            ) : (
              "Reset Password"
            )
          }
          top={40}
          onPress={validate}
        />
        <View style={styles.alreadyContainer}>
          <TouchableOpacity onPress={onhandleResend}>
            <Text style={styles.resend}> Resend </Text>
          </TouchableOpacity>
          <Text style={styles.email}>email verification </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    marginTop: 10,
    marginBottom: 10,
    height: 170,
    width: 170,
    resizeMode: "contain",
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    color: Colors.gray,
    fontSize: 20,
    fontWeight: "bold",
  },
  des: {
    color: Colors.lightGray,
    fontSize: 16,
  },

  alreadyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  resend: {
    color: Colors.red,
    fontSize: 16,
  },
  email: {
    color: Colors.lightGray,
    fontSize: 16,
    alignItems: "center",
  },
});
