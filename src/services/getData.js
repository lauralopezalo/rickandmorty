// This function fetches and filters data from the Rick and Morty API based on specified category and characteristics.
// Parameters:
//   - category: The type of data to retrieve (e.g., 'location', 'character', 'episode').
//   - characteristics: An array of characteristics to filter (e.g., ['name', 'status']).


import axios from 'axios';



const getData = async ({ category, page, name, status, species, gender, dimension, type, season }) => {

    try {
        let url = `https://rickandmortyapi.com/api/`;

        switch (category) {
            case 'characters':
                url += `character?page=${page}`;
                if (name) { url += `&name=${name}` }
                if (status) { url += `&status=${status}` }
                if (species) { url += `&species=${species}` }
                if (type) { url += `&type=${type}` }
                if (gender) { url += `&gender=${gender}` }
                break;

            case 'locations':
                url += `location?page=${page}`;
                if (name) { url += `&name=${name}` }
                if (dimension) { url += `&dimension=${dimension}` }
                if (type) { url += `&type=${type}` }
                break;

            case 'episodes':
                url += `episode?page=${page}`;
                if (name) { url += `&name=${name}` }
                if (season) { url += `&episode=${season}` }
                break;

            default:
                throw new Error('Invalid category, must be: characters/locations/episodes');
        }

        console.log("page=>" + page)
        const response = await axios.get(url);
        return response;

    } catch (error) {
        console.error(error);
        throw new Error('No data found');
    }

}

export default getData;
