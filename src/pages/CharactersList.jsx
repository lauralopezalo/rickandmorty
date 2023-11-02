import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import getFilters from "../services/GetFilters";
import getData from "../services/getData";



const CharactersList = () => {
    
    const [characters, setCharacters] = useState([]);

    const [statusArray, setStatusArray] = useState([])
    const [speciesArray, setSpeciesArray] = useState([])
    const [typeArray, setTypeArray] = useState([])
    const [genderArray, setGenderArray] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [pagesToRead, setPagesToRead] = useState(1);

    const [hasNewSearchOrFilter, setHasNewSearchOrFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

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
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {characters.map((character, id) => (
                            <div key={id}>
                                <Link
                                    to={`/character/${character.id}`}
                                    state={{ url: character.url }}>
                                    <div className="flex md:block"
                                    >
                                        <img
                                            alt={`${character.name}`}
                                            src={character.image}
                                            className="h-36 w-36 md:w-full md:h-64 object-cover"
                                        />
                                        <div>
                                            <h2>{character.name}</h2>
                                            <p>
                                                Status: {character.status}
                                            </p>
                                            <p>
                                                Location: {character.location.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                : <div>No se han encontrado datos</div>
            }
        </div >
    );
}

export default CharactersList;
