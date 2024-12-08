import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { getArticles } from "../services/api.services"; // Asegúrate de crear esta función en tu archivo de servicios

const HomeScreen = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles(); // Función para obtener los datos de la API
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabecera */}
        <View style={styles.header}>
          <Image
            source={require("../assets/contie2024F1.png")}
            style={styles.headerImage}
          />
        </View>

        {/* Contenido */}
        <View style={styles.cardsContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#4A90E2" style={{ marginTop: 20 }} />
          ) : (
            articles.length > 0 ? (
              articles.map((article) => (
                <View key={article.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{article.title}</Text>
                  <Text style={styles.cardDate}>Fecha de Publicación: {new Date(article.publication_date).toLocaleDateString()}</Text>
                  <Text style={styles.cardContent}>{article.content}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noArticlesText}>No hay artículos disponibles.</Text>
            )
          )}
        </View>
      </ScrollView>

      {/* Footer */}
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
  noArticlesText: {
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
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerButton: {
    paddingVertical: 10,
  },
});

export default HomeScreen;
