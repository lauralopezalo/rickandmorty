import React, { useEffect, useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import getFilters from "../services/GetFilters";
import getData from "../services/getData";
import useFilterStorage from "../hooks/useFilterStorage";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { FiltersContainer, SelectContainer } from "../GlobalStyle";



const CharactersList = () => {

    const [characters, setCharacters] = useState([]);

    const [statusArray, setStatusArray] = useState([])
    const [speciesArray, setSpeciesArray] = useState([])
    const [typeArray, setTypeArray] = useState([])
    const [genderArray, setGenderArray] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [pagesToRead, setPagesToRead] = useState(1);

    const [hasNewSearchOrFilter, setHasNewSearchOrFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
    const [selectedStatus, setSelectedStatus] = useState(localStorage.getItem('selectedStatus') || '');
    const [selectedSpecies, setSelectedSpecies] = useState(localStorage.getItem('selectedSpecies') || '');
    const [selectedType, setSelectedType] = useState(localStorage.getItem('selectedType') || '');
    const [selectedGender, setSelectedGender] = useState(localStorage.getItem('selectedGender') || '');

    const [hasError, setHasError] = useState(false);



    // Effect to fetch locations data
    useEffect(() => {

        if (hasNewSearchOrFilter) {
            setCurrentPage(1);
            setHasNewSearchOrFilter(false);
            setHasError(false);

            getData({
                category: 'characters',
                page: 1,
                name: searchTerm,
                status: selectedStatus,
                species: selectedSpecies,
                type: selectedType,
                gender: selectedGender
            })
                .then((response) => {
                    if (response.data.error) {
                        setHasError(true);
                    } else if (response.data.results.length > 0) {
                        setCharacters(response.data.results);
                        setPagesToRead(response.data.info.pages);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setHasError(true);
                });
        } else {
            getData({
                category: 'characters',
                page: currentPage,
                name: searchTerm,
                status: selectedStatus,
                species: selectedSpecies,
                type: selectedType,
                gender: selectedGender
            })
                .then((response) => {
                    setCharacters((prevCharacters) => {
                        if (currentPage > 1)
                            return [...prevCharacters, ...response.data.results]
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

        console.log("has error=> " + hasError)

    }, [currentPage, searchTerm, selectedStatus, selectedSpecies, selectedType, selectedGender]);



    // Get options for dropdown filters
    useEffect(() => {

        getFilters("character", ["status", "species", "type", "gender"])
            .then((response) => {
                setStatusArray(response.status || []);
                setSpeciesArray(response.species || []);
                setTypeArray(response.type || []);
                setGenderArray(response.gender || []);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);



    // Save selected filters to local storage
    useFilterStorage('selectedStatus', selectedStatus)
    useFilterStorage('selectedSpecies', selectedSpecies)
    useFilterStorage('selectedType', selectedType)
    useFilterStorage('selectedGender', selectedGender)
    useFilterStorage('searchTerm', searchTerm)

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
            <h1 className="text-3xl lg:text-6xl text-center font-black mt-8 mb-4 lg:mt-16 lg:mb-12">Characters</h1>
            <FiltersContainer >

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SelectContainer>
                    {/* Status Dropdown */}
                    <select
                        value={selectedStatus}
                        onChange={(e) => { setSelectedStatus(e.target.value); setHasNewSearchOrFilter(true) }}
                    >
                        <option value="">All status</option>
                        {statusArray.map((status, index) => (
                            <option key={index} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>

                    {/* Species Dropdown */}
                    <select
                        value={selectedSpecies}
                        onChange={(e) => { setSelectedSpecies(e.target.value); setHasNewSearchOrFilter(true) }}
                    >
                        <option value="">All species</option>
                        {speciesArray.map((species, index) => (
                            <option key={index} value={species}>
                                {species}
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

                    {/* Gender Dropdown */}
                    <select
                        value={selectedGender}
                        onChange={(e) => { setSelectedGender(e.target.value); setHasNewSearchOrFilter(true) }}
                    >
                        <option value="">All genres</option>
                        {genderArray.map((gender, index) => (
                            <option key={index} value={gender}>
                                {gender}
                            </option>
                        ))}
                    </select>
                </SelectContainer>
                <button onClick={handleClearFilters}>Reset Filters</button>
            </FiltersContainer>

            {!hasError ?
                <div className="container">
                    <div className="flex flex-wrap justify-center md:justify-between gap-4 ">

                        {characters.map((character) => (
                            <ProfileCard
                                key={`character-${character.id}`}
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                status={character.status}
                                location={character.location.name}
                                gender={character.gender}
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

export default CharactersList;
