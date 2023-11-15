import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import getData from "../services/getData";
import getListsInDetails from "../services/getListsInDetails";
import TextCard from "../components/TextCard/TextCard";
import DetailsCard from "../components/DetailsCard/DetailsCard";

const CharacterDetails = () => {

    const [character, setCharacter] = useState(null);
    const { state } = useLocation();
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        getData({ category: "characters", id: state.id })
            .then((response) => { setCharacter(response.data) })
            .catch((error) => { console.log(error) });
    }, [state.id]);



    useEffect(() => {
        if (character && character.episode) {
            getListsInDetails(character.episode)
                .then((response) => { setEpisodes(response) })
                .catch((error) => { console.log(error) });
        }
    }, [character]);


    if (!character) {
        return (<Spinner />);
    }

    return (
        <div className="container p-4 mx-auto min-h-screen">
            <DetailsCard
                name={character.name}
                description={{
                    status: character.status,
                    species: character.species,
                    type: character.type,
                    gender: character.gender,
                    origin: character.origin.name,
                    location: character.location.name
                }}
                image={character.image}
            />
            {character.episode !== 0 && <div className="mx-auto max-w-screen-xl">
            <h1 className="text-lg lg:text-3xl font-bold mt-16 mb-2">Episodes</h1>
            <hr className="border border-black border-t-1 mb-12" />
                <div className="flex flex-row flex-wrap justify-center gap-6">
                    {episodes.map((episode) => (
                        <TextCard
                            key={`episode-${episode.id}`}
                            id={episode.id}
                            endpoint={"episode"}
                            name={episode.name}
                        />
                    ))}
                </div>
            </div>}
        </div>
    );
}

export default CharacterDetails;
