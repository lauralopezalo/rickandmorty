import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharactersInEpisode = (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharactersInEpisode() {
            const promises = props.characters.map(async (url) => {
                try {
                    const response = await axios.get(url);
                    return response.data;
                } catch (error) {
                    console.log(error);
                    return;
                }
            });
            const character = await Promise.all(promises);
            setCharacters(character);
        }

        fetchCharactersInEpisode();
    }, [props.characters]);



    return (
        <div className="bg-blue-300 mx-auto max-w-screen-xl">
            <h2 className="font-bold text-xl">Characters</h2>
            <hr className="border-black" />
            <div className="flex flex-wrap gap-5">
                {characters.map((character, id) => (
                    <div key={id} className="border">
                        <Link
                            to={`/character/${character.id}`}
                            state={{ url: character.url }}>
                            <img
                                alt={`${character.name}`}
                                src={character.image}
                                className="h-36 w-36 md:w-full md:h-64 object-cover"
                            />
                            <div>
                                <p>{character.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharactersInEpisode;
