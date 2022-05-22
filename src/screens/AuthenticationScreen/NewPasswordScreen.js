import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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

const NewPasswordScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    password: "",
    retype_password: "",
  });

  const [spinner, setSpinner] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.password) {
      handleError("Password required", "password");
      isValid = false;
    } else if (
      !inputs.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,24}$/
      )
    ) {
      handleError(
        <View style={styles.dotContainer}>
          <View style={styles.phoneContainer}>
            <Text style={styles.dot}>{"\u2B24"}</Text>
            <Text style={styles.phone}>8-24 characters</Text>
          </View>
          <View style={styles.phoneContainer}>
            <Text style={styles.dot}>{"\u2B24"}</Text>
            <Text style={styles.phone}>Uppercase and lowercase</Text>
          </View>

          <View style={styles.phoneContainer}>
            <Text style={styles.dot}>{"\u2B24"}</Text>
            <Text style={styles.phone}>Special character and number</Text>
          </View>
        </View>,
        "password"
      );
      isValid = false;
    }
    if (!inputs.retype_password) {
      handleError("Confirm password required", "retype_password");
      isValid = false;
    } else if (inputs.retype_password !== inputs.password) {
      handleError(
        "Password and Confirm password does not match ",
        "retype_password"
      );
      isValid = false;
    }
    if (isValid) {
      onhandleContinue();
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

  const onhandleBack = () => {
    navigation.goBack();
  };

  const onhandleContinue = () => {
    setSpinner(true);
    setTimeout(() => {
      try {
        setSpinner(false);
        navigation.navigate("SignIn");
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
            bgColor={Colors.white}
            fgColor={Colors.gray}
            label={"New Password"}
            onPress={onhandleBack}
          />
          <Image source={Images.reset} style={styles.logo} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Create New Password</Text>
          <Text style={styles.des}>
            Your new password must be different from previous used passwords
          </Text>
        </View>

        <Input
          onChangeText={(text) => handleOnchange(text, "password")}
          onFocus={() => handleError(null, "password")}
          iconName="lock-outline"
          placeholder="Password"
          error={errors.password}
          maxLength={16}
          password
        />
        <Input
          onChangeText={(text) => handleOnchange(text, "retype_password")}
          onFocus={() => handleError(null, "retype_password")}
          iconName="lock-outline"
          placeholder="Confirm password"
          error={errors.retype_password}
          maxLength={16}
          password
        />

        <Button
          label={
            spinner ? (
              <ActivityIndicator size="small" color={Colors.white} />
            ) : (
              "Continue"
            )
          }
          top={40}
          onPress={validate}
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

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
  headerContainer: {
    width: "100%",
    marginBottom: 20,
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
  dotContainer: {
    marginTop: 5,
    flexDirection: "column",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    color: Colors.red,
    fontSize: 8,
  },
  phone: {
    marginLeft: 8,
    color: Colors.red,
    fontSize: 14,
  },
});
