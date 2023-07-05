import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

const data = [
  { id: 1, name: "John Doe", matricNumber: "SCI18CSC223" },
  { id: 2, name: "Jane Smith", matricNumber: "SCI18CSC224" },
  { id: 3, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 4, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 5, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 6, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 7, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 8, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 9, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 10, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 11, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 12, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
  { id: 13, name: "Alice Johnson", matricNumber: "SCI18CSC225" },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.matricNumber}>{item.matricNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.touchableOpacity}>
        <Text style={styles.textLeft}>Total number of students</Text>
        <Text style={styles.textRight}>180</Text>
      </View>

      <View style={styles.touchableOpacity2}>
        <Text style={styles.textLeft2}>Total number of students</Text>
        <Text style={styles.textRight2}>150</Text>
      </View>

      <View style={styles.listholder}>
        <View style={styles.header}>
          <Text style={styles.headerText2}>Name</Text>
          <Text style={styles.headerText}>Matric Number</Text>
        </View>

        <View style={styles.separator} />

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginVertical: 30,
  },
  listholder: {
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    marginVertical: 20,
    padding: 20,
    flex: 1,
  },
  touchableOpacity: {
    height: 56.223777770996094,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#767676",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 16,
    flexDirection: "row",
  },
  touchableOpacity2: {
    height: 56.223777770996094,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4BB749",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 16,
    flexDirection: "row",
  },
  textLeft: {
    fontSize: 16,
    marginRight: 8,
  },
  textRight: {
    fontSize: 24,
  },
  textLeft2: {
    fontSize: 16,
    marginRight: 8,
    color: "#4BB749",
  },
  textRight2: {
    fontSize: 24,
    color: "#4BB749",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    width: "50%",
    textAlign: "center",
    color: "#767676",
  },
  headerText2: {
    fontSize: 18,
    fontWeight: "bold",
    width: "50%",
    textAlign: "left",
    color: "#767676",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    width: "50%",
    color: "#767676",
  },
  matricNumber: {
    fontSize: 16,
    width: "50%",
    textAlign: "center",
    color: "#767676",
  },
});

export default App;
