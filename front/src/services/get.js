import axios from "axios";
const GET_URL = import.meta.env.VITE_API_URL;

const rawToken = JSON.parse(sessionStorage.getItem("user"));
const { token } = rawToken || {};


export const getAllData = async ()=>{
    const response = await axios.get(`${GET_URL}/movies`, {
        headers: {'Authorization': 'bearer ' + `${token}`}
    });
    return response.data; 
};

export const getOne = async (_id)=>{
    const response = await axios.get(`${GET_URL}/movies/${_id}`, {
        headers: {'Authorization': 'bearer ' + `${token}`}
    });
    return response.data;
};