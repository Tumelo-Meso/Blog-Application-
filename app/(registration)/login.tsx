import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const login = () => {
  const router = useRouter();
  return (
    <LinearGradient
          colors={['#29D6BE', '#9B6FDD', '#193048']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.innerContainer}
      >
        {/* Title and subtitle */}
        <View style={styles.titleContainer}>
          
          <Text style={styles.title}>Log in to your account</Text>
        </View>

        {/* Input fields */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        

        

        {/* Login Button */}
        <TouchableOpacity style={styles.login}
        onPress={() => router.push("/(registration)/loginPassword")}
        >
          <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity>

        

        {/* Bottom Text */}
        <TouchableOpacity style={styles.bottomTextContainer}
        onPress={() => router.push("/signUp")}
        >
          <Text style={styles.bottomText}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    fontSize: 16,
    color: '#000',
  },
  
  
  login: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomTextContainer: {
    alignItems: 'center',
  },
  bottomText: {
    paddingTop: 20,
    color: '#fff',
    fontSize: 15,
  },
});

export default login;