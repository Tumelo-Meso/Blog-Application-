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

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isemail, isSetEmail] = useState(false);
  const [ispassword, isSetPassword] = useState(false);

  const handleRegister = () => {
    let checkEmail = email.trim() === "";
    let checkPassword = password.trim() === "";

    isSetEmail(checkEmail);
    isSetPassword(checkPassword);

    if (checkEmail || checkPassword) return;

    router.push("/home");
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
          

          <Text style={styles.title}>Sign In</Text>

          <Text style={styles.subtitle}>
            Enter your email and password to continue your journey.
          </Text>

          <View style={styles.formCard}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={[
                registrationStyles.input,
                isemail && { borderColor: "red", borderWidth: 2 },
              ]}
              placeholder="Email address"
              placeholderTextColor="rgba(255,255,255,0.7)"
              keyboardType="email-address"
            />

            <TextInput
              value={password}
              onChangeText={setPassword}
              style={[
                registrationStyles.input,
                ispassword && { borderColor: "red", borderWidth: 2 },
              ]}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push("/signUp")}>
            <Text style={styles.link}>
              Don’t have an account yet? Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/verificationEmail")}>
            <Text style={styles.linkSmall}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  greeting: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    opacity: 0.95,
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
    paddingHorizontal: 10,
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
    marginTop: 12,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    opacity: 0.9,
  },

  linkSmall: {
    marginTop: 8,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    opacity: 0.8,
  },
});