import "../styles/movielistpage.css";

function SearchFilter({movies, setFilteredItems, setSearchQuery, filterType, setFilterType}) {

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (filterType=="title") {
        const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
        );
        return setFilteredItems(filtered);            
        } else if (filterType=="date") {
            const filtered = movies.filter((movie) =>
            movie.date.toLowerCase().includes(query.toLowerCase())
            );
            return setFilteredItems(filtered);        
        } else if (filterType=="director") {
            const filtered = movies.filter((movie) =>
            movie.director.toLowerCase().includes(query.toLowerCase())
            );
            return setFilteredItems(filtered);     
        }
    }

    const handleFilterChange = (event) =>{
            setFilterType(event.target.value);
    }

    return (
        <>
        <div className="searchAndSelectFilter">
            <input type="text" className="movieListTextFilter" onChange={handleInputChange}/>
            <select id="sortMovieList" className="movieListSelectFilter" onChange={handleFilterChange}>
                <option value="title">Title</option>
                <option value="date">Date</option>
                <option value="director">Director</option>
            </select>
        </div>
        </>
    );
}

export default SearchFilter;