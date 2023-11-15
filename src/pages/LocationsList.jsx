// This component displays a list of locations from the Rick and Morty universe. It includes a search input,
// filter dropdowns for dimensions and types, and supports infinite scrolling for paginated results.
// It fetches data using the getData function and retrieves filter options using the getFilters function.

import React, { useEffect, useState } from "react";

import getData from "../services/getData";
import getFilters from "../services/getFilters";

import TextCard from "../components/TextCard/TextCard";
import useFilterStorage from "../hooks/useFilterStorage";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import { FilterIcon, SearchIcon, TriangleIcon } from "../../public/icons";
import { Button, Heading } from "../GlobalStyle";
import { Dropdown, FiltersContainer, Input, InputContainer, Li } from "./StyledFilterMenu";
import { useMediaQuery } from "react-responsive";

const LocationsList = () => {
	const [locations, setLocations] = useState([]);
	const [dimensionArray, setDimensionArray] = useState([]);
	const [typeArray, setTypeArray] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [pagesToRead, setPagesToRead] = useState(1);

	const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");
	const [selectedDimension, setSelectedDimension] = useState(localStorage.getItem("selectedDimension") || "");
	const [selectedType, setSelectedType] = useState(localStorage.getItem("selectedType") || "");

	const [dataReceived, setDataReceived] = useState(false);

	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);


	// Effect to fetch locations data
	useEffect(() => {
		getData({
			category: "locations",
			page: currentPage,
			name: searchTerm,
			dimension: selectedDimension,
			type: selectedType,
		})
			.then((response) => {
				setLocations((prevLocations) => {
					if (currentPage > 1) return [...prevLocations, ...response.data.results];
					else return response.data.results;
				});
				setPagesToRead(response.data.info.pages);
				setDataReceived(true);
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 404) {
					setLocations([]);
					setPagesToRead(0);
					setDataReceived(false);
				} else {
					setDataReceived(false);
				}
			});
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
	useFilterStorage("searchTerm", searchTerm);
	useFilterStorage("selectedDimension", selectedDimension);
	useFilterStorage("selectedType", selectedType);

	const handleClearFilters = () => {
		localStorage.clear();
		window.location.reload();
	};

	useInfiniteScroll(() => {
		if (currentPage < pagesToRead) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	});


	const toggleMenu = () => {
		setIsFilterMenuOpen(!isFilterMenuOpen);
	};
	
	const isMobile = useMediaQuery({ maxWidth: 640 });
	const buttonText = isMobile ? <FilterIcon /> : "Reset Filters";

	const handleButtonClick = () => {
		if (isMobile) {
			setIsFilterMenuOpen(!isFilterMenuOpen);
		} else {
			handleClearFilters();
		}
	};

	const [isOpenDimensionDropdown, setIsOpenDimensionDropdown] = useState(false);
	const [isOpenTypeDropdown, setIsOpenTypeDropdown] = useState(false);

	return (
		<div className='container p-4 mx-auto lg:my-20 min-h-screen'>
			<Heading>Locations</Heading>

			<FiltersContainer className='flex sm:grid sm:grid-cols-8 gap-3'>
				{/* Search Input */}
				<InputContainer className='col-span-6 flex-grow'>
					<Input
						type='text'
						placeholder='Search by name...'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
					<SearchIcon />
				</InputContainer>

				<Button onClick={handleButtonClick} className='col-span-2'>
					{buttonText}
				</Button>

				{/* Dimension Dropdown */}
				<Dropdown $isOpen={isOpenDimensionDropdown} className='col-span-4'>
					<ul onClick={() => setIsOpenDimensionDropdown(!isOpenDimensionDropdown)}>
						<span>{selectedDimension ? selectedDimension : "All dimensions"}</span>
						<TriangleIcon />
					</ul>
					<div>
						<Li
							onClick={() => {
								setSelectedDimension(""), setIsOpenDimensionDropdown(!isOpenDimensionDropdown);
							}}>
							All dimensions
						</Li>
						{dimensionArray.map((dimension, index) => (
							<Li
								key={index}
								onClick={() => {
									setSelectedDimension(dimension),
										setIsOpenDimensionDropdown(!isOpenDimensionDropdown);
								}}>
								{dimension}
							</Li>
						))}
					</div>
				</Dropdown>

				{/* Type Dropdown */}
				<Dropdown $isOpen={isOpenTypeDropdown} className='col-span-4'>
					<ul onClick={() => setIsOpenTypeDropdown(!isOpenTypeDropdown)}>
						<span>{selectedType ? selectedType : "All types"}</span>
						<TriangleIcon />
					</ul>
					<div>
						<Li onClick={() => {
								setSelectedType("");
								setIsOpenTypeDropdown(!isOpenTypeDropdown);
							}}>All types</Li>
						{typeArray.map((type, index) => (
							<Li key={index} onClick={() => {
								setSelectedType(type);
								setIsOpenTypeDropdown(!isOpenTypeDropdown);
							}}>
								{type}
							</Li>
						))}
					</div>
				</Dropdown>

			</FiltersContainer>

			{dataReceived ? (
				<div className='mx-auto flex flex-wrap justify-center gap-5 '>
					{locations.map((location) => (
						<TextCard
							key={`location-${location.id}`}
							endpoint={"location"}
							id={location.id}
							name={location.name}
							type={{ type: location.type }}
							dimension={{ dimension: location.dimension }}
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

export default LocationsList;
