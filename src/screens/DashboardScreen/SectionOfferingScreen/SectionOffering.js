import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../../components/Layout";
import Colors from "../../../components/Colors";

const SectionOffering = () => {
  return (
    <View style={styles.container}>
      <Layout title="Section Offering">
        <Text>Section Offering</Text>
      </Layout>
    </View>
  );
};

export default SectionOffering;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
