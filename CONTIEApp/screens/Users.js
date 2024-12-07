import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { getUsers } from "../services/api.services";

const UserScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <View style={styles.header}>
          <Image
            source={require("../assets/contie2024F1.png")}
            style={styles.headerImage}
          />
        </View>

        {}
        {loading ? (
          <ActivityIndicator size="large" color="#4A90E2" style={{ marginTop: 20 }} />
        ) : (
          <View style={styles.cardsContainer}>
            {}
            { users.length > 0 ? (
              users.map((user) => (
                <View key={user.id} style={styles.card}>
                  <View style={styles.avatarContainer}>
                    <Ionicons name="person-circle" size={50} color="#4A90E2" />
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={styles.cardName}>{user.name} {user.lastname}</Text>
                    <Text style={styles.cardEmail}>{user.email}</Text>
                    <Text style={styles.cardRole}>Rol: {user.role}</Text>
                  </View>
                </View>
              ))
            ) : (
              <Text style={styles.noUsersText}>No hay usuarios disponibles.</Text>
            )}
          </View>
        )}
      </ScrollView>

      {}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')}
        >r
          <Ionicons name="document-text" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Users')}
        >
          <Ionicons name="people" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Ionicons name="log-out" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2ebf3",
    justifyContent: "space-between",
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    width: "100%",
    height: 130,
    backgroundColor: "#ebeef3",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: 250,
    height: 50,
    resizeMode: "contain",
    marginTop: 50,
  },
  cardsContainer: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  avatarContainer: {
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardEmail: {
    fontSize: 14,
    color: "#555",
  },
  cardRole: {
    fontSize: 14,
    color: "#888",
  },
  noUsersText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ebeef3",
  },
  footerButton: {
    paddingVertical: 10,
  },
});

export default UserScreen;
