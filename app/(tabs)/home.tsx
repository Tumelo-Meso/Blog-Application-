import React from "react";
import { ScrollView, Text, View } from 'react-native';
const Home = () => {
let categories =["All","Technology","Business","Lifestyle","Health & Fitness","Education","Entertainment","News"];
  return (
    <View style={{
      marginTop:70,
      marginLeft:3,
      marginRight:3,
    
    }}>
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
      
    </View>
  )
}

export default Home