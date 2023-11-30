// This component displays the list of episodes from the Rick and Morty. It includes a search input,
// filter dropdown for seasons, and supports infinite scrolling for paginated results.
// It fetches data using the getData function.

import React, { useEffect, useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import { FilterIcon, SearchIcon, TriangleIcon } from "../../public/icons";
import { Button2, Heading } from "../GlobalStyle";
import TextCard from "../components/TextCard/TextCard";
import useFilterStorage from "../hooks/useFilterStorage";
import getData from "../services/getData";
import { Dropdown, FiltersContainer, Input, InputContainer, Li } from "./StyledFilterMenu";
import { useMediaQuery } from "react-responsive";

const EpisodesList = () => {
	const [episodes, setEpisodes] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [pagesToRead, setPagesToRead] = useState(1);

	const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");
	const [selectedSeason, setSelectedSeason] = useState(localStorage.getItem("selectedSeason") || "");

    const [dataReceived, setDataReceived] = useState(false);

	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);



	// Effect to fetch episodes data
	useEffect(() => {
		getData({
			category: "episodes",
			page: currentPage,
			name: searchTerm,
			season: selectedSeason,
		})
			.then((response) => {
				setEpisodes((prevEpisodes) => {
					if (currentPage > 1) return [...prevEpisodes, ...response.data.results];
					else return response.data.results;
				});
				setPagesToRead(response.data.info.pages);
                setDataReceived(true);
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 404) {
					setEpisodes([]);
					setPagesToRead(0);
					setDataReceived(false);
				} else {
					setDataReceived(false);
				}
			});
	}, [currentPage, searchTerm, selectedSeason]);

	// Save selected filters to local storage
	useFilterStorage("searchTerm", searchTerm);
	useFilterStorage("selectedSeason", selectedSeason);

	const handleSeasonChange = (newSeason) => {
		setSelectedSeason(newSeason);
		setIsOpenSeasonDropdown(!isOpenSeasonDropdown)
	};

	const handleClearFilters = () => {
		localStorage.clear();
		window.location.reload();
	};

	useInfiniteScroll(() => {
		if (currentPage < pagesToRead) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	});


	const isMobile = useMediaQuery({ maxWidth: 640 });
	const buttonText = isMobile ? <FilterIcon /> : "Reset Filters";

	const handleButtonClick = () => {
		if (isMobile) {
			setIsFilterMenuOpen(!isFilterMenuOpen);
		} else {
			handleClearFilters();
		}
	};

	const [isOpenSeasonDropdown, setIsOpenSeasonDropdown] = useState(false);

	return (
		<div className='container p-4 mx-auto lg:my-20 min-h-screen'>
			<Heading>Episodes</Heading>

			<FiltersContainer className='flex sm:grid sm:grid-cols-8 gap-3'>
				<InputContainer className='col-span-6 flex-grow'>
					<Input
						type='text'
						placeholder='Serach by name...'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
					<SearchIcon />
				</InputContainer>

				<Button2 onClick={handleButtonClick} className='col-span-2'>
					{buttonText}
				</Button2>

				{/* Season Dropdown */}
				<Dropdown $isOpen={isOpenSeasonDropdown} className='col-span-8'>
					<ul onClick={() => setIsOpenSeasonDropdown(!isOpenSeasonDropdown)}>
						<span>{selectedSeason ? "Season " + selectedSeason : "All seasons"}</span>
						<TriangleIcon />
					</ul>
					<div>
						<Li onClick={() => handleSeasonChange("")}>All seasons</Li>
						<Li onClick={() => handleSeasonChange("01")}>Season 1</Li>
						<Li onClick={() => handleSeasonChange("02")}>Season 2</Li>
						<Li onClick={() => handleSeasonChange("03")}>Season 3</Li>
						<Li onClick={() => handleSeasonChange("04")}>Season 4</Li>
						<Li onClick={() => handleSeasonChange("05")}>Season 5</Li>
					</div>
				</Dropdown>
			</FiltersContainer>

			{dataReceived ? (
				<div className='mx-auto flex flex-wrap justify-center gap-5 '>
					{episodes.map((episode) => (
						<TextCard
							key={`episode-${episode.id}`}
							id={episode.id}
							endpoint={"episode"}
							name={episode.name}
							air_date={{ "air date": episode.air_date }}
							episode={{ episode: episode.episode }}
						/>
					))}
				</div>
			) : (
				<div>
					<p className='text-2xl font-bold tracking-tight text-mylight sm:text-4xl'>No data has been found</p>
                    <img src='../../public/NoDataReceived.jpg' />
				</div>
			)}
		</div>
	);
};

export default EpisodesList;
