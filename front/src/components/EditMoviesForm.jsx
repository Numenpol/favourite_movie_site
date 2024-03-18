import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../styles/editmoviesform.css"
import { updateData } from '../services/update';

function EditMoviesForm({setUpdate, setEdit, movie}) {
    const [error, setError] = useState("");
    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    async function onSubmit(values) {
        try {
            if (values.title=="") {
                values.title=movie.title;
            };
            if (values.director=="") {
                values.director=movie.director;
            };
            if (values.date=="") {
                values.date=movie.date;
            };
        await updateData(movie._id, values);
        setUpdate((update) => update + 1);
        setEdit(false);
        reset();
        } catch (error) {
            if (error.message == "Request failed with status code 400") {
            setError("Enter valid information");
            } else if (error.message == "Request failed with status code 401") {
            setError("Login to edit a movie") 
            }
            setError(error.message);
        setTimeout(() => {
            setError();
        }, 2500);
        };
    }

    return (
        <>   
            <form className="formEditMovies" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputBarTitleEditMovies">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="titleEditMovies" placeholder="Title"{...register("title")}/>
                    <div>{errors.title?.message}</div>
                </div>
                <div className="inputBarDirectorEditMovies">
                <label htmlFor="director">Director</label>
                <input type="text" id="directorEditMovies" placeholder="Director"{...register("director")}/>
                    <div>{errors.director?.message}</div>
                </div>
                <div className="inputBarDateEditMovies">
                    <label htmlFor="date" className='labelDateEditMovies'>Date</label>
                    <input type="date" id="dateEditMovies" {...register("date")}/> 
                    <div>{errors.date?.message}</div>
                </div>
                <input type="submit" value="Edit Movie" className="submitEditMovies"/>
            </form>         
            {error && <p className='errorEditMovieForm'>{error}</p>}
        </>
    );
}

export default EditMoviesForm;