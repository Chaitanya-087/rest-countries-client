import {useQuery} from "@tanstack/react-query";
import React, {useDeferredValue, useMemo, useState} from "react";
import {getCountriesByRegion} from "../api";
import {Features} from "../utils/filterCountries";
import {FilterSection, CountriesSection} from "../sections";
import {Loader, NotFound} from "../components";

const Home = () => {
  const [region, setRegion] = useState("all");
  const [country, setCountry] = useState("");
  const [sortType, setSortType] = useState("");
  const defferedCountry = useDeferredValue(country);

  const queryConfig = useMemo(
    () => ({
      queryKey: ["region", region],
      queryFn: async () => await getCountriesByRegion(region),
    }),
    [region]
  );
  const {data: countries, isLoading} = useQuery(queryConfig, {
    refetchOnWindowFocus: false,
  });

  const filteredCountries = useMemo(() => {
    const data = new Features(countries)
      .filter(defferedCountry)
      .sortBy(sortType);
    return data.countries;
  }, [countries, defferedCountry, sortType]);

  return (
    <React.Fragment>
      <FilterSection
        setRegion={setRegion}
        setCountry={setCountry}
        setSortType={setSortType}
      />
      {isLoading ? (
        <Loader />
      ) : filteredCountries.length === 0 ? (
        <NotFound />
      ) : (
        <CountriesSection filteredCountries={filteredCountries} />
      )}
    </React.Fragment>
  );
};

export default Home;
