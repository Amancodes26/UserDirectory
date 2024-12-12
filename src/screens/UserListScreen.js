import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('API Response:', response.data);
      setUsers(response.data);
      setFilteredUsers(response.data); // Initialize filteredUsers
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredUsers(users); // Reset filteredUsers when search query is empty
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, users]);

  // Sort users based on the selected criterion
  const sortUsers = (key) => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setFilteredUsers(sortedUsers);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userCard}
      onPress={() => navigation.navigate('UserDetails', { user: item })}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
      <Text style={styles.userPhone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        placeholder="Search users by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />

      {/* Sort Buttons */}
      <View style={styles.sortButtonsContainer}>
        <Button title="Sort by Name" onPress={() => sortUsers('name')} />
        <Button title="Sort by Email" onPress={() => sortUsers('email')} />
      </View>

      {/* FlatList for User Cards */}
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id ? `${item.id}` : `${index}`}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>No users found.</Text>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  sortButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
  },
  userPhone: {
    fontSize: 12,
    color: '#777',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default UserListScreen;
