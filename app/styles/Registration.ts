import { StyleSheet } from "react-native";

export const  registrationStyles= StyleSheet.create({
text :{
  width: '100%',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize:19,
  color:'white'
  },
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
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'left',
    
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'left',
  },

  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    marginTop:10,
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

  textLabel: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#fff',
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
  },
  bio: {
    height:100,
    textAlignVertical: "top"
  }
});