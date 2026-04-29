import React from "react";
import { Image, ScrollView, Text, View } from 'react-native';
import BlogPost from "../(features)/blogPost";
const Home = () => {
let categories =["All","Technology","Business","Lifestyle","Health & Fitness","Education","Entertainment","News"];
  return (
    <View style={{
      marginTop:70,
      marginLeft:3,
      marginRight:3,
    
    }}>
      <View
      style ={{
        marginBottom:20,
        flexDirection: "row"
      }}
      >
        <Image
      source={require("../../assets/images/AppIcon-1024.png")}
      style={{
      width: 24,
      height: 24,
      marginRight: 2,
    }}
      />
        <Text
      style = {{

        fontSize:20,
        fontWeight: "bold",
        
      }}
      
      >BlogApp</Text>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {

          categories.map((cat, index) => {
      return (
          <View
              key={index}
               style={{
              backgroundColor: "#ddd",
              padding: 10,
              borderRadius: 20,
              marginRight: 10,
                }}
            >
          <Text>{cat}</Text>
          </View>
            );
          })

        }
     </ScrollView>

     <View>
      <BlogPost />
      
    </View>
      
    </View>
  )
}

export default Home