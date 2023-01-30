import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [pokemons, setPokemons] = useState(null);

    const GetPokemons = async () => {
        try {
            const { data } = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/"
            );
            setPokemons(data.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetPokemons();
    }, []);

    return (
        <>
            <div className="container d-flex flex-wrap p-5 mt-5">
                {pokemons?.map((pokemon, index) => (
                    <div key={index} className="w-25 border border-1 p-3">
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default App;
