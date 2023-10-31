import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EpisodesWithCharacter = (props) => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchEpisodes() {
            const promises = props.episodes.map(async (url) => {
                try {
                    const response = await axios.get(url);
                    return response.data;
                } catch (error) {
                    console.log(error);
                    return;
                }
            });
            const episodes = await Promise.all(promises);
            setEpisodes(episodes);
        }

        fetchEpisodes();
    }, [props.episodes]);

    return (
        <div className="bg-blue-300 mx-auto max-w-screen-xl">
            <h2>Episodes</h2>
            <hr className="border-black" />
            <div className="">
                {episodes.map((episode, id) => (
                    <div key={id} className="border">
                        <Link
                            to={`/episode/${episode.id}`}
                            state={{ url: episode.url }}>
                            <div>
                                <p>Episode {episode.episode}:</p>
                                <p >{episode.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EpisodesWithCharacter;
