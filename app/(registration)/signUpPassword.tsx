/*This is the page for creating your passwowr
after the signUp page */
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

function signUpPassword() {
  const router = useRouter();

  const [cPassword, setCPassword] = useState("");
  const [password, setPassword] = useState("");

  const [isCPassword, setIsCPassword] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [same, setSame] = useState(false);
  
//Checks whether the password is correct or not
  const handleRegister = () => {
    const checkCPassword = cPassword.trim() === "";
    const checkPassword = password.trim() === "";

    setIsCPassword(checkCPassword);
    setIsPassword(checkPassword);

    if (checkCPassword || checkPassword) {
      setSame(false);
      return;
    }

    if (cPassword !== password) {
      setSame(true);
      return;
    }

    setSame(false);
    router.push("/accountDetails");
  };

  return (
    //Page color
    <LinearGradient
      colors={["#020024", "#090979", "#00D4FF"]}
      style={styles.container}
    >
        {/*Keyboard view*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Title */}
        <View style={styles.content}>
          <Text style={styles.title}>Create Your Password</Text>
        {/* subTitle */}
          <Text style={styles.subtitle}>
            Choose a secure password to protect your Blogger account.
          </Text>

          <View style={styles.formCard}>

            {/* Enter password input */}
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={[
                registrationStyles.input,
                isPassword && {
                  borderColor: "#8b0a0a",
                  borderWidth: 2,
                },
              ]}
              placeholder="Enter password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry={true}
            />
            {/* confirm password input */}
            <TextInput
              value={cPassword}
              onChangeText={setCPassword}
              style={[
                registrationStyles.input,
                isCPassword && {
                  borderColor: "#8b0a0a",
                  borderWidth: 2,
                },
              ]}
              placeholder="Confirm password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry={true}
            />

            {(isPassword || isCPassword) && (
              <Text style={styles.errorText}>
                Please fill in all fields
              </Text>
            )}

            {same && (
              <Text style={styles.errorText}>
                Passwords do not match
              </Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleRegister}
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

  errorText: {
    color: "#8b0a0a",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
    marginBottom: 10,
    textAlign: "center",
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

export default signUpPassword;