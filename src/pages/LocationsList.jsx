// This component displays a list of locations from the Rick and Morty universe. It includes a search input,
// filter dropdowns for dimensions and types, and supports infinite scrolling for paginated results.
// It fetches data using the getData function and retrieves filter options using the getFilters function.


import React, { useEffect, useState } from "react";

import getFilters from "../services/GetFilters";
import getData from "../services/getData";

import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useFilterStorage from "../hooks/useFilterStorage";
import OnlyTextCard from "../components/OnlyTextCard/OnlyTextCard";

import { FiltersContainer, SelectContainer } from "../GlobalStyle";


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
                    setHasError(true);
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

    const handleClearFilters = () => {
        localStorage.clear();
        setHasNewSearchOrFilter(true);
        refreshPage();
    };

    const refreshPage = () => {
        window.location.reload();
    };


    useInfiniteScroll(() => {
        if (currentPage < pagesToRead) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    });




    return (
        <div className="container p-4 mx-auto lg:my-20 min-h-screen">
            <h1 className="text-3xl lg:text-6xl text-center font-black mt-8 mb-4 lg:mt-16 lg:mb-12">Locations</h1>

            <FiltersContainer>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2 w-full"
                />
                <SelectContainer>
                    {/* Dimension Dropdown */}
                    <select
                        value={selectedDimension}
                        onChange={(e) => { setSelectedDimension(e.target.value); setHasNewSearchOrFilter(true) }}
                    >
                        <option value="">All dimensions</option>
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
                    >
                        <option value="">All types</option>
                        {typeArray.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </SelectContainer>
                <button onClick={handleClearFilters} className="btn">Reset Filters</button>
            </FiltersContainer>

            {!hasError ?
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center md:justify-between gap-4 ">
                        {locations.map((location) => (
                            <OnlyTextCard
                                key={`location-${location.id}`}
                                endpoint={"location"}
                                id={location.id}
                                name={location.name}
                                type={{ "type": location.type }}
                                dimension={{ "dimension": location.dimension }}
                            />
                        ))}
                    </div>
                </div>
                : <div>
                    <p className="text-2xl font-bold tracking-tight text-mywhite sm:text-4xl">
                        No data has been found
                    </p>
                </div>
            }
        </div >
    );
}

export default LocationsList;
