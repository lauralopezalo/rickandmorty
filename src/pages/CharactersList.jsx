import React, { useEffect, useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import getFilters from "../services/GetFilters";
import getData from "../services/getData";
import useFilterStorage from "../hooks/useFilterStorage";
import ProfileCard from "../components/ProfileCard/ProfileCard"



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
                });
        }

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



    useInfiniteScroll(() => {
        if (currentPage < pagesToRead) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    });



    return (
        <div className="bg-green-200 py-10">
            <div className="mb-4">

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 w-full"
                />

                {/* Status Dropdown */}
                <select
                    value={selectedStatus}
                    onChange={(e) => { setSelectedStatus(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2"
                >
                    <option value="">Todos los estados</option>
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
                    className="border p-2"
                >
                    <option value="">Todas las especies</option>
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
                    className="border p-2"
                >
                    <option value="">Todos los tipos</option>
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
                    className="border p-2"
                >
                    <option value="">Todos los generos</option>
                    {genderArray.map((gender, index) => (
                        <option key={index} value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>

            </div>

            {!hasError ?
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 ">

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

                : <div>No se han encontrado datos</div>
            }
        </div >
    );
}

export default CharactersList;
