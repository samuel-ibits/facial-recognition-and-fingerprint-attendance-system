import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/great.png")} // Replace with the actual image source
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Great Atabo</Text>
        <Text style={styles.subText}>Computer Science</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>SCI18CSC223</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
    
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>200L</Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  image: {
    width: "90%",
    height: "30%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: "#888",
  },
  infoContainer: {
    width: "90%",
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'center',
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 18,
    color:'#767474'
  },
});

export default App;
