import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const data = [
  { id: 1, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 2, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 3, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 4, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 5, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 6, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 7, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 9, title: "MTH 223", subtitle: "Numerical Analysis" },
  { id: 10, title: "MTH 223", subtitle: "Numerical Analysis" },
];

const Item = ({ title, subtitle, navigation }) => (
  <View style={styles.item}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>

    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate("Attendacesigninfingerprint", {
          name: "Attendacesigninfingerprint",
        })
      }
    >
      <Text style={styles.buttonText}>View</Text>
    </TouchableOpacity>
  </View>
);

const App = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} subtitle={item.subtitle} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginVertical: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#999",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 15,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#4BB749",
  },
  buttonText: {
    color: "#4BB749",
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#999999",
  },
});

export default App;
