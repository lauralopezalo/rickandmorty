import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getEpisodes from "../services/getEpisodes";

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        getEpisodes()
            .then((response) => {
                setEpisodes(response.data.results);
                console.log("response.data.results:" + response.data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    return (
        <>
            <div className="bg-blue-200 py-10">
                <div className="bg-blue-400 mx-auto max-w-screen-xl">
                    {episodes.map((episode, id) => (
                        <div key={id}>
                            <Link
                                to={`/episode/${episode.id}`}
                                state={{ url: episode.url }}>
                                <div className="border">
                                    <div className="p-8" >
                                        <h2 >{episode.name}</h2>
                                        <p >episode: {episode.episode}</p>
                                        <p >air_date: {episode.air_date}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}

export default EpisodesList;
