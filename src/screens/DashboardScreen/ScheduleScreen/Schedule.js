import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../../components/Layout";
import Colors from "../../../components/Colors";

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Layout title="Schedule">
        <Text>Schedule</Text>
      </Layout>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
