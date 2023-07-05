import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./stacknav";
import ProfileScreen from "../screens/courseattendancepage(lecturer)";
import CustomHeader from "../componets/CustomHeader";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
  >
    <Stack.Screen name="HomeScreentab" component={HomeScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
  >
    <Stack.Screen name="ProfileScreentab" component={ProfileScreen} />
  </Stack.Navigator>
);

const TabBarLabel = ({ focused, color, title, iconName }) => (
  <View style={styles.tabBarLabelContainer}>
    <Ionicons
      name={iconName}
      size={20}
      color={color}
      style={styles.icon}
    />
    <Text
      style={[
        styles.tabBarLabelText,
        { color, fontWeight: focused ? "bold" : "normal" },
      ]}
    >
      {title}
    </Text>
  </View>
);

const BottomNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#4BB749",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
      tabBarStyle: [{ display: "flex" }, null],
      tabBarLabelPosition: "below-icon",
      tabBarLabel: ({ focused, color }) => {
        let iconName;

        if (route.name === "Attendance") {
          iconName = focused ? "checkbox" : "checkbox-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person";
        }

        return (
          <TabBarLabel
            focused={focused}
            color={color}
            title={route.name}
            iconName={iconName}
          />
        );
      },
    })}
  >
    <Tab.Screen name="Attendance" component={HomeStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center'
  },
  tabBarLabelText: {
    fontSize: 13,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default BottomNavigator;
