import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { default as React, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { registrationStyles } from "../styles/Registration";
const accountDetails = () => {
   const router = useRouter();
   const [image,setImage] = useState<string| null>(null);
   const pickImage = async () => {
    // Ask permission
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission required to access gallery");
      return;
    }

    // Open image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
          <Text style={registrationStyles.title}>Let's get your account started</Text>
          
        </View>
        

      {/* Button to pick image */}
      <TouchableOpacity style={registrationStyles.ImageSection} onPress={pickImage}>
      <Image
        source={
          image
            ? { uri: image }
          : require('../../assets/images/avatar.png')
        }
        style={registrationStyles.image}
      />
        <Text style ={{fontSize:18, fontWeight:'bold'}}>
           {image ? "Change Profile Picture" : "Choose Profile Picture"}
        </Text>
      </TouchableOpacity>

        
        {/* Input field Display Name */}
        <Text style = {registrationStyles.text}>Display name </Text>
        <TextInput
          style={registrationStyles.input}
          placeholder="Enter the name that wil be displayed"
          placeholderTextColor="#666"
          keyboardType="email-address"
          multiline={true}
        />

        {/* Input field Username */}
        <Text style = {registrationStyles.text}>Username</Text>
        <TextInput
          style={registrationStyles.input}
          placeholder="Enter your Username"
          placeholderTextColor="#666"
          multiline={true}
        />
        <Text style = {registrationStyles.text}>Bio</Text>
        <TextInput
          style={[registrationStyles.input,registrationStyles.bio]}
          placeholder="Enter your bio"
          placeholderTextColor="#666"
          multiline = {true}
        />

        {/* Register Button */}
        <TouchableOpacity style={registrationStyles.register}
        onPress={() => router.push("/home")}
        >
          <Text style={registrationStyles.registerText}>Start Blogging</Text>
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



export default accountDetails;