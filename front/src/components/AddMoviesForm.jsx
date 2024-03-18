import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { postData } from "../services/post"
import "../styles/addmoviesform.css"

function AddMoviesForm({setUpdate}) {
    const [error, setError] = useState("");
    const [showPost, setShowPost] = useState(false);
    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    async function onSubmit(values) {
        try {
        await postData(values);
        setUpdate((update) => update + 1);
        reset();
        } catch (error) {
            if (error.message == "Request failed with status code 400") {
            setError("Enter valid information");
            } else if (error.message == "Request failed with status code 401") {
            setError("Login to add a movie") 
            }
            setError(error.message);
        setTimeout(() => {
            setError();
        }, 2500);
        };
    }

    const showMovieFormHandler = () => {
        setShowPost(value => !value);
    }

    return (
        <>   
        <button className='showMovieFormButton' onClick={()=>{showMovieFormHandler()}}>{showPost?"- Add a movie":"+ Add a Movie"}</button>
        <div className={showPost?"":"hidden"}>
            <form className="formAddMovies" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputBarTitleAddMovies">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="titleAddMovies" placeholder="Title"{...register("title", {
                        required: "A title is required",
                    })}
                    />
                    <div>{errors.title?.message}</div>
                </div>
                <div className="inputBarDirectorAddMovies">
                <label htmlFor="director">Director</label>
                <input type="text" id="directorAddMovies" placeholder="Director"{...register("director", {
                        required: "A director is required",
                    })}
                    />
                    <div>{errors.director?.message}</div>
                </div>
                <div className="inputBarDateAddMovies">
                    <label htmlFor="date" className='labelDateAddMovies'>Date</label>
                    <input type="date" id="dateAddMovies" {...register("date", {
                        required: "A date is required",
                    })}
                    /> 
                    <div>{errors.date?.message}</div>
                </div>
                <input type="submit" value="Add Movie" className="submitAddMovies"/>
            </form>         
            </div>
            {error && <p className='errorAddMovieForm'>{error}</p>}
        </>
    );
}

export default AddMoviesForm;