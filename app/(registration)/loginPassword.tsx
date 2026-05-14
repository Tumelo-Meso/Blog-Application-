import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { registrationStyles } from "../styles/Registration";
function loginPassword() {
    const router = useRouter();
  return (
    <LinearGradient
              colors={['#29D6BE', '#9B6FDD', '#193048']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.container}
            >
                
                        {/* Title and subtitle */}
                        <View style={styles.titleContainer}>
                          
                          <Text style={styles.title}>Enter password </Text>
                        </View>
        <TextInput
                  style={registrationStyles.input}
                  placeholder="Password"
                  placeholderTextColor="#666"
                  secureTextEntry={true}
                />

                <TouchableOpacity style={styles.login}
                        onPress={() => router.push("/home")}
                        >
                          <Text style={styles.loginText}>Next</Text>
                        </TouchableOpacity>


        {/* Forgot Password link */}
                <TouchableOpacity 
                onPress={() => router.push("/forgotPassword")}
                style={styles.forgotPasswordContainer}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

    </LinearGradient>
  )
}

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
input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    fontSize: 16,
    color: '#000',
  },

  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 3,
  },

  forgotPasswordText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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


});

export default loginPassword