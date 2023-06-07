import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/logo.png")} // Replace with your image source
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4BB749",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginTop:30
  },
  logo: {
    width: 150,
    height: 40,
  },
});

export default CustomHeader;
