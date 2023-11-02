import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EpisodeListInDetails  from "../../components/EpisodeListInDetails";
import Spinner from "../../components/Spinner";
import getData from "../../services/getData";

const CharacterDetails = () => {

    const [character, setCharacter] = useState(null);
    const { state } = useLocation();

    useEffect(() => {
        getData({category: "characters", id: state.id})
            .then((response) => { setCharacter(response.data) })
            .catch((error) => { console.log(error) });
            console.log(state.id)
            console.log(character)
    }, [state.id]);


    if (!character) {
        return (<Spinner />); 
    }

    return (
        <div className="bg-green-200 py-10">
            <div className="mx-auto max-w-screen-xl">
                <div className="bg-green-400 sm:grid sm:grid-cols-2 border">
                    <img
                       alt={`${character.name}`}
                       src={character.image}
                        className="h-full object-cover" />
                    <div className="bg-green-600">
                        <div >
                            <h2>
                                {character.name}
                            </h2>
                            <p>Status: </p>
                            <p>{character.status}</p>
                            <p>Species:</p>
                            <p>{character.species}</p>
                            <p>Type:</p>
                            <p>{character.type}</p>
                            <p>Gender:</p>
                            <p>{character.gender}</p>
                            <p>Origin:</p>
                            <p>{character.origin.name}</p>
                            <p>Location:</p>
                            <p>{character.location.name}</p>
                        </div>
                    </div>

                </div>
            </div>
            {character.episode !== 0 && <EpisodeListInDetails episodes={character.episode} />}
        </div>
    );
}

export default CharacterDetails;
