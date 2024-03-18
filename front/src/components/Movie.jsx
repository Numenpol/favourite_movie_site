import { useState } from "react";
import "../styles/movielistpage.css";
import { deleteData } from "../services/delete"
import EditMoviesForm from "./EditMoviesForm";

function Movie({ movie, setUpdate }) {
    const [edit, setEdit] = useState(false);

    const deleteHandler = async (_id) => {
        await deleteData(_id);
        setUpdate((update) => update + 1);
    }

    const { _id, title, director, date} = movie;
    return ( 
        <div key={_id} className="movielist">
            <button onClick={()=>setEdit((edit) => !edit)} className="movieEditButton">Edit</button>
            <button onClick={() => deleteHandler(_id)} className="movieDeleteButton">X</button>
            <h2 >{title}</h2> 
            <p >{date} {director}</p>
            {edit && <EditMoviesForm movie={movie} setEdit={setEdit} setUpdate={setUpdate}/>}
        </div>
     );
}

export default Movie;