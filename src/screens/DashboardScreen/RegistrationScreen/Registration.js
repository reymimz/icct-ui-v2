import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../../components/Layout";
import Colors from "../../../components/Colors";

const Registration = () => {
  return (
    <View style={styles.container}>
      <Layout title="Registration">
        <Text>Registration</Text>
      </Layout>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
