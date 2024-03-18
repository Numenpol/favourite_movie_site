import axios from 'axios';
const AUTH_URL = import.meta.env.VITE_API_URL;

export const login = async (formData) => {
    const response = await axios.post(`${AUTH_URL}/auth/login`, formData);
    sessionStorage.setItem("user", JSON.stringify(response.data));
};
    
export const signup = async (formData) => {
    const response = await axios.post(`${AUTH_URL}/auth/signup`, formData);
}


