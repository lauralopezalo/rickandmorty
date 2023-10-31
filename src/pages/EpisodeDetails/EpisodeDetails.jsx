import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CharactersInEpisode from "./components/CharactersInEpisode";
import getDetails from "../../services/getDetails";
import Spinner from "../../components/Spinner";

const EpisodeDetails = () => {

    const [episode, setEpisode] = useState(null);
    const { state } = useLocation();

    useEffect(() => {
        getDetails(state.url)
            .then((response) => { setEpisode(response.data) })
            .catch((error) => { console.log(error) });

    }, [state]);

    if (!episode) {
        return (<Spinner />);
    }

    return (
        <div className="bg-yellow-200 py-10">
            <div className="mx-auto max-w-screen-xl">
                <div className="border">
                    <div className="">
                        <h2>{episode.name}</h2>
                        <p>{episode.episode}</p>
                        <p>{episode.air_date}</p>
                    </div>
                </div>
            </div>
            {episode.residents !== 0 && <CharactersInEpisode characters={episode.characters} />}
        </div>
    );
}

export default EpisodeDetails;
