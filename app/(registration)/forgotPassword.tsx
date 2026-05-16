import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { registrationStyles } from "../styles/Registration";

export default function ForgotPassword() {
  const router = useRouter();
  const [code, setCode] = useState("");

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
          

          <Text style={styles.title}>Reset Password</Text>

          <Text style={styles.subtitle}>
            Enter the verification code sent to your email to continue.
          </Text>

          <View style={styles.formCard}>
            <TextInput
              placeholder="Enter verification code"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={registrationStyles.input}
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/newPassword")}
            >
              <Text style={styles.buttonText}>Verify Code</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push("/forgotPassword")}>
            <Text style={styles.link}>
              Didn’t receive a code? Try again
            </Text>
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