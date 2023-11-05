// This component displays the list of episodes from the Rick and Morty. It includes a search input,
// filter dropdown for seasons, and supports infinite scrolling for paginated results.
// It fetches data using the getData function.

import React, { useEffect, useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import getData from "../services/getData";
import useFilterStorage from "../hooks/useFilterStorage";
import OnlyTextCard from "../components/OnlyTextCard/OnlyTextCard";
import { FiltersContainer, SelectContainer } from "../GlobalStyle";



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
                    setHasError(true);
                });
        }

    }, [currentPage, searchTerm, selectedSeason]);



    // Save selected filters to local storage
    useFilterStorage('searchTerm', searchTerm)
    useFilterStorage('selectedSeason', selectedSeason)

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
            <h1 className="text-3xl lg:text-6xl text-center font-black mt-8 mb-4 lg:mt-16 lg:mb-12">Episodes</h1>

            <FiltersContainer>
                <input
                    type="text"
                    placeholder="Serach by name..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setHasNewSearchOrFilter(true) }}
                />
                <SelectContainer>
                    {/* Season Dropdown */}
                    <select
                        value={selectedSeason}
                        onChange={(e) => { setSelectedSeason(e.target.value); setHasNewSearchOrFilter(true) }}
                    >
                        {/* TODO Select number of seasons automatically */}
                        <option value="">All seasons</option>
                        <option value={"s01"}>Season 1</option>
                        <option value={"s02"}>Season 2</option>
                        <option value={"s03"}>Season 3</option>
                        <option value={"s04"}>Season 4</option>
                        <option value={"s05"}>Season 5</option>
                    </select>
                </SelectContainer>
                <button onClick={handleClearFilters} className="btn">Reset Filters</button>
            </FiltersContainer>

            {!hasError ?
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center md:justify-between gap-4 ">
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
                : <div>
                <p className="text-2xl font-bold tracking-tight text-mywhite sm:text-4xl">
                    No data has been found
                </p>
            </div>
            }
        </div >

    );
}

export default EpisodesList;
