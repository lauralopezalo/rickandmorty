// This component displays a list of elements (not used for display characters) in Detail View Interfaces.


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getListsInDetails from "../services/getListsInDetails";


const EpisodeListInDetails = (props) => {
   
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        getListsInDetails(props.episodes)
            .then((response) => { setEpisodes(response) })
            .catch((error) => { console.log(error) });
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

export default EpisodeListInDetails;
