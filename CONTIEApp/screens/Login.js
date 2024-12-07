import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from "react-native";

const LoginScreen = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      {}
      <Image source={require("../assets/contie2024F1.png")} style={styles.logo} />

      {}
      <View style={styles.loginBox}>
        <Text style={styles.title}>Bienvenido de vuelta!</Text>
        <Text style={styles.subtitle}>Accede a tu panel de administrador.</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        {}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")} 
        >
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
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
  link: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  linkText: {
    color: "#00A4CCFF",
    fontSize: 12,
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
