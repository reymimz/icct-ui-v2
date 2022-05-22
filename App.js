import { StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";
import Navigation from "./src/navigation/stackNavigation/index";
import Drawer from "./src/navigation/drawerNavigation/index";
import Colors from "./src/components/Colors";
import { auth } from "./src/constant/firebase.config";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {auth.currentUser ? <Drawer /> : <Navigation />}
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.white,
  },
});
