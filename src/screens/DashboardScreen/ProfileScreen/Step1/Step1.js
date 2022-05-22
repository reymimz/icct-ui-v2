import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import CollapsibleView from "../components/@eliav2/react-native-collapsible-view";
import { useNavigation } from "@react-navigation/native";
import ProgramInformation from "../components/Step1/ProgramInformation";
import PersonalInformation from "../components/Step1/PersonalInformation";

import Colors from "../../../../components/Colors";
import Layout from "../../../../components/Layout";

const Step1 = () => {
  return (
    <View style={styles.container}>
      <Layout title="Profile">
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <CollapsibleView
              style={{ borderWidth: 0 }}
              title={
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 20,
                    alignSelf: "flex-start",
                  }}
                >
                  Program Information
                </Text>
              }
              initExpanded
            >
              <ProgramInformation />
            </CollapsibleView>

            <CollapsibleView
              style={{ borderWidth: 0 }}
              title={
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 20,
                    alignSelf: "flex-start",
                  }}
                >
                  Personal Information
                </Text>
              }
              initExpanded
            >
              <PersonalInformation />
            </CollapsibleView>
            {/*
          <CollapsibleView
            style={{ borderWidth: 0 }}
            title={
              <Text
                style={{
                  color: "#000000",
                  fontSize: 20,
                  alignSelf: "flex-start",
                }}
              >
                Home Address
              </Text>
            }
            initExpanded
          >
            <HomeAddress />
          </CollapsibleView>

          <CollapsibleView
            style={{ borderWidth: 0 }}
            title={
              <Text
                style={{
                  color: "#000000",
                  fontSize: 20,
                  alignSelf: "flex-start",
                }}
              >
                Provincial Address
              </Text>
            }
            initExpanded
          >
            <ProvincialAddress />
          </CollapsibleView> */}
          </ScrollView>
        </ScrollView>
      </Layout>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
