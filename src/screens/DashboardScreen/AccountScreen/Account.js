import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../../components/Layout";
import Colors from "../../../components/Colors";

const Account = () => {
  return (
    <View style={styles.container}>
      <Layout title="Account">
        <Text>Account</Text>
      </Layout>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
