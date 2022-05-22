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
import { collection, addDoc } from "firebase/firestore";
import { auth, signUp, db } from "../../constant/firebase.config";

const SignUpScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    retype_password: "",
  });

  const { email, username, phone, password } = inputs;
  const [spinner, setSpinner] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.username) {
      handleError("Username required", "username");
      isValid = false;
    }

    if (!inputs.email) {
      handleError("Email required", "email");
      isValid = false;
    } else if (
      !inputs.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      handleError("Enter a valid email", "email");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Mobile number required", "phone");
      isValid = false;
    } else if (!inputs.phone.match(/(^(\+639)(\d){9}$)/)) {
      handleError("Mobile Number Format Ex. +639399532453", "phone");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Password required", "password");
      isValid = false;
    } else if (
      !inputs.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,24}$/
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
      onhandleRegister();
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

  const onhandleLogin = () => {
    navigation.goBack();
  };

  const onhandleRegister = async () => {
    setSpinner(true);
    try {
      const res = await signUp(email, password);
      const user = res.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username: username,
        email: user.email,
        phone_number: phone,
        password: password,
      });
      navigation.navigate("OTP", { phone });
    } catch (error) {
      alert(e);
    }
    setSpinner(false);
    setInputs({ ...(inputs = "") });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      vertical={true}
      style={styles.container}
    >
      <View style={styles.wrapContainer}>
        <View style={styles.logoContainer}>
          <Image source={Images.signup} style={styles.logo} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>New Student Account</Text>
          <Text style={styles.des}>
            Enter your active email account and mobile number
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Input
            iconName="account-outline"
            placeholder="Username"
            keyboard={"default"}
            onChangeText={(text) => handleOnchange(text, "username")}
            onFocus={() => handleError(null, "username")}
            error={errors.username}
          />
          <Input
            iconName="email-outline"
            placeholder="Email"
            keyboard={"email-address"}
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            error={errors.email}
          />
          <Input
            iconName="phone-outline"
            placeholder="Mobile Number"
            keyboard={"phone-pad"}
            onChangeText={(text) => handleOnchange(text, "phone")}
            error={errors.phone}
            maxLength={13}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            placeholder="Password"
            error={errors.password}
            maxLength={24}
            password
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "retype_password")}
            onFocus={() => handleError(null, "retype_password")}
            iconName="lock-outline"
            placeholder="Confirm password"
            error={errors.retype_password}
            maxLength={24}
            password
          />
          <View style={styles.termsContainer}>
            <Text style={styles.policy}>
              I have read and accept the{" "}
              <Text style={styles.terms}>Terms of Service </Text>&{" "}
              <Text style={styles.privacy}>Privacy Policy</Text>
            </Text>
          </View>

          <Button
            label={
              spinner ? (
                <ActivityIndicator size="small" color={Colors.white} />
              ) : (
                "Register"
              )
            }
            top={40}
            onPress={validate}
          />
          <View style={styles.alreadyContainer}>
            <Text style={styles.new}>Already have account? </Text>
            <TouchableOpacity onPress={onhandleLogin}>
              <Text style={styles.login}> Log In</Text>
            </TouchableOpacity>
          </View>
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
  inputContainer: {
    width: "100%",
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
    height: 200,
    width: 200,
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
    color: Colors.gray,
    fontSize: 20,
    fontWeight: "bold",
  },
  des: {
    color: Colors.lightGray,
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  policy: {
    color: Colors.gray,
    fontSize: 16,
  },
  terms: {
    color: Colors.blue,
    fontSize: 16,
  },
  privacy: {
    color: Colors.blue,
    fontSize: 16,
  },
  alreadyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  new: {
    color: Colors.lightGray,
    fontSize: 16,
    alignItems: "center",
  },
  login: {
    color: Colors.blue,
    fontSize: 16,
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
