import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function BlogPost() {
  return (
    <View style={styles.mainbox}>

      {/* LEFT: CONTENT (70%) */}
      <View style={styles.content}>
        <Text style={styles.title}>Blog Title</Text>
        <Text style={styles.subtitle}>
          This is a short preview of the blog content...
        </Text>
      </View>

      {/* RIGHT: REACTIONS (30%) */}
      <View style={styles.reactions}>
        <Text style={styles.icon}>👍 12</Text>
        <Text style={styles.icon}>👎 2</Text>
        <Text style={styles.icon}>💬 5</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainbox: {
  height: 200,
  marginHorizontal: 12,
  marginTop: 30,
  borderRadius: 12,
  flexDirection: 'row',
  overflow: 'hidden',
  backgroundColor: '#fff',

  borderWidth: 1,
  borderColor: '#E5E5E5',

  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },

  elevation: 2,
},

  content: {
    flex: 7,
    backgroundColor: '#F5F5F5',
    padding: 12,
    justifyContent: 'center',
  },

  reactions: {
    flex: 3,
    backgroundColor: '#EAEAEA',
    justifyContent: 'space-evenly', // evenly spaces icons
    alignItems: 'center',
  },

  icon: {
    fontSize: 14,
    fontWeight: '600',
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
});

export default BlogPost;