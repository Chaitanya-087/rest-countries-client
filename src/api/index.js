import axios from "axios";

export const getCountriesByRegion = async (region) => {
  try {
    const url = region === 'all' ? `https://restcountries.com/v3.1/all` : `https://restcountries.com/v3.1/region/${region}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data
  } catch (error) {
    throw error
  }
};

export const getSingleCountry = async (name) => {
  try {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    const response = await axios.get(url);
    const data = await response.data;
    return data[0]
  } catch (error) {
    throw error
  }
}

export const getBorderCountries = async (codes) => {
  try {
    const url = `https://restcountries.com/v3.1/alpha?codes=${codes}`
    const response = await axios.get(url);
    const data = response.data
    return data
  } catch (error) {
    throw error
  }
}

