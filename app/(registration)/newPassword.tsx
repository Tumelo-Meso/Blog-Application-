import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { registrationStyles } from "../styles/Registration";

export default function NewPassword() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    Alert.alert("Success", "Password updated successfully");

    router.replace("/(registration)/loginPassword");
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
          
          <Text style={styles.title}>New Password</Text>

          <Text style={styles.subtitle}>
            Choose a strong password that you haven’t used before.
          </Text>

          <View style={styles.formCard}>
            <TextInput
              placeholder="New password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={registrationStyles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={registrationStyles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.link}>Back to login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

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
    marginBottom: 30,
    lineHeight: 28,
    paddingHorizontal: 12,
  },

  formCard: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#1E1E2E",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },

  link: {
    marginTop: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    opacity: 0.85,
  },
});