import MovieList from "../components/MovieList";
import SearchFilter from "../components/SearchFilter";
import AddMoviesForm from "../components/AddMoviesForm";

function MovieListPage({ movies, setFilteredItems, setSearchQuery, 
    setFilterType, filterType, filteredItems, searchQuery, error, setUpdate}) {
    return(
    <>          
    <AddMoviesForm setUpdate={setUpdate}/>
        
        <SearchFilter movies={movies}
          setFilteredItems={setFilteredItems}
          setSearchQuery={setSearchQuery}
          setFilterType={setFilterType}
          filterType={filterType}/> 

          <MovieList movies={movies}
          filteredItems={filteredItems}
          searchQuery={searchQuery} 
          error={error} 
          setUpdate={setUpdate}/>

    </>  
    )
}

export default MovieListPage;
