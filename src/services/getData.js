import axios from 'axios';


/**
 * This function fetches and filters data from the Rick and Morty API based on specified category and characteristics.
 *
 * @param {Object} options - An object containing options for fetching data.
 * @param {string} options.category - The type of data to retrieve (e.g., 'characters', 'locations', 'episodes').
 * @param {number} options.page - The page number for paginated results (optional).
 * @param {number} options.id - The ID of the specific item to retrieve (optional).
 * @param {string} options.name - The name of the item to filter by (optional).
 * @param {string} options.status - The status of characters to filter by (optional).
 * @param {string} options.species - The species of characters to filter by (optional).
 * @param {string} options.gender - The gender of characters to filter by (optional).
 * @param {string} options.dimension - The dimension of locations to filter by (optional).
 * @param {string} options.type - The type of characters or locations to filter by (optional).
 * @param {string} options.season - The season of episodes to filter by (optional).
 * 
 * @returns {Promise} A Promise that resolves to the response from the API.
 *                  The response contains the data fetched from the API, including filtered results based on provided options.
 * 
 * @throws {Error} Throws an error if there is an issue fetching the data or if an invalid category is provided.
 */
 
const getData = async ({ category, page, id, name, status, species, gender, dimension, type, season }) => {

    try {
        let url = `https://rickandmortyapi.com/api/`;

        switch (category) {
            case 'characters':
                url += `character`;
                if (page) { url += `?page=${page}` }
                if (id) { url += `/${id}` }
                if (name) { url += `&name=${name}` }
                if (status) { url += `&status=${status}` }
                if (species) { url += `&species=${species}` }
                if (type) { url += `&type=${type}` }
                if (gender) { url += `&gender=${gender}` }
                break;

            case 'locations':
                url += `location`;
                if (page) { url += `?page=${page}` }
                if (id) { url += `/${id}` }
                if (name) { url += `&name=${name}` }
                if (dimension) { url += `&dimension=${dimension}` }
                if (type) { url += `&type=${type}` }
                break;

            case 'episodes':
                url += `episode`;
                if (page) { url += `?page=${page}` }
                if (id) { url += `/${id}` }
                if (name) { url += `&name=${name}` }
                if (season) { url += `&episode=${season}` }
                break;

            default:
                throw new Error('Invalid category, must be: characters/locations/episodes');
        }

        console.log("page=>" + page)
        const response = await axios.get(url);
        console.log("response=>" + response)
        return response;

    } catch (error) {
        console.error(error);
        throw new Error('No data found');
    }

}

export default getData;
