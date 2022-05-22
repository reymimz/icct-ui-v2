import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Colors from "./Colors";
import Images from "./Images";
import { MaterialIcons } from "@expo/vector-icons";

const DrawerContent = (props) => {
  const onViewProfile = () => {
    Alert.alert("Profile Pressed");
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topOverlay}>
          <View style={styles.profileHeader}>
            <Image source={Images.profile} style={styles.profile} />
            <View style={styles.titleContainer}>
              <View style={styles.userContainer}>
                <Text style={styles.title}>reymimz</Text>
                <TouchableOpacity onPress={onViewProfile}>
                  <MaterialIcons
                    name="arrow-drop-down"
                    color={Colors.white}
                    size={35}
                    style={{ alignSelf: "flex-end" }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.admin}>20192221</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.wrapOverlay}></View>
        <View style={styles.bottomOverlay}>{props.children}</View>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    width: "100%",
    height: 160,
    backgroundColor: Colors.white,
  },
  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    top: 0,
    bottom: 0,
    borderBottomRightRadius: 60,
    backgroundColor: Colors.blue,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
    flex: 1,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 10,
    marginTop: 30,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  profile: {
    height: 70,
    width: 70,
    resizeMode: "cover",
    marginRight: 20,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  admin: {
    color: Colors.white,
    fontSize: 16,
    color: "yellow",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapOverlay: {
    flex: 1,
    backgroundColor: Colors.blue,
    padding: 300,
  },
  bottomOverlay: {
    position: "absolute",
    top: 0,
    left: 20,
    top: 0,
    bottom: 0,
    borderTopLeftRadius: 60,
    backgroundColor: Colors.white,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 30,
    flex: 1,
  },
});
