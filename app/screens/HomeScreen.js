import React, { useState, useEffect } from "react";

import {
  Button,
  Alert,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [matricNo, setMatricNo] = useState("");
  const [biometryType, setBiometryType] = useState("");

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const useBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      Alert.alert(
        `No ${biometryType} data found`,
        `Would you like to enroll your ${biometryType}?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Enroll",
            onPress: () => {
              if (biometryType === "Face ID") {
                handleFaceIDAuth();
              } else if (biometryType === "Fingerprint") {
                handleFingerprintAuth();
              }
            },
          },
        ]
      );
      return;
    }

    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: `Login with ${biometryType}`,
        disableDeviceFallback: false,
      });

      if (biometricAuth.success) {
        // Authentication was successful
        Alert.alert("Authentication Successful", "You are logged in.");
        // Save Matric No to AsyncStorage
        await AsyncStorage.setItem("matricNo", matricNo);

        navigation.navigate("HomeScreenstack", {
          name: "Available clases today",
        });
      } else {
        // Authentication failed or was canceled
        Alert.alert(
          "Authentication Failed",
          "Please try again or use your password."
        );
      }
    } catch (error) {
      console.error(`Biometric ${biometryType} authentication error:`, error);
      Alert.alert(
        "Error",
        `An error occurred during ${biometryType} authentication.`
      );
    }
  };

  const handleFaceIDAuth = async () => {
    if (Platform.OS === "ios") {
      const faceIDSupported =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (
        faceIDSupported.includes(LocalAuthentication.AuthenticationType.FACE)
      ) {
        setBiometryType("Face ID");
        useBiometricAuth();
      } else {
        Alert.alert(
          "Face ID Not Supported",
          "Face ID is not available on this device."
        );
      }
    } else {
      Alert.alert(
        "Face ID Not Supported",
        "Face ID is only available on iOS devices."
      );
    }
  };

  const handleFingerprintAuth = async () => {
    const fingerprintIDSupported =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (
      fingerprintIDSupported.includes(
        LocalAuthentication.AuthenticationType.FINGERPRINT
      )
    ) {
      setBiometryType("Fingerprint");
      useBiometricAuth();
    } else {
      Alert.alert(
        "Fingerprint Not Supported",
        "Fingerprint authentication is not available on this device."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        {isBiometricSupported
          ? ""
          : "Biometrics are not available on this device"}
      </Text>
      <Text style={styles.primaryText}>Welcome to Smart Attendance</Text>
      <Text style={styles.subText}>matric no</Text>
      <TextInput
        placeholder="Enter Matric No"
        onChangeText={(text) => setMatricNo(text)}
        value={matricNo}
      />

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          if (matricNo) {
            setBiometryType("Biometrics");
            handleFingerprintAuth();
          } else {
            Alert.alert("Matric No Missing", "Please enter your Matric No.");
          }
        }}
      >
        <Image
          source={require("../assets/Vector(3).png")}
          style={styles.image}
        />
        <Text style={styles.primaryText}>Fingerprint</Text>
        <Text style={styles.subText}>
          Mark your attendance of the class using your fingerprint scanner
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (matricNo) {
            setBiometryType("Biometrics");
            useBiometricAuth();
          } else {
            Alert.alert("Matric No Missing", "Please enter your Matric No.");
          }
        }}
        style={styles.touchableOpacity}
      >
        <Image
          source={require("../assets/Rectangle.png")}
          style={styles.image}
        />
        <Text style={styles.primaryText}>Facial recognition</Text>
        <Text style={styles.subText}>
          Mark your attendance of the class using your phone camera
        </Text>
      </TouchableOpacity>

      <Button
        title="Login As A Lecturer"
        onPress={() => {
          navigation.navigate("Courserattendancepage", {
            name: "Available clases today",
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  touchableOpacity: {
    width: width / 1.2,
    height: height / 2.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
  },
  image: {
    width: width / 2.9,
    height: width / 2.9,
    resizeMode: "contain",
    marginBottom: 10,
  },
  primaryText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "#767676",
    width: "80%",
  },
});

export default HomeScreen;
