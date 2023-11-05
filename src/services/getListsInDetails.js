import axios from "axios";

/**
 * This function takes an array of character URLs and asynchronously fetches the details
 * for each character using Axios. It returns a Promise that resolves to an array of character objects.
 *
 * @param {Array} urlsOfCharacters - An array of characters URLs.
 * @returns {Promise} A Promise that resolves to an array of character objetcs.
 */

const getListsInDetails = async (urlsOfCharacters) => {
    const promises = urlsOfCharacters.map(async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
            return;
        }
    });

    const characters = await Promise.all(promises);
    return characters;
}


export default getListsInDetails