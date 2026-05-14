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
      colors={["#29D6BE", "#9B6FDD", "#193048"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Reset Password</Text>

          <Text style={styles.subtitle}>
            Enter the verification code sent to your email
          </Text>

          <TextInput
            placeholder="Enter verification code"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={registrationStyles.input}
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
          />

          <TouchableOpacity
            style={registrationStyles.register}
            onPress={() => router.push("/newPassword")}
          >
            <Text style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>

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
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#eaeaea",
    textAlign: "center",
    marginBottom: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#fff",
  },
});