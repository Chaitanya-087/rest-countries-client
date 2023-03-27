import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import { SortSelector,RegionSelector } from "../components";

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 1.25rem;
  gap: 10px;
  background-color: hsl(var(--clr-element));
  border-radius: 4px;
  box-shadow: hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px;
`;

const Input = styled.input`
  all: unset;
  font-weight: 600;
  ::placeholder {
    color: hsl(var(--clr-text), 0.7);
    font-size: 14px;
  }
`;

const FilterSection = ({setRegion,setCountry,setSortType}) => {
  return (
    <section>
        <FilterContainer>
          <SearchContainer>
            <AiOutlineSearch size={18} />
            <Input type='text' placeholder='Search for a country...' onChange={(e) => setCountry(e.target.value)} />
          </SearchContainer>
          <SortSelector setSortType={setSortType}/>
          <RegionSelector setRegion={setRegion}/>
        </FilterContainer>
    </section>
  );
};

export default FilterSection;
