import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
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

function LoginPassword() {
  const router = useRouter();

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
          

          <Text style={styles.title}>Create Your Password</Text>

          <Text style={styles.subtitle}>
            Choose a secure password to protect your Blogger account.
          </Text>

          <View style={styles.formCard}>
            <TextInput
              style={registrationStyles.input}
              placeholder="Enter password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry={true}
            />

            <TextInput
              style={registrationStyles.input}
              placeholder="Confirm password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/accountDetails")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    color: "#eaeaea",
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 28,
    paddingHorizontal: 12,
  },

  formCard: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  button: {
    backgroundColor: "#1E1E2E",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default LoginPassword;