import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../../../components/Layout";
import Colors from "../../../components/Colors";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Layout title="Dashboard">
        <Text>Dashboard</Text>
      </Layout>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
