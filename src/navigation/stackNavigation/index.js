import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../../screens/AuthenticationScreen/SignInScreen";
import SignUpScreen from "../../screens/AuthenticationScreen/SignUpScreen";
import ForgotPasswordScreen from "../../screens/AuthenticationScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../../screens/AuthenticationScreen/NewPasswordScreen";
import OTPScreen from "../../screens/AuthenticationScreen/OTPScreen";
import DrawerNavigation from "../../navigation/drawerNavigation/index";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
