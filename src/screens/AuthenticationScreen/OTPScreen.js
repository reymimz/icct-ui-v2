import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Button from "../../components/Button";
import Colors from "../../components/Colors";
import Images from "../../components/Images";
import Toolbar from "../../components/Toolbar";
import OTPBox from "../../components/OTPBox";

const OTPScreen = ({
  route: {
    params: { phone },
  },
  navigation,
}) => {
  const onhandleVerify = () => {
    navigation.replace("Drawer");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      vertical={true}
      style={styles.container}
    >
      <View style={styles.wrapContainer}>
        <View style={styles.logoContainer}>
          <Toolbar fgColor={Colors.gray} label={"Verification"} />
          <Image source={Images.otp} style={styles.logo} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Enter OTP code</Text>
          <Text style={styles.des}>we just sent you at {phone}</Text>
        </View>

        <OTPBox />

        <Button label="Verify Now" top={40} onPress={onhandleVerify} />
        <View style={styles.alreadyContainer}>
          <Text style={styles.otp}>Did not recieved an OTP? </Text>
          <TouchableOpacity>
            <Text style={styles.resend}> Resend </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OTPScreen;

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
    alignItems: "center",
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
  otp: {
    color: Colors.lightGray,
    fontSize: 18,
    alignItems: "center",
  },
  resend: {
    color: Colors.red,
    fontSize: 17,
    fontWeight: "bold",
  },
});
