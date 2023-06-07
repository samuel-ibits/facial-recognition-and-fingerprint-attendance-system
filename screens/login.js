import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
// Rest of the import statements
import { useFonts } from 'expo-font';

const LoginPage = () => {
  const [fontsLoaded] = useFonts({
    poppins1: require('../assets/fonts/Poppins/Poppins-Black.ttf'),
    poppins2: require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
  });

  return (
    <View style={styles.container}>
 

    <ScrollView>
    <View style={styles.imageContainer}>
    <Image
      source={require("../assets/Vector(1).png")}
      style={styles.vector1}
    />
    <Image
      source={require("../assets/StudentAttendance.png")}
      style={styles.image}
    />
  </View>
  <View style={styles.contentContainer}>
   <View style={styles.marginVert}>
   <Text style={styles.welcomeText}>Hi, Welcome {'\n'} back!</Text>
   </View>
    <TextInput
      style={styles.input}
      placeholder="Username"
      // Additional props for the username input
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      // Additional props for the password input
    />
<View style={styles.centerview}>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.signupTextholder}>
 <Text style={styles.signupText}>Don’t have an account ? Signup below</Text>
</TouchableOpacity>
</View>
  </View></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4BB749",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 306,
    // Additional styles for the image container
  },
  image: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
  vector1: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 110,
    top: 120,
  },
  contentContainer: {
    flex: 2,
    paddingHorizontal: 16,
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    width:'100%'
    // Additional styles for the content container
  },
  welcomeText: {
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: "left",
    color: "#101010",
    fontWeight:400,
  
  },
  marginVert:{
    marginTop:30,
    marginVertical:10
  },
  centerview:{
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
  }
  ,
  input: {
    paddingVertical: 21,
    paddingHorizontal: 21,
    backgroundColor: "#E4E4E4",
    marginBottom: 16,
    borderRadius:10
    // Additional styles for the input
  },
  button: {
    backgroundColor: "#4BB749",
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
    width:265,
    borderRadius:10
    // Additional styles for the button
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color:'#fff'
    // Additional styles for the button text
  },
  signupText: {
    fontSize: 14,
    color: "#111",
    textAlign: "center",
    // Additional styles for the signup text
  },
  signupTextholder:{
    marginBottom:40,
    marginTop:20
  }
});

export default LoginPage;
