import axios from "axios";
import { getOne } from "./get";

const DELETE_URL = import.meta.env.VITE_API_URL;

const rawToken = JSON.parse(sessionStorage.getItem("user"));
const { token } = rawToken || {};

export const deleteData = async (_id) => {
    const { title } = await getOne(_id);

    const confirmed = window.confirm(`Are you sure you want to delete the movie - ${title} from the list?`);

    if (!confirmed) return;

    const response = await axios.delete(`${DELETE_URL}/movies/${_id}`, {
        headers: {'Authorization': 'bearer ' + `${token}`}
    });
    
    return response.data;
};