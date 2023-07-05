import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/courselist';
import Attendacesignin from '../screens/attendancesignin';
import Attendacesigninfingerprint from '../screens/attendancesignin(fingerprint)';
import Courserattendancepage from '../screens/courseattendancepage(lecturer)';
import Courserattendancepage2 from '../screens/courseattendacepage(lecturer)';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreenstack"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Attendacesignin"
        component={Attendacesignin}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Attendacesigninfingerprint"
        component={Attendacesigninfingerprint}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Courserattendancepage"
        component={Courserattendancepage}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Courserattendancepage2"
        component={Courserattendancepage2}
        options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
