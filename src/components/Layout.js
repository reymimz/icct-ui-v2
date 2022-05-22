import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Images from "./Images";
import Colors from "./Colors";

const Layout = (props) => {
  const { title, children } = props;
  return (
    <ImageBackground style={styles.rootContainer} source={Images.background}>
      <View style={styles.wrapContainer}>
        <View style={styles.topContainer}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: Colors.white,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Layout;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    resizeMode: "contain",
  },
  wrapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  bottomContainer: {
    height: "85%",
    width: "100%",
    backgroundColor: Colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 30,
    flexDirection: "column",
  },
});
