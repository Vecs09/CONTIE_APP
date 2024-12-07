import axios from "axios";
export const apiServices = axios.create({
    baseURL: "http://192.168.1.74/api/",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
})

export const getUsers = async () => {
    const response = await apiServices.get("users");
    return response.data;
}
