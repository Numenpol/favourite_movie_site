import Header from "../src/components/Header";
import { useState, useEffect } from "react";
import { getAllData } from "./services/get";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("title");
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    try {
      const response = await getAllData();
      setMovies(response);
    } catch (error) {
      if (error.message == "Request failed with status code 401") {
        setError("Login to view the movie list")
      } else
      setError(error.message);
    };
  };

  useEffect(() => {
    fetchData()
  }, [update])


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LoginPage setShow={setShow} show={show}/>} />
        <Route path="/movielist" element={<MovieListPage movies={movies} 
          setFilteredItems={setFilteredItems}
          setSearchQuery={setSearchQuery} 
          setFilterType={setFilterType}
          filterType={filterType} 
          filteredItems={filteredItems} 
          searchQuery={searchQuery}
          error={error}
          setUpdate={setUpdate}/>}>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

    </>
  )
}

//mongodb+srv://johnny123:babayaga@someserver.svowtuy.mongodb.net/


export default App
