import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importamos el hook de navegación
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
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

        {/* Contenido con tarjetas */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nombre del Artículo</Text>
            <Text style={styles.cardDate}>Fecha de Publicación: 05/12/2024</Text>
            <Text style={styles.cardContent}>
              Este es el contenido del artículo. Aquí puedes colocar más detalles.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Otro Artículo</Text>
            <Text style={styles.cardDate}>Fecha de Publicación: 04/12/2024</Text>
            <Text style={styles.cardContent}>
              Este es otro artículo con su contenido respectivo.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer con botones */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')} // Redirige a la pantalla de Artículos
        >
          <Ionicons name="document-text" size={30} color={"#000"}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Users')} // Redirige a la pantalla de Usuarios
        >
          <Ionicons name="people" size={30} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Login')} // Redirige a la pantalla de Login
        >
          <Ionicons name="log-out" size={30} color={"#000"} />
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
    flexGrow: 1, // Permite que el ScrollView ocupe el espacio disponible
  },
  header: {
    width: "100%",
    height: 130,
    backgroundColor: "#ebeef3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
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
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: "#333",
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

export default HomeScreen;
