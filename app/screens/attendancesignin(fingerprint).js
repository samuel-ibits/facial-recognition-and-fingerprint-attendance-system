import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";

const { width, height } = Dimensions.get("window");

import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = ({ navigation }) => {
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
        Alert.alert(
          "Attendance Marked Successfully",
          "You are marked present."
        );
        // Save Matric No to AsyncStorage

        let user = await AsyncStorage.getItem("SA@user");
        let course = await AsyncStorage.getItem("SA@event");
        console.log(user);
        let attendance_object = {
          id: 0,
          matricNumber: user.matricNumber,
          course: course,
        };

        console.log(attendance_object);

        await AsyncStorage.setItem(
          "SA@course@" + course,
          JSON.stringify(attendance_object)
        );

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
      <View style={styles.touchableOpacity}>
        <View style={styles.textholder}>
          <Text style={styles.primaryText}>MTh 223</Text>
          <Text style={styles.subText}>Numerical analysis</Text>
        </View>
        <TouchableOpacity onPress={handleFingerprintAuth}>
          <View style={styles.textholder}>
            <Text style={styles.primaryText}>Fingerprint</Text>
            <Text style={styles.subText}>
              Mark your attendance of the class {"\n"} using your fingerprint
              scanner
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleFingerprintAuth}>
        <View style={styles.bottomel}>
          <Image
            source={require("../assets/Vector(3).png")}
            style={styles.image}
          />
          <Text style={styles.subText}>
            Place your hand on your finger sensor
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginVertical: 30,
  },
  bottomel: {
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOpacity: {
    width: width / 1.1,
    height: height / 2.8,
    paddingVertical: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
  },
  textholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
  },
  image: {
    width: width / 2.5,
    height: width / 2.5,
    resizeMode: "contain",
  },
  primaryText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#767676",
  },
  image: {
    width: width / 2.9,
    height: width / 2.8,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default App;
