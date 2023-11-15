import { useEffect, useState } from "react";
import getData from "../services/getData";

const useCharactersData = (searchTerm, selectedStatus, selectedSpecies, selectedType, selectedGender) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToRead, setPagesToRead] = useState(1);
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    getData({
      category: "characters",
      page: currentPage,
      name: searchTerm,
      status: selectedStatus,
      species: selectedSpecies,
      type: selectedType,
      gender: selectedGender,
    })
      .then((response) => {
        setCharacters((prevCharacters) => {
          if (currentPage > 1) return [...prevCharacters, ...response.data.results];
          else return response.data.results;
        });
        setPagesToRead(response.data.info.pages);
        setDataReceived(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 404) {
          setCharacters([]);
          setPagesToRead(0);
          setDataReceived(false);
        } else {
          setDataReceived(false);
        }
      });
  }, [currentPage, searchTerm, selectedStatus, selectedSpecies, selectedType, selectedGender]);

  return { characters, currentPage, pagesToRead, dataReceived, setCurrentPage };
};

export default useCharactersData;
