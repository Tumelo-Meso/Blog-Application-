import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

 export default ()=>{
    return (
        <Tabs 
        screenOptions={{
        tabBarActiveTintColor: "#ff1e1e",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: { backgroundColor: "#f2f2f2", height: 75 },
        tabBarLabelStyle: { fontSize: 13, fontWeight: "600" },
        
      }}
        >
            
            <Tabs.Screen name ="home"  options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
      <     Ionicons name="home-outline" size={size} color={color} />
                ),
                }}/>
            <Tabs.Screen name ="search"
            options={{
                title: "Search",
                tabBarIcon: ({color, size}) =>(
                    <Ionicons name="search-outline" size={size} color={color} />
                )
            }}
            
            />
            <Tabs.Screen name ="post"
            options={{
                title: "Post",
                tabBarIcon: ({color}) =>(
                    <Ionicons name="add-outline" size={30} color={color} />
                ),
                 
            }}
            
            />

            <Tabs.Screen name ="account"
            options={{
                title: "Account",
                tabBarIcon: ({color, size}) =>(
                    <Ionicons name="person-outline" size={size} color={color} />
                )
                
            }}
            
            
            />

            <Tabs.Screen name ="settings"
            options={{
                title: "Settings",
                tabBarIcon: ({color, size}) =>(
                    <Ionicons name="settings-outline" size={size} color={color} />
                )
            }}
            
            
            />

            
        </Tabs>
        
        
    )
 }