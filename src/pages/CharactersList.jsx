import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getCharacters from "../services/getCharacters";

const StarshipsList = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getCharacters(page)
            .then((response) => {
                setCharacters((prevCharacters) => [...prevCharacters, ...response.data.results]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);


    useEffect(() => {
        getCharacters(page)
            .then((response) => {
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom) {
            setPage((prevPage) => prevPage + 1);
        }
    };


    return (
        <>
            <div className="bg-green-200 py-10">
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {characters.map((character, id) => (
                            <div key={id}>
                                <Link
                                    to={`/character/${character.id}`}
                                    state={{ url: character.url }}>
                                    <div className="flex md:block"
                                    >
                                        <img
                                            alt={`${character.name}`}
                                            src={character.image}
                                            className="h-36 w-36 md:w-full md:h-64 object-cover"
                                        />
                                        <div>
                                            <h2>{character.name}</h2>
                                            <p>
                                                Status: {character.status}
                                            </p>
                                            <p>
                                                Location: {character.location.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}

export default StarshipsList;
