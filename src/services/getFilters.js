// This function retrieves the different characteristics of a specified category 
// that can be used for filtering results and populating filter drop-down menus.
// Parameters:
//   - category: The type of data to retrieve (e.g., 'location', 'character', 'episode').
//   - characteristics: An array of characteristics to filter (e.g., ['dimension', 'type']).


import axios from 'axios';



const getFilters = async (category, characteristics) => {

  const url = `https://rickandmortyapi.com/api/${category}`;
  const filterCharacteristics = {};

  try {
    const response = await axios.get(url);
    const pagesToRead = response.data.info.pages;

    for (let currentPage = 1; currentPage <= pagesToRead; currentPage++) {
      const pageResponse = await axios.get(`${url}?page=${currentPage}`);

      pageResponse.data.results.forEach((element) => {
        characteristics.forEach((characteristic) => {
          if (element[characteristic]) {
            if (!filterCharacteristics[characteristic]) {
              filterCharacteristics[characteristic] = [];
            }
            filterCharacteristics[characteristic].push(element[characteristic]);
          }
        });
      });
    }

    for (const key in filterCharacteristics) {
      filterCharacteristics[key] = Array.from(new Set(filterCharacteristics[key])).sort();
    }

    return filterCharacteristics;

  } catch (error) {
    throw new Error('Error fetching filters');
  }

}


export default getFilters;
