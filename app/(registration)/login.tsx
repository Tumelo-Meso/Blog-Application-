import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { registrationStyles } from "../styles/Registration";
const login = () => {
  const router = useRouter();
  return (
    <LinearGradient
          colors={['#29D6BE', '#9B6FDD', '#193048']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={registrationStyles.container}
        >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={registrationStyles.innerContainer}
      >
        {/* Title and subtitle */}
        <View style={registrationStyles.titleContainer}>
          
          <Text style={registrationStyles.title}>Log in to your account</Text>
        </View>

        {/* Input fields */}
        <TextInput
          style={registrationStyles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        
        {/* Login Button */}
        <TouchableOpacity style={registrationStyles.register}
        onPress={() => router.push("/(registration)/loginPassword")}
        >
          <Text style={registrationStyles.registerText}>Next</Text>
        </TouchableOpacity>

        {/* Bottom Text */}
        <TouchableOpacity style={registrationStyles.bottomTextContainer}
        /*This is what links you to the next page*/
        onPress={() => router.push("/signUp")}
        >
        <Text style={registrationStyles.bottomText}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>

        </LinearGradient>
  );
};
export default login;