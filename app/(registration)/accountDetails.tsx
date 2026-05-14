import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { registrationStyles } from "../styles/Registration";

const accountDetails = () => {

  // Navigation hook (used to move between screens)
  const router = useRouter();

  // Stores selected profile image URI (null = no image selected yet)
  const [image, setImage] = useState<string | null>(null);

  /**
   * Opens device image library and allows user to pick a profile picture
   */
  const pickImage = async () => {

    // Request permission to access media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    // If permission is denied, stop function
    if (!permissionResult.granted) {
      alert("Permission required to access gallery");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // only images allowed
      allowsEditing: true, // user can crop image
      aspect: [1, 1], // square crop (profile picture style)
      quality: 1, // highest quality
    });

    // If user did not cancel selection, save image URI
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient
      colors={['#020024', '#090979', '#00D4FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={registrationStyles.container}
    >

      {/* Prevents keyboard from overlapping inputs */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={registrationStyles.innerContainer}
      >

        {/* Screen title section */}
        <View style={registrationStyles.titleContainer}>
          <Text style={registrationStyles.title}>
            Let's get your account started
          </Text>
        </View>

        {/* Profile image picker section */}
        <TouchableOpacity
          style={registrationStyles.ImageSection}
          onPress={pickImage}
        >
          <Image
            source={
              image
                ? { uri: image } // user selected image
                : require('../../assets/images/avatar.png') // default avatar
            }
            style={registrationStyles.image}
          />

          {/* Dynamic button text depending on image state */}
          <Text style={{ fontSize: 18,color:"#ffffff", fontWeight: 'bold' }}>
            {image ? "Change Profile Picture" : "Choose Profile Picture"}
          </Text>
        </TouchableOpacity>

        {/* Display Name input */}
        <Text style={registrationStyles.text}>Display name</Text>
        <TextInput
          style={registrationStyles.input}
          placeholder="Enter the name that will be displayed"
          placeholderTextColor="#ffffff"
          multiline={true}
        />

        {/* Username input */}
        <Text style={registrationStyles.text}>Username</Text>
        <TextInput
          style={registrationStyles.input}
          placeholder="Enter your Username"
          placeholderTextColor="#fffcfc"
          multiline={true}
        />

        {/* Bio input */}
        <Text style={registrationStyles.text}>Bio</Text>
        <TextInput
          style={[registrationStyles.input, registrationStyles.bio]}
          placeholder="Enter your bio"
          placeholderTextColor="#ffffff"
          multiline={true}
        />

        {/* Submit / continue button */}
        <TouchableOpacity
          style={registrationStyles.register}
          onPress={() => router.push("/home")}
        >
          <Text style={registrationStyles.registerText}>
            Start Blogging
          </Text>
        </TouchableOpacity>

        {/* Login redirect link */}
        <TouchableOpacity
          style={registrationStyles.bottomTextContainer}
          onPress={() => router.push("/login")}
        >
          <Text style={registrationStyles.bottomText}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default accountDetails;