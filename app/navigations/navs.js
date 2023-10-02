import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './bottomtabnav';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen';
import AddThumbprintScreen from './../screens/AddThumbprintScreen';
import LoginWithThumbprintScreen from './../screens/LoginWithThumbprintScreen';


import Courselist from "./../screens/courselist";
import Attendacesignin from "./../screens/attendancesignin";
import Attendacesigninfingerprint from "./../screens/attendancesignin(fingerprint)";
import Courserattendancepage from "./../screens/courseattendancepage(lecturer)";
import Courserattendancepage2 from "./../screens/courseattendacepage(lecturer)";

const Stack = createStackNavigator();


const Navs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddThumbprint" component={AddThumbprintScreen} />
        <Stack.Screen
          name="LoginWithThumbprint"
          component={LoginWithThumbprintScreen}
        />
        <Stack.Screen
          name="HomeScreenstack"
          component={Courselist}
          ptions={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Attendacesignin"
          component={Attendacesignin}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Attendacesigninfingerprint"
          component={Attendacesigninfingerprint}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Courserattendancepage"
          component={Courserattendancepage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Courserattendancepage2"
          component={Courserattendancepage2}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
      {/* <BottomNavigator /> */}
    </NavigationContainer>
  );
};


export default Navs;

