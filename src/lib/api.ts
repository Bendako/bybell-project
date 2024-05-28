import axios from 'axios';

const BASE_URL = 'https://bolls.life/get-verse/WLC/1/1/1/';
const YLT_URL = 'https://bolls.life/get-books/YLT/';

export const fetchFirstVerse = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching the verse:', error);
    throw error;
  }
};

export const fetchYLT = async () => {
  try {
    const response = await axios.get(YLT_URL);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching the verse:', error);
    throw error;
  }
};
