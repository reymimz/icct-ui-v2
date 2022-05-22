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
import { signIn } from "../../constant/firebase.config";

const SignInScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;
  const [spinner, setSpinner] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.username) {
      handleError("Username required", "username");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Password required", "password");
      isValid = false;
    }
    if (isValid) {
      onhandleLogin();
    } else {
      Alert.alert("Testing");
    }
  };

  const [errors, setErrors] = useState({});
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const onhandleForgot = () => {
    navigation.navigate("ForgotPassword");
  };

  const onhandleRegister = () => {
    navigation.navigate("SignUp");
  };

  const onhandleLogin = async () => {
    setSpinner(true);
    try {
      await signIn(username, password);
      navigation.replace("Drawer");
    } catch (error) {
      alert(error);
    }
    setSpinner(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      vertical={true}
      style={styles.container}
    >
      <View style={styles.wrapContainer}>
        <View style={styles.logoContainer}>
          <Image source={Images.signin} style={styles.logo} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Student Online Portal</Text>
          <Text style={styles.des}>
            Please fill in the blank to access portal
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Input
            iconName="account-outline"
            placeholder="Email | Student ID"
            keyboard={"default"}
            onChangeText={(text) => handleOnchange(text, "username")}
            onFocus={() => handleError(null, "username")}
            error={errors.username}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            placeholder="Password"
            error={errors.password}
            maxLength={16}
            password
          />

          <TouchableOpacity>
            <Text style={styles.forgot} onPress={onhandleForgot}>
              Forgot Password
            </Text>
          </TouchableOpacity>

          <Button
            label={
              spinner ? (
                <ActivityIndicator size="small" color={Colors.white} />
              ) : (
                "Log In"
              )
            }
            top={40}
            onPress={validate}
          />
          <View style={styles.alreadyContainer}>
            <Text style={styles.new}>New Student? </Text>
            <TouchableOpacity onPress={onhandleRegister}>
              <Text style={styles.register}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

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
  inputContainer: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
  },
  logo: {
    marginTop: 40,
    marginBottom: 40,
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    marginBottom: 20,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  des: {
    color: Colors.lightGray,
    fontSize: 16,
  },
  forgot: {
    color: Colors.blue,
    fontSize: 16,
    marginTop: 20,
    textAlign: "right",
  },
  alreadyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  new: {
    color: Colors.lightGray,
    fontSize: 16,
    alignItems: "center",
  },
  register: {
    color: Colors.blue,
    fontSize: 16,
  },
});
