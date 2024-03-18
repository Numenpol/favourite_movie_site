import axios from "axios";
const POST_URL = import.meta.env.VITE_API_URL;

const rawToken = JSON.parse(sessionStorage.getItem("user"));
const { token } = rawToken || {};

export const postData = async (data)=>{
    let response = await axios.post(`${POST_URL}/movies`, data, {
        headers: {'Authorization': 'bearer ' + `${token}`}
    });
    return response.data;
}