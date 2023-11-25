import React, { useEffect, useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

import { FilterIcon, SearchIcon, TriangleIcon, XIcon } from "../../public/icons";
import { Button2, Heading } from "../GlobalStyle";
import { Dropdown, FiltersContainer, Input, InputContainer, Li, MobileDropdown } from "./StyledFilterMenu";

import { useMediaQuery } from "react-responsive";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import useFilterStorage from "../hooks/useFilterStorage";
import getFilters from "../services/getFilters";
import useCharactersData from "../hooks/useCharactersData";

const CharactersList = () => {
	const [statusArray, setStatusArray] = useState([]);
	const [speciesArray, setSpeciesArray] = useState([]);
	const [typeArray, setTypeArray] = useState([]);
	const [genderArray, setGenderArray] = useState([]);

	const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");
	const [selectedStatus, setSelectedStatus] = useState(localStorage.getItem("selectedStatus") || "");
	const [selectedSpecies, setSelectedSpecies] = useState(localStorage.getItem("selectedSpecies") || "");
	const [selectedType, setSelectedType] = useState(localStorage.getItem("selectedType") || "");
	const [selectedGender, setSelectedGender] = useState(localStorage.getItem("selectedGender") || "");

	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

	const { characters, currentPage, pagesToRead, dataReceived, setCurrentPage } = useCharactersData(
		searchTerm,
		selectedStatus,
		selectedSpecies,
		selectedType,
		selectedGender
	);

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
	useFilterStorage("selectedStatus", selectedStatus);
	useFilterStorage("selectedSpecies", selectedSpecies);
	useFilterStorage("selectedType", selectedType);
	useFilterStorage("selectedGender", selectedGender);
	useFilterStorage("searchTerm", searchTerm);

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

	const [isOpenStatusDropdown, setIsOpenStatusDropdown] = useState(false);
	const [isOpenSpeciesDropdown, setIsOpenSpeciesDropdown] = useState(false);
	const [isOpenTypeDropdown, setIsOpenTypeDropdown] = useState(false);
	const [isOpenGenderDropdown, setIsOpenGenderDropdown] = useState(false);


	if (!characters) {
        return (<Spinner />);
    }

	return (
		<div className='container p-4 mx-auto lg:my-20 min-h-screen text-mylight'>
			<Heading>Characters</Heading>

			<FiltersContainer className='flex sm:grid grid-cols-8 gap-3'>
				{/* Search Input */}
				<InputContainer className='col-span-6 flex-grow'>
					<Input
						type='text'
						placeholder='Search by name...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<SearchIcon />
				</InputContainer>

				<Button2 onClick={handleButtonClick} className='col-span-2'>
					{buttonText}
				</Button2>

				{/* Desktop Filters Dropdowns*/}
				{/* Status Dropdown */}
				<Dropdown $isOpen={isOpenStatusDropdown} className='col-span-4'>
					<ul onClick={() => setIsOpenStatusDropdown(!isOpenStatusDropdown)}>
						<span>{selectedStatus ? selectedStatus : "All status"}</span>
						<TriangleIcon />
					</ul>
					<div>
						<Li
							onClick={() => {
								setSelectedStatus("");
								setIsOpenStatusDropdown(!isOpenStatusDropdown);
							}}>
							All status
						</Li>
						{statusArray.map((status, index) => (
							<Li
								key={index}
								onClick={() => {
									setSelectedStatus(status);
									setIsOpenStatusDropdown(!isOpenStatusDropdown);
								}}>
								{status}
							</Li>
						))}
					</div>
				</Dropdown>

				{/* Species Dropdown */}
				<Dropdown $isOpen={isOpenSpeciesDropdown} className='col-span-4'>
					<ul onClick={() => setIsOpenSpeciesDropdown(!isOpenSpeciesDropdown)}>
						<span>{selectedSpecies ? selectedSpecies : "All species"}</span>
						<TriangleIcon />
					</ul>
					<div>
						<Li
							onClick={() => {
								setSelectedSpecies("");
								setIsOpenSpeciesDropdown(!isOpenSpeciesDropdown);
							}}>
							All species
						</Li>
						{speciesArray.map((specie, index) => (
							<Li
								key={index}
								onClick={() => {
									setSelectedSpecies(specie);
									setIsOpenSpeciesDropdown(!isOpenSpeciesDropdown);
								}}>
								{specie}
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
						<Li
							onClick={() => {
								setSelectedType("");
								setIsOpenTypeDropdown(!isOpenTypeDropdown);
							}}>
							All types
						</Li>
						{typeArray.map((type, index) => (
							<Li
								key={index}
								onClick={() => {
									setSelectedType(type);
									setIsOpenTypeDropdown(!isOpenTypeDropdown);
								}}>
								{type}
							</Li>
						))}
					</div>
				</Dropdown>

				{/* Gender Dropdown */}
				<Dropdown $isOpen={isOpenGenderDropdown} className='col-span-4'>
					<ul onClick={() => setIsOpenGenderDropdown(!isOpenGenderDropdown)}>
						<span>{selectedGender ? selectedGender : "All genres"}</span>
						<TriangleIcon />
					</ul>
					<div>
						<Li
							onClick={() => {
								setSelectedGender("");
								setIsOpenGenderDropdown(!isOpenGenderDropdown);
							}}>
							All genres
						</Li>
						{genderArray.map((gender, index) => (
							<Li
								key={index}
								onClick={() => {
									setSelectedGender(gender);
									setIsOpenGenderDropdown(!isOpenGenderDropdown);
								}}>
								{gender}
							</Li>
						))}
					</div>
				</Dropdown>
			</FiltersContainer>

			{/* Mobile Filters Dropdowns*/}
			<div className='bg-mydark sm:hidden'>
				<div
					className={`py-20 text-right h-screen w-screen bg-mydark z-50 ${
						isFilterMenuOpen ? "fixed top-0 left-0" : "hidden"
					} `}>
					<div onClick={toggleMenu} className='fixed top-5 right-3'>
						<XIcon />
					</div>

					{/* Status Dropdown */}
					<MobileDropdown $isOpen={isOpenStatusDropdown}>
						<ul onClick={() => setIsOpenStatusDropdown(!isOpenStatusDropdown)}>
							<span>{selectedStatus ? selectedStatus : "All status"}</span>
							<TriangleIcon />
						</ul>
						<div>
							<Li
								onClick={() => {
									setSelectedStatus("");
									setIsOpenStatusDropdown(!isOpenStatusDropdown);
								}}>
								All status
							</Li>
							{statusArray.map((status, index) => (
								<Li
									key={index}
									onClick={() => {
										setSelectedStatus(status);
										setIsOpenStatusDropdown(!isOpenStatusDropdown);
									}}>
									{status}
								</Li>
							))}
						</div>
					</MobileDropdown>

					{/* Species Dropdown */}
					<MobileDropdown $isOpen={isOpenSpeciesDropdown}>
						<ul onClick={() => setIsOpenSpeciesDropdown(!isOpenSpeciesDropdown)}>
							<span>{selectedSpecies ? selectedSpecies : "All species"}</span>
							<TriangleIcon />
						</ul>
						<div>
							<Li
								onClick={() => {
									setSelectedSpecies("");
									setIsOpenSpeciesDropdown(!isOpenSpeciesDropdown);
								}}>
								All species
							</Li>
							{speciesArray.map((specie, index) => (
								<Li
									key={index}
									onClick={() => {
										setSelectedSpecies(specie);
										setIsOpenSpeciesDropdown(!isOpenSpeciesDropdown);
									}}>
									{specie}
								</Li>
							))}
						</div>
					</MobileDropdown>

					{/* Type Dropdown */}
					<MobileDropdown $isOpen={isOpenTypeDropdown}>
						<ul onClick={() => setIsOpenTypeDropdown(!isOpenTypeDropdown)}>
							<span>{selectedType ? selectedType : "All types"}</span>
							<TriangleIcon />
						</ul>
						<div>
							<Li
								onClick={() => {
									setSelectedType("");
									setIsOpenTypeDropdown(!isOpenTypeDropdown);
								}}>
								All types
							</Li>
							{typeArray.map((type, index) => (
								<Li
									key={index}
									onClick={() => {
										setSelectedType(type);
										setIsOpenTypeDropdown(!isOpenTypeDropdown);
									}}>
									{type}
								</Li>
							))}
						</div>
					</MobileDropdown>

					{/* Gender Dropdown */}
					<MobileDropdown $isOpen={isOpenGenderDropdown}>
						<ul onClick={() => setIsOpenGenderDropdown(!isOpenGenderDropdown)}>
							<span>{selectedGender ? selectedGender : "All genres"}</span>
							<TriangleIcon />
						</ul>
						<div>
							<Li
								onClick={() => {
									setSelectedGender("");
									setIsOpenGenderDropdown(!isOpenGenderDropdown);
								}}>
								All genres
							</Li>
							{genderArray.map((gender, index) => (
								<Li
									key={index}
									onClick={() => {
										setSelectedGender(gender);
										setIsOpenGenderDropdown(!isOpenGenderDropdown);
									}}>
									{gender}
								</Li>
							))}
						</div>
					</MobileDropdown>
					<Button2 onClick={handleClearFilters}>Reset Filters</Button2>
					<Button2 onClick={toggleMenu}>Go</Button2>
				</div>
			</div>

			{dataReceived ? (
				<div className='mx-auto flex flex-wrap justify-center gap-5'>
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
			) : (
				<div>
					<p className='text-2xl font-bold text-mylight sm:text-4xl'>No data has been found</p>
					<img src='../../public/NoDataReceived.jpg' />
				</div>
			)}
		</div>
	);
};

export default CharactersList;
