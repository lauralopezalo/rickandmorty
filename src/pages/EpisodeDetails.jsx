import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CharactersListInDetails from "../components/CharactersListInDetails";
import Spinner from "../components/Spinner";
import getData from "../services/getData";
import DetailsCard from "../components/DetailsCard/DetailsCard";

const EpisodeDetails = () => {

    const [episode, setEpisode] = useState(null);
    const { state } = useLocation();

    useEffect(() => {
        getData({category: "episodes", id: state.id})
            .then((response) => { setEpisode(response.data) })
            .catch((error) => { console.log(error) });
    }, [state.id]);

    if (!episode) {
        return (<Spinner />);
    }

    return (
        <div className="container mx-auto my-20 min-h-screen">
             <DetailsCard
                name={episode.name}
                description={{
                    air_date: episode.air_date,
                    episode: episode.episode,
                }}
            />
            {episode.residents !== 0 && <CharactersListInDetails urlsOfCharacters={episode.characters} />}
        </div>
    );
}

export default EpisodeDetails;
