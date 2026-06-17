/*This is the page where you put in the
details for your account */

import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { registrationStyles } from "../styles/Registration";

const AccountDetails: React.FC = () => {
  const router = useRouter();

  const [image, setImage] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission required to access gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient
      colors={["#020024", "#090979", "#00D4FF"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          

          <Text style={styles.title}>Your Profile</Text>

          <Text style={styles.subtitle}>
            Add a few details so people can recognize you on Blogger.
          </Text>

          <TouchableOpacity style={styles.imageCard} onPress={pickImage}>
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../../assets/images/avatar.png")
              }
              style={styles.avatar}
            />

            <Text style={styles.imageText}>
              {image ? "Change Profile Picture" : "Choose Profile Picture"}
            </Text>
          </TouchableOpacity>

          <View style={styles.formCard}>
            <Text style={styles.label}>Display Name</Text>
            <TextInput
              style={registrationStyles.input}
              placeholder="Your display name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={displayName}
              onChangeText={setDisplayName}
            />

            <Text style={styles.label}>Username</Text>
            <TextInput
              style={registrationStyles.input}
              placeholder="Choose a username"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={registrationStyles.input}
              placeholder="Tell people about yourself"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={bio}
              onChangeText={setBio}
              multiline
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (!displayName || !username) {
                  alert("Please fill in required fields");
                  return;
                }
                router.push("/home");
              }}
            >
              <Text style={styles.buttonText}>Start Blogging</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.link}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 20,
    color: "#eaeaea",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 28,
    paddingHorizontal: 10,
  },

  imageCard: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
  },

  imageText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  formCard: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    marginBottom: 20,
  },

  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#1E1E2E",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },

  link: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    opacity: 0.85,
    marginTop: 10,
  },
});