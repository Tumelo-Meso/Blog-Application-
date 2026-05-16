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

export default function Login() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [isemail,isSetEmail] = useState(false);

  const handleRegister = () =>{
    let checkEmail= false;

    if(email.trim()==='' || !email.includes('@')){
      checkEmail= true;
    }

    isSetEmail(checkEmail);

    if(checkEmail) return;

     router.push("/(registration)/loginPassword");
  }
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
          
          

          <Text style={styles.title}>Welcome to Blogger</Text>

          <Text style={styles.subtitle}>
            Share your ideas, connect with others, and start your journey with us.
          </Text>

          <View style={styles.formCard}>
            <TextInput
            value={email}
            onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={[registrationStyles.input, isemail && { borderColor: "#8b0a0a", borderWidth: 2 }]}
            />
            

            {isemail && (
              <Text style ={{color:"#8b0a0a", fontWeight:"bold", fontSize:19,marginTop:2, marginBottom:10}}>
                Please enter a correct email address
              </Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() =>handleRegister()}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.link}>
              Already part of Blogger? Log in
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
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },

  subtitle: {
    fontSize: 15,
    color: "#eaeaea",
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 22,
    paddingHorizontal: 12,
  },

  formCard: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#1E1E2E",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  link: {
    marginTop: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
});