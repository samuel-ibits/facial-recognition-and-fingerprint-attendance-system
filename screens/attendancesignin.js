import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() =>
          navigation.navigate("Attendacesigninfingerprint", {
            name: "Attendacesigninfingerprint",
          })
        }
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

      <TouchableOpacity style={styles.touchableOpacity}>
        <Image
          source={require("../assets/Rectangle.png")}
          style={styles.image}
        />
        <Text style={styles.primaryText}>Facial recognition</Text>
        <Text style={styles.subText}>
          Mark your attendance of the class using your phone camera
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default App;
