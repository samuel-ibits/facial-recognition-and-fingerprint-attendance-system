import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.touchableOpacity}>
        <View style={styles.textholder}>
          <Text style={styles.primaryText}>MTh 223</Text>
          <Text style={styles.subText}>Numerical analysis</Text>
        </View>

        <View style={styles.textholder}>
          <Text style={styles.primaryText}>Fingerprint</Text>
          <Text style={styles.subText}>
            Mark your attendance of the class {"\n"} using your fingerprint
            scanner
          </Text>
        </View>
      </View>

    <View style={styles.bottomel}>
    <Image source={require("../assets/Vector(3).png")} style={styles.image} />
    <Text style={styles.subText}>Place your hand on your finger sensor</Text>
    </View>
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
  bottomel:{
    justifyContent:'center',
    alignItems:'center'
  }
  ,touchableOpacity: {
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
