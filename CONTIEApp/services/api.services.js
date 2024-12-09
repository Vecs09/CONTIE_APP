import axios from "axios";
export const apiServices = axios.create({
    baseURL: "http://192.168.1.74/api/",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
})

export const getUsers = async () => {
    const response = await apiServices.get("users");
    return response.data;
}

export const getArticles = async () => {
    const response = await apiServices.get("articles");
    return response.data;
}

export const login = async (email, password) => {
    try {
      const response = await apiServices.post("users/login", {
        email: email,
        password: password,
      });
  
      console.log("Datos enviados:", { email, password });
      console.log("Respuesta del servidor:", response.data);
  
      if (response.data.code === 0) {
        return response.data; // Devuelve solo los datos si la respuesta es exitosa
      }
  
      // Si no es un código de éxito, lanza un error
      throw new Error(response.data.message || "Error desconocido");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      throw error; // Lanza el error para que sea capturado por el try-catch en el frontend
    }
  };
  



