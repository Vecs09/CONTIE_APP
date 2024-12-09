import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";  
import { login } from "../services/api.services";

const LoginScreen = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await login(email, password);

      if (response.code === 0) {
        console.log("Respuesta del servidor:", response);
        Alert.alert("Éxito", "Inicio de sesión exitoso.");
        navigation.navigate("Home"); 
      } else {
        Alert.alert("Error", response.message || "Error desconocido.");
      }
    } catch (error) {
      console.error("Error en el login:", error.response?.data || error.message);
      Alert.alert("Error", error.response?.data?.message || "Error en las credenciales.");
    } finally {
      setLoading(false); 
    }
};


  return (
    <View style={styles.container}>
      <Image source={require("../assets/contie2024F1.png")} style={styles.logo} />

      <View style={styles.loginBox}>
        <Text style={styles.title}>Bienvenido de vuelta!</Text>
        <Text style={styles.subtitle}>Accede a tu panel de administrador.</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {loading ? (
          <ActivityIndicator size="large" color="#00A4CCFF" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2ebf3",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  loginBox: {
    backgroundColor: "#fff",
    width: "85%",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#00A4CCFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
