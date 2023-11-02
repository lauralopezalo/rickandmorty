import axios from 'axios';

/**
 * This function retrieves the different characteristics of a specified category 
 * that can be used for filtering results and populating filter drop-down menus.
 *
 * @param {string} category - The type of data to retrieve (e.g., 'location', 'character', 'episode').
 * @param {Array} characteristics - An array of characteristics to filter (e.g., ['dimension', 'type']).
 * @returns {Promise} A Promise that resolves to an array containing filter characteristics.
 *                   The keys represent the characteristics to filter, and the values are arrays 
 *                   of unique values for each characteristic, sorted in ascending order.
 *                    (e.g. gender: ['Female', 'Genderless', 'Male', 'unknown'])
 *
 * @throws {Error} Throws an error if there is an issue fetching the filters.
 */

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
