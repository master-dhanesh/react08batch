import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
    const [Movie, setMovie] = useState(null);
    const { id } = useParams();
    console.log(id);

    const getDetails = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US`
            );
            setMovie(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getDetails();
    }, [id]);

    let MovieDetails = "Loading...";

    if (Movie) {
        MovieDetails = (
            <div>
                <h1>{Movie.original_title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                    alt={Movie.poster_path}
                    height={200}
                />
            </div>
        );
    }

    return <div>{MovieDetails}</div>;
};

export default Details;
