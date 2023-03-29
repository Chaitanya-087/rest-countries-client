import {useInfiniteQuery} from "@tanstack/react-query";
import {InView} from "react-intersection-observer";
import React, {Fragment,useState} from "react";
import styled from "styled-components";
import {useUIDSeed} from "react-uid";

import {getAllCountries} from "../api";
import {FilterSection} from "../sections";
import {Loader, NotFound, CountryCard} from "../components";

const CountriesWrapper = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: auto;
  gap: 5rem;
  margin: 0 auto;
`;

const Home = () => {
  const seed = useUIDSeed();
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [sortType, setSortType] = useState("");

  const {data,isFetching, isFetched, hasNextPage, fetchNextPage} =
    useInfiniteQuery(
      [region,country, sortType],
      ({pageParam = 1}) =>
        getAllCountries(pageParam, region, country, sortType),
      {
        getNextPageParam: (page) =>
          page.has_next ? page.current_page + 1 : undefined,
        refetchOnWindowFocus: false,
      }
    );

  return (
    <React.Fragment>
      <FilterSection
        setRegion={setRegion}
        setCountry={setCountry}
        setSortType={setSortType}
      />
      {isFetched && (
        <section>
          {!data.pages[0].current_total && <NotFound name={country}/>}
          <CountriesWrapper>
            {data.pages.map((page) => (
              <Fragment key={seed(page)}>
                {page.countries.map((country) => (
                  <CountryCard key={country._id} country={country} />
                ))}
              </Fragment>
            ))}
          </CountriesWrapper>
        </section>
      )}
      <InView
        as='div'
        className='in_view'
        onChange={(inView) => {
          if (inView && hasNextPage) {
            fetchNextPage();
          }
        }}>
        {isFetching && <Loader />}
      </InView>
    </React.Fragment>
  );
};

export default Home;
