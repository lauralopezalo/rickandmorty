// This component displays a list of locations from the Rick and Morty universe. It includes a search input,
// filter dropdowns for dimensions and types, and supports infinite scrolling for paginated results.
// It fetches data using the getData function and retrieves filter options using the getFilters function.


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import getFilters from "../services/GetFilters";
import getData from "../services/getData";

import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useFilterStorage from "../hooks/useFilterStorage";



const LocationsList = () => {

    const [locations, setLocations] = useState([]);
    const [dimensionArray, setDimensionArray] = useState([])
    const [typeArray, setTypeArray] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [pagesToRead, setPagesToRead] = useState(1);

    const [hasNewSearchOrFilter, setHasNewSearchOrFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
    const [selectedDimension, setSelectedDimension] = useState(localStorage.getItem('selectedDimension') || '');
    const [selectedType, setSelectedType] = useState(localStorage.getItem('selectedType') || '');

    const [hasError, setHasError] = useState(false);



    // Effect to fetch locations data
    useEffect(() => {

        if (hasNewSearchOrFilter) {
            setCurrentPage(1);
            setHasNewSearchOrFilter(false);
            setHasError(false);

            getData({
                category: 'locations',
                page: 1,
                name: searchTerm,
                dimension: selectedDimension,
                type: selectedType,
            })
                .then((response) => {
                    if (response.data.error) {
                        setHasError(true);
                    } else if (response.data.results.length > 0) {
                        setLocations(response.data.results);
                        setPagesToRead(response.data.info.pages);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setHasError(true);
                });
        } else {
            getData({
                category: 'locations',
                page: currentPage,
                name: searchTerm,
                dimension: selectedDimension,
                type: selectedType,
            })
                .then((response) => {
                    setLocations((prevLocations) => {
                        if (currentPage > 1)
                            return [...prevLocations, ...response.data.results]
                        else
                            return response.data.results;
                    });
                    setPagesToRead(response.data.info.pages)
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }, [currentPage, searchTerm, selectedDimension, selectedType]);



    // Get options for dropdown filters
    useEffect(() => {

        getFilters("location", ["dimension", "type"])
            .then((response) => {
                setDimensionArray(response.dimension || []);
                setTypeArray(response.type || []);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);



    // Save selected filters to local storage
    useFilterStorage('searchTerm', searchTerm)
    useFilterStorage('selectedDimension', selectedDimension)
    useFilterStorage('selectedType', selectedType)




    useInfiniteScroll(() => {
        if (currentPage < pagesToRead) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    });




    return (
        <div className="bg-pink-200 py-10">
            <div className="mb-4">

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2 w-full"
                />

                {/* Dimension Dropdown */}
                <select
                    value={selectedDimension}
                    onChange={(e) => { setSelectedDimension(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2"
                >
                    <option value="">Todas las dimensiones</option>
                    {dimensionArray.map((dimension, index) => (
                        <option key={index} value={dimension}>
                            {dimension}
                        </option>
                    ))}
                </select>

                {/* Type Dropdown */}
                <select
                    value={selectedType}
                    onChange={(e) => { setSelectedType(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2"
                >
                    <option value="">Todas los tipos</option>
                    {typeArray.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {!hasError ?
                <div className="bg-pink-400 mx-auto max-w-screen-xl">
                    {/* Render Filtered Locations */}
                    {locations.map((location, id) => (
                        <div key={id}>
                            <Link
                                to={`/location/${location.id}`}
                                state={{ id: location.id }}>
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

                : <div>No se han encontrado datos</div>
            }
        </div >
    );
}

export default LocationsList;
