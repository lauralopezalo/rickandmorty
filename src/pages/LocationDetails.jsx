import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import getData from "../services/getData";

import CharactersListInDetails from "../components/CharactersListInDetails";
import Spinner from "../components/Spinner";
import DetailsCard from "../components/DetailsCard/DetailsCard";



const LocationDetails = () => {

    const [location, setLocation] = useState(null);
    const { state } = useLocation();


    useEffect(() => {
        getData({ category: "locations", id: state.id })
            .then((response) => { setLocation(response.data) })
            .catch((error) => { console.log(error) });
    }, [state.id]);


    if (!location) {
        return (<Spinner />);
    }

    return (
        <div className="container p-4 mx-auto min-h-screen">

            <DetailsCard
                name={location.name}
                description={{
                    type: location.type,
                    dimension: location.dimension,
                }}
            />
            {location.residents !== 0 && <CharactersListInDetails urlsOfCharacters={location.residents} />}
        </div>
    );
}

export default LocationDetails;
