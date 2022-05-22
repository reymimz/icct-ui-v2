import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import DrawerNav from "../../components/Drawer";
import Colors from "../../components/Colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import DashboardScreen from "../../screens/DashboardScreen/DashboardScreen/Dashboard";
import AccountScreen from "../../screens/DashboardScreen/AccountScreen/Account";
import CalendarScreen from "../../screens/DashboardScreen/CalendarScreen/Calendar";
import GradesScreen from "../../screens/DashboardScreen/GradesScreen/Grades";
import RegistrationScreen from "../..//screens/DashboardScreen/RegistrationScreen/Registration";
import ScheduleScreen from "../../screens/DashboardScreen/ScheduleScreen/Schedule";
import SectionOfferingScreen from "../../screens/DashboardScreen/SectionOfferingScreen/SectionOffering";
import ProfileScreen from "../../navigation/bottomTabNavigation/index";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ paddingTop: 0 }}
      {...props}
      showsVerticalScrollIndicator={false}
    >
      <DrawerNav>
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={Colors.blue}
              size={26}
            />
          )}
          label="Dashboard"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Dashboard")}
          activeBackgroundColor="transparent"
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color={Colors.blue}
              size={26}
            />
          )}
          label="Section Offering"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("SectionOffering")}
          activeBackgroundColor="transparent"
        />
        <DrawerItem
          icon={() => <AntDesign name="form" color={Colors.blue} size={24} />}
          label="Registration"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Registration")}
          activeBackgroundColor="transparent"
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="calendar-clock"
              color={Colors.blue}
              size={26}
            />
          )}
          label="Schedule"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Schedule")}
          activeBackgroundColor="transparent"
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="account-edit"
              color={Colors.blue}
              size={28}
            />
          )}
          label="Profile"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Profile")}
          activeBackgroundColor="transparent"
        />
        <DrawerItem
          icon={() => (
            <MaterialIcons name="grade" color={Colors.blue} size={26} />
          )}
          label="Grades"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Grades")}
          activeBackgroundColor="transparent"
        />
        <DrawerItem
          icon={() => (
            <MaterialIcons
              name="account-circle"
              color={Colors.blue}
              size={26}
            />
          )}
          label="Account"
          labelStyle={{ fontSize: 20, marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Account")}
          activeBackgroundColor="transparent"
        />
      </DrawerNav>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Grades" component={GradesScreen} />
      <Drawer.Screen name="Registration" component={RegistrationScreen} />
      <Drawer.Screen name="Schedule" component={ScheduleScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SectionOffering" component={SectionOfferingScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
