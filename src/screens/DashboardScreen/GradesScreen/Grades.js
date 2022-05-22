import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../../components/Layout";
import Colors from "../../../components/Colors";

const Grades = () => {
  return (
    <View style={styles.container}>
      <Layout title="Grades">
        <Text>Grades</Text>
      </Layout>
    </View>
  );
};

export default Grades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
