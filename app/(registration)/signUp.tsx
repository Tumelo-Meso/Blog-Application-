import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const SignUp = () => {
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
          <Text style={styles.title}>Welcome to Blogger</Text>
          <Text style={styles.subtitle}>Create an account to get started</Text>
        </View>

        {/* Input fields */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.register}
        onPress={() => router.push("/login")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        {/* Bottom Text moved here, closer to button */}
        <TouchableOpacity style={styles.bottomTextContainer}
        onPress={() => router.push("/login")}
        >
          <Text style={styles.bottomText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // center content vertically
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
    marginBottom: 20,
    borderRadius: 12,
    fontSize: 16,
    color: '#000',
  },
  register: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10, // less space so text is close
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomTextContainer: {
    alignItems: 'center',
  },
  bottomText: {
    paddingTop: 50,
    color: '#fff',
    fontSize: 15,
  },
});

export default SignUp;