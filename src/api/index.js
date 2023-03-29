import axios from "axios";

export const getAllCountries = async (pageParam, region, defferedCountry, sortType) => {
  try {
    const url = `https://countriesapi-cso6.onrender.com/v1.0/all/?name=${defferedCountry}&region=${region}&page=${pageParam}&sort=${sortType}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data
  } catch (error) {
    throw error
  }
};

export const getSingleCountry = async ({queryKey}) => {
  const [name] = queryKey
  try {
    const url = `https://countriesapi-cso6.onrender.com/v1.0/name/${name}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data
  } catch (error) {
    throw error
  }
}

export const getBorderCountries = async ({queryKey}) => {
  const [codes] = queryKey
  try {
    const url = `https://countriesapi-cso6.onrender.com/v1.0/alpha?codes=${codes}`
    const response = await axios.get(url);
    const data = response.data
    return data
  } catch (error) {
    throw error
  }
}
getAllCountries()
