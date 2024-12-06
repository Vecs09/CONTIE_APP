import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Usando iconos de Ionicons para el avatar
import { useNavigation } from "@react-navigation/native"; // Importamos el hook de navegación

const UserScreen = () => {
  const navigation = useNavigation(); // Usamos el hook para obtener la función de navegación

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabecera con color y sombra */}
        <View style={styles.header}>
          <Image
            source={require("../assets/contie2024F1.png")}
            style={styles.headerImage}
          />
        </View>

        {/* Contenido con tarjetas de usuarios */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={50} color="#4A90E2" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardName}>Juan Pérez</Text>
              <Text style={styles.cardEmail}>juan.perez@example.com</Text>
              <Text style={styles.cardRole}>Rol: Administrador</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={50} color="#4A90E2" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardName}>María López</Text>
              <Text style={styles.cardEmail}>maria.lopez@example.com</Text>
              <Text style={styles.cardRole}>Rol: Usuario</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={50} color="#4A90E2" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardName}>Carlos Martínez</Text>
              <Text style={styles.cardEmail}>carlos.martinez@example.com</Text>
              <Text style={styles.cardRole}>Rol: Moderador</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer con botones */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')}
        >
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
    justifyContent: "space-between", // Esto empuja el footer al fondo
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    width: "100%",
    height: 130,
    backgroundColor: "#ebeef3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
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
    flexDirection: "row", // Para poner el avatar y el contenido en fila
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    marginBottom: 4,
  },
  cardEmail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  cardRole: {
    fontSize: 14,
    color: "#888",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ebeef3",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerButton: {
    paddingVertical: 10,
  },
  footerButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default UserScreen;
