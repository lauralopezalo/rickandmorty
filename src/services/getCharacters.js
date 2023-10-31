import axios from 'axios';

const getCharacters = async (page) => {
  try {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const response = await axios.get(url);
    console.log(response.data.results)
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getCharacters;
