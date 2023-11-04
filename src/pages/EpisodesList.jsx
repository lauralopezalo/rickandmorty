// This component displays the list of episodes from the Rick and Morty. It includes a search input,
// filter dropdown for seasons, and supports infinite scrolling for paginated results.
// It fetches data using the getData function.

import React, { useEffect, useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import getData from "../services/getData";
import useFilterStorage from "../hooks/useFilterStorage";
import OnlyTextCard from "../components/OnlyTextCard/OnlyTextCard";



const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pagesToRead, setPagesToRead] = useState(1);

    const [hasNewSearchOrFilter, setHasNewSearchOrFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
    const [selectedSeason, setSelectedSeason] = useState(localStorage.getItem('selectedSeason') || '');

    const [hasError, setHasError] = useState(false);



    // Effect to fetch episodes data
    useEffect(() => {

        if (hasNewSearchOrFilter) {
            setCurrentPage(1);
            setHasNewSearchOrFilter(false);
            setHasError(false);

            getData({
                category: 'episodes',
                page: 1,
                name: searchTerm,
                season: selectedSeason,
            })
                .then((response) => {
                    if (response.data.error) {
                        setHasError(true);
                    } else if (response.data.results.length > 0) {
                        setEpisodes(response.data.results);
                        setPagesToRead(response.data.info.pages);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setHasError(true);
                });
        } else {
            getData({
                category: 'episodes',
                page: currentPage,
                name: searchTerm,
                episode: selectedSeason,
            })
                .then((response) => {
                    setEpisodes((prevEpisodes) => {
                        if (currentPage > 1)
                            return [...prevEpisodes, ...response.data.results]
                        else
                            return response.data.results;
                    });
                    setPagesToRead(response.data.info.pages)
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }, [currentPage, searchTerm, selectedSeason]);



    // Save selected filters to local storage
    useFilterStorage('searchTerm', searchTerm)
    useFilterStorage('selectedSeason', selectedSeason)



    useInfiniteScroll(() => {
        if (currentPage < pagesToRead) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    });



    return (
        <div className="bg-blue-200 py-10">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2 w-full"
                />

                {/* Season Dropdown */}
                <select
                    value={selectedSeason}
                    onChange={(e) => { setSelectedSeason(e.target.value); setHasNewSearchOrFilter(true) }}
                    className="border p-2"
                >
                    {/* TODO Select number of seasons automatically */}
                    <option value="">Todas las temporadas</option>
                    <option value={"s01"}>Temporada 1</option>
                    <option value={"s02"}>Temporada 2</option>
                    <option value={"s03"}>Temporada 3</option>
                    <option value={"s04"}>Temporada 4</option>
                    <option value={"s05"}>Temporada 5</option>
                </select>
            </div>

            {!hasError ?
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 ">
                        {episodes.map((episode) => (
                            <OnlyTextCard
                                key={`episode-${episode.id}`}
                                id={episode.id}
                                endpoint={"episode"}
                                name={episode.name}
                                air_date={{ "air date": episode.air_date }}
                                episode={{ "episode": episode.episode }}
                            />
                        ))}
                    </div>
                </div>
                : <div>No se han encontrado datos</div>
            }
        </div >

    );
}

export default EpisodesList;
