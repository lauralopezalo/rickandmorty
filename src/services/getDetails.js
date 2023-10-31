import axios from 'axios';

const getDetails = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data.results)
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener detalles');
  }
}

export default getDetails;
