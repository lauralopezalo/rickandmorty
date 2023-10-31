import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getLocations from "../services/getLocations"

const LocationsList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations()
            .then((response) => {
                setLocations(response.data.results);
                console.log("response.data.results:" + response.data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    return (
        <div className="bg-pink-200 py-10">
            <div className="bg-pink-400 mx-auto max-w-screen-xl">
                {locations.map((location, id) => (
                    <div key={id}>
                        <Link
                            to={`/location/${location.id}`}
                            state={{ url: location.url }}>
                            <div className="border">
                                <div className="p-8" >
                                    <h2>{location.name}</h2>
                                    <p>Type: {location.type}</p>
                                    <p>Dimension: {location.dimension}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div >
    );
}

export default LocationsList;
