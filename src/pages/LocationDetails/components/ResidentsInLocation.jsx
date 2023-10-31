import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ResidentsInLocation = (props) => {
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const promises = props.residents.map(async (url) => {
                try {
                    const response = await axios.get(url);
                    return response.data;
                } catch (error) {
                    console.log(error);
                    return;
                }
            });
            const residents = await Promise.all(promises);
            setResidents(residents);
        }

        fetchCharacters();
    }, [props.episodes]);



    return (
        <div className="bg-blue-300 mx-auto max-w-screen-xl py-10">
            <h2 >Residents</h2>
            <hr className="border-black" />
            <div className="flex flex-wrap gap-5">
                {residents.map((resident, id) => (
                    <div key={id} className="border">
                        <Link
                            to={`/character/${resident.id}`}
                            state={{ url: resident.url }}>
                            <img
                                alt={`${resident.name}`}
                                src={resident.image}
                                className="h-36 w-36 md:w-full md:h-64 object-cover"
                            />
                            <div>
                                <p>{resident.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResidentsInLocation;
