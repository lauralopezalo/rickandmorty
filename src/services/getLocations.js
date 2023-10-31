import axios from 'axios';

const getLocations = async () => {
  try {
    const url = `https://rickandmortyapi.com/api/location`;
    const response = await axios.get(url);
    console.log(response.data.results)
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener localizaciones');
  }
}

export default getLocations;
