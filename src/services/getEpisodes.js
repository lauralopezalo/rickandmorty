import axios from 'axios';

const getEpisodes = async () => {
  try {
    const url = `https://rickandmortyapi.com/api/episode`;
    const response = await axios.get(url);
    console.log(response.data.results)
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener episodios');
  }
}

export default getEpisodes;
