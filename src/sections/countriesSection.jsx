import React from "react";
import styled from "styled-components";
import { CountryCard } from "../components";

const CountriesWrapper = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: auto;
  gap: 5rem;
  margin: 0 auto;
`;

const CountriesSection = ({filteredCountries}) => {
  return (
    <section>
      <CountriesWrapper>
        {filteredCountries.map((country, _idx) => (
          <CountryCard key={_idx} country={country} />
        ))}
      </CountriesWrapper>
    </section>
  );
};

export default CountriesSection;
