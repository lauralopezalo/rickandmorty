import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResidentsInLocation from "./components/ResidentsInLocation";
import getDetails from "../../services/getDetails";
import Spinner from "../../components/Spinner";

const LocationDetails = () => {

    const [location, setLocation] = useState(null);
    const { state } = useLocation();

    useEffect(() => {
        getDetails(state.url)
            .then((response) => { setLocation(response.data) })
            .catch((error) => { console.log(error) });

    }, [state]);

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
            {location.residents !== 0 && <ResidentsInLocation residents={location.residents} />}
        </div>
    );
}

export default LocationDetails;
