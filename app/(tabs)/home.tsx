// HOME SCREEN

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BlogPost from "../(features)/blogPost";

const Home = () => {
const categories =["All","Technology","Business","Lifestyle","Health & Fitness","Education","Entertainment","News"];

  return (
    <LinearGradient
      colors={['#020024', '#090979', '#00D4FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/AppIcon-1024.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>BlogApp</Text>
      </View>

      {/* CATEGORIES */}
      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((cat, index) => (
            <View key={index} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* BLOG POSTS */}
      <BlogPost />
      <BlogPost />
      
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 14,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  logo: {
    width: 34,
    height: 34,
    borderRadius: 8,
    marginRight: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  categoriesWrapper: {
    maxHeight: 40,
  },

  categoryScroll: {
    paddingBottom: 4,
  },

  categoryChip: {
    height: 34,
    minWidth: 65,
    paddingHorizontal: 14,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  categoryText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },
});