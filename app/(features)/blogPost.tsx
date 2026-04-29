import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function BlogPost() {
  return (
    <View style={styles.mainbox}>

      {/* LEFT SIDE - CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>Blog Title</Text>
        <Text style={styles.subtitle}>
          This is a short preview of the blog post content...
        </Text>
      </View>

      {/* RIGHT SIDE - ICONS ONLY */}
      <View style={styles.reactions}>

        {/* LIKE */}
        <TouchableOpacity style={styles.iconBox}>
          <MaterialCommunityIcons
            name="thumb-up-outline"
            size={22}
            color="#555"
          />
          <Text style={styles.count}>12</Text>
        </TouchableOpacity>

        {/* DISLIKE */}
        <TouchableOpacity style={styles.iconBox}>
          <MaterialCommunityIcons
            name="thumb-down-outline"
            size={22}
            color="#555"
          />
          <Text style={styles.count}>2</Text>
        </TouchableOpacity>

        {/* COMMENTS */}
        <TouchableOpacity style={styles.iconBox}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={22}
            color="#555"
          />
          <Text style={styles.count}>5</Text>
        </TouchableOpacity>

        {/* SHARE */}
        <TouchableOpacity style={styles.iconBox}>
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={22}
            color="#555"
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // MAIN CARD
  mainbox: {
    height: 200,
    marginHorizontal: 12,
    marginTop: 20,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#fff',

    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  // LEFT SIDE CONTENT
  content: {
    flex: 7,
    backgroundColor: '#F5F5F5',
    padding: 15,
    
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 12,
    color: '#555',
  },

  // RIGHT SIDE ICON PANEL
  reactions: {
    flex: 3,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  iconBox: {
    alignItems: 'center',
  },

  count: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
  },

});

export default BlogPost;