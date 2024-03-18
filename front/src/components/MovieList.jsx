import Movie from "./Movie";
import { useState, useEffect } from "react";

function MovieList({ filteredItems, searchQuery, movies, error, setUpdate }) {

    const [data, setData] = useState([]);

    const dataHandler = () =>{
    if (searchQuery=="") {
    setData(movies);
    } else{
    setData(filteredItems);
    }
    }

    useEffect(() => {
        dataHandler();
    })

    return (
        <>
        {data.map((movie) => {
        return <Movie movie={movie} key={movie._id} setUpdate={setUpdate}/> 
        })}            
        {error && <p className="errorMovieList">{error}</p>}
        </>
     );
}

export default MovieList;