import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { registrationStyles } from "../styles/Registration";
const SignUp = () => {
   const router = useRouter();
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

   const [isemail,isSetEmail] = useState(false);
   const [ispassword,isSetPassword] = useState(false);
   
   const handleRegister = () => {
    
    let checkEmail = email.trim() ==='';
    let checkPassword =password.trim() ==='';

    isSetEmail(checkEmail);
    isSetPassword(checkPassword);

    if(checkEmail || checkPassword)return;

    router.push("/accountDetails");
   }

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
          <Text style={registrationStyles.title}>Welcome to Blogger</Text>
          <Text style={registrationStyles.subtitle}>Create an account to get started</Text>
        </View>

        {/* Input field for EMAIL */}
        <Text style = {[registrationStyles.text,isemail&&{color: 'red'}]}>Enter email address</Text>
        <TextInput
        value = {email}
        onChangeText={setEmail}
          style={[registrationStyles.input, isemail&&{borderColor:'red', borderWidth: 4}]}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />

        {/* Input field for passwword */}
        <Text style = {[registrationStyles.text, ispassword&&{color: 'red'}]}>Enter password</Text>
        <TextInput
        value ={password}
        onChangeText={setPassword}
          style={[registrationStyles.input, , ispassword&&{borderColor:'red', borderWidth: 4}]}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />

        {/* Register Button */}
        <TouchableOpacity style={registrationStyles.register}
        onPress={handleRegister}
        
        >
          <Text style={registrationStyles.registerText}>Register</Text>
        </TouchableOpacity>

        {/* Bottom Text moved here, closer to button */}
        <TouchableOpacity style={registrationStyles.bottomTextContainer}
        onPress={() => router.push("/login")}
        >
          <Text style={registrationStyles.bottomText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};


export default SignUp;