import axios from "axios";
const UPDATE_URL = import.meta.env.VITE_API_URL;

const rawToken = JSON.parse(sessionStorage.getItem("user"));
const { token } = rawToken || {};

export const updateData = async (_id, data) => {
    const response = await axios.patch(`${UPDATE_URL}/movies/${_id}`, data, {
        headers: {'Authorization': 'bearer ' + `${token}`}
    });
    return response.data;
};
