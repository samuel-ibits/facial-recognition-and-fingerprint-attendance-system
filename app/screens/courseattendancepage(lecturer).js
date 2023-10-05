import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [course, setCourse] = useState(""); // State to store the course data
  const [studentData, setStudentData] = useState([]); // State to store student data

  useEffect(() => {
    // Fetch the course data from AsyncStorage
    AsyncStorage.getItem("SA@event")
      .then((courseData) => {
        if (courseData) {
          setCourse(courseData);
          // Fetch the corresponding student data based on the course
          return AsyncStorage.getItem(`SA@course@${courseData}`);
        }
      })
      .then((studentData) => {
        if (studentData) {
          // Parse the student data as JSON
          const parsedStudentData = JSON.parse(studentData);
          console.log(studentData);
          setStudentData(parsedStudentData);
        }
      })
      .catch((error) => {
        console.error("Error loading data: ", error);
      });
  }, []); // The empty dependency array ensures this effect runs once

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.matricNumber}>{item.matricNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listholder}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{course}</Text>
          <Text style={styles.headerText}>{"6th October, 2023."}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Matric Number</Text>
        </View>

        <View style={styles.separator} />
        <View style={styles.listItem}>
          <Text style={styles.matricNumber}>{studentData.matricNumber}</Text>
          <Text style={styles.matricNumber}>{studentData.time}</Text>
        </View>
        <FlatList
          data={studentData} // Use the parsed student data here
          renderItem={renderItem}
          keyExtractor={(studentData) => studentData.id.toString()}
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
  matricNumber: {
    fontSize: 16,
    width: "50%",
    textAlign: "center",
    color: "#767676",
  },
});

export default App;
