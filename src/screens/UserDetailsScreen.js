import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Name:</Text>
        <Text style={styles.text}>{user.name}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Email:</Text>
        <Text style={styles.text}>{user.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Address:</Text>
        <Text style={styles.text}>{user.address.street}</Text>
        <Text style={styles.text}>{user.address.city}</Text>
        <Text style={styles.text}>{user.address.zipcode}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Company:</Text>
        <Text style={styles.text}>{user.company.name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

export default UserDetailsScreen;
