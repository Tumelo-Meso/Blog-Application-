import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { default as React, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
      style={styles.container}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.innerContainer}
      >

        
        
        {/* Title and subtitle */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's get your account started</Text>
          
        </View>
        

      {/* Button to pick image */}
      <TouchableOpacity style={styles.ImageSection} onPress={pickImage}>
      <Image
        source={
          image
            ? { uri: image }
          : require('../../assets/images/avatar.png')
        }
        style={styles.image}
      />
        <Text style ={{fontSize:18, fontWeight:'bold'}}>
           {image ? "Change Profile Picture" : "Choose Profile Picture"}
        </Text>
      </TouchableOpacity>

        
        {/* Input field Display Name */}
        <Text style = {styles.text}>Display name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the name that wil be displayed"
          placeholderTextColor="#666"
          keyboardType="email-address"
          multiline={true}
        />

        {/* Input field Username */}
        <Text style = {styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Username"
          placeholderTextColor="#666"
          multiline={true}
        />
        <Text style = {styles.text}>Bio</Text>
        <TextInput
          style={[styles.input,styles.bio]}
          placeholder="Enter your bio"
          placeholderTextColor="#666"
          multiline = {true}
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.register}
        onPress={() => router.push("/home")}
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
  text :{

  width: '100%',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize:17
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // center content vertically
  },
  bio: {
  
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    
    marginBottom: 20,
    borderRadius: 12,
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    height:100,
    textAlignVertical: "top"
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
    marginTop: 10
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
   image: {
    width: 170,
    height: 170,
    borderRadius: 91,
    marginBottom: 10,
  },

  ImageSection: {
  alignItems: 'center',
  marginVertical: 20,
  padding: 20,
  width:'100%',
  borderRadius: 20,
  backgroundColor: 'rgba(255,255,255,0.1)',
  }
});

export default accountDetails;