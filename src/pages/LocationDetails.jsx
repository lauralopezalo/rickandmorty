import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import getData from "../services/getData";

import CharactersListInDetails from "../components/CharactersListInDetails";
import Spinner from "../components/Spinner";



const LocationDetails = () => {

    const [location, setLocation] = useState(null);
    const { state } = useLocation();


    useEffect(() => {
        getData({category: "locations", id: state.id})
            .then((response) => { setLocation(response.data) })
            .catch((error) => { console.log(error) });
            console.log(state.id)
            console.log(location)
    }, [state.id]);


    if (!location) {
        return (<Spinner />);
    }

    return (
        <div className="bg-pink-200 py-10">
            <div className="mx-auto max-w-screen-xl">
                <div className="border">
                    <div className="">
                        <h2>{location.name}</h2>
                        <p>Type: </p>
                        <p>{location.type}</p>
                        <p>dimension:</p>
                        <p>{location.dimension}</p>
                    </div>
                </div>
            </div>
            {location.residents !== 0 && <CharactersListInDetails urlsOfCharacters={location.residents} />}
        </div>
    );
}

export default LocationDetails;
