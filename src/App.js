import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
    const [Movies, setMovies] = useState([]);
    const getPopularMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1"
            );
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    let MovieList = "Loading...";
    if (Movies.length > 0) {
        MovieList = Movies.map((m) => (
            <li key={m.id}>
                <Link to={`/details/${m.id}`}>{m.original_title}</Link>
            </li>
        ));
    }

    return (
        <div>
            {MovieList}
            <hr />
            <Routes>
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </div>
    );
};

export default App;
