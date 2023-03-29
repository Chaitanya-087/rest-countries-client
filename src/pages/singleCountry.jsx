import React, {Fragment, useMemo} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllCountries, getBorderCountries, getSingleCountry} from "../api";
import styled from "styled-components";
import {Loader} from "../components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  place-content: center;
  padding-block: 20px;
  gap: 8%;
`;
const Image = styled.img`
  object-fit: contain;
  width: minmax(100%, 300px);
`;

const CountryBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`;
const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
`;
const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Detail = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;
const Stat = styled.span`
  opacity: 70%;
`;
const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-block: 1rem;
`;
const Border = styled.div`
  background-color: hsl(var(--clr-element));
  box-shadow: hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px;
  padding: 4px 6px;
  display: grid;
  place-items: center;
  border-radius: 4px;
`;
const Back = styled.button`
  background-color: hsl(var(--clr-element));
  color: hsl(var(--clr-text));
  margin-block: 1rem 1.75rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  box-shadow: hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px;
`;
const SingleCountry = () => {
  const {name} = useParams();
  const navigate = useNavigate();
  const {
    data: country,
    isLoading,
    isSuccess,
  } = useQuery([name], getSingleCountry, {refetchOnWindowFocus: false});

  const {
    data: borders,
    isFetched: isBordersLoaded,
    isFetching: isBordersLoading
  } = useQuery([country?.borders], getBorderCountries, {enabled: !!country});

  return (
    <section>
      <Back onClick={() => navigate(-1)}>Back</Back>
      {isLoading && <Loader />}
      {isSuccess && (
        <Container>
          <Image src={country.flags.svg} alt={country.flags.alt} />
          <CountryBody>
            <Title>{country.name.common}</Title>
            <DetailsWrapper>
              <Details>
                <Detail>
                  Native Name:{" "}
                  <Stat>
                    {Object.values(country.name.nativeName)[0].official}
                  </Stat>
                </Detail>
                <Detail>
                  Population: <Stat>{country.population.toLocaleString()}</Stat>
                </Detail>
                <Detail>
                  Region: <Stat>{country.region}</Stat>
                </Detail>
                <Detail>
                  Sub Region: <Stat>{country.subregion}</Stat>
                </Detail>
                <Detail>
                  Capital: <Stat>{country.capital}</Stat>
                </Detail>
              </Details>
              <Details>
                <Detail>
                  Top Level Domain: <Stat>{country.tld}</Stat>
                </Detail>
                <Detail>
                  Currency:{" "}
                  <Stat>
                    {Object.values(country.currencies)[0].name} (
                    {Object.values(country.currencies)[0].symbol})
                  </Stat>
                </Detail>
                <Detail>
                  Languages:{" "}
                  <Stat>{Object.values(country.languages).join(", ")}</Stat>
                </Detail>
              </Details>
            </DetailsWrapper>
            <Borders>
              {isBordersLoading && <Loader/>}
              {isBordersLoaded && 
                <Fragment>
                  {borders.countries.length === 0 && <h4>no borders ...</h4>}
                  {borders.countries.map((country, _idx) => (
                    <Border key={_idx}>
                      <Detail>{country.name.common}</Detail>
                    </Border>
                  ))}
                </Fragment>
              }
            </Borders>
          </CountryBody>
        </Container>
      )}
    </section>
  );
};

export default SingleCountry;
