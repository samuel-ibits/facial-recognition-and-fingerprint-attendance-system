import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

function CameraScreen({ HandleCameraState, next, matricNumber }) {
  const [imageUri, setImageUri] = useState(null);

  const HandleCamera = async () => {
    HandleCameraState("false");
  };
  const HandleCameraNext = async () => {
    next("true");
  };

  const takePicture = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3], // Adjust the aspect ratio as needed
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        cameraType: "front",
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        sendImageToServer(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error taking picture: ", error);
    }
  };

  const sendImageToServer = async (imageUri) => {
    const apiUrl = "https://eu.opencv.fr/search";

    try {
      const response = await axios.post(
        apiUrl,
        {
          collection_id: "79a2ed34-e020-4712-922a-0d61d85fb82f",
          images: [imageUri],
          max_results: 10,
          min_score: 0.6,
          search_mode: "ACCURATE",
        },
        {
          headers: {
            Accept: "application/json",
            "X-API-Key":
              "7BJHhweM2ZjMDk3N2YtODI0MC00NTRiLWI2NTQtZGYyNzQ0MWE0N2M5",
          },
          timeout: 90000,
        }
      );

      console.log("Server Response:", response);

      if (response) {
        Alert.alert("Face verified");
        HandleCameraNext();
      }
    } catch (error) {
      Alert.alert("Face not verified");
      console.error("Error sending image to server: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonG} onPress={HandleCamera}>
        <Text style={styles.buttonTextG}> {"< Back"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f44336",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonG: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonTextG: {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 225,
    resizeMode: "contain",
  },
});

export default CameraScreen;
