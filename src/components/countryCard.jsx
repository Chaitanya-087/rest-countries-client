import React, {memo} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";

const CardContainer = styled.div`
  background-color: hsl(var(--clr-element));
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px;
  height: max-content;
  overflow: hidden;
  position: relative;
`;
const CardBanner = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 180px;
  object-fit: cover;
  transition: all 500ms ease;
  :hover {
    transform: scale(1.1);
  }
`;
const CardBody = styled.div`
  padding: 1.25rem;
`;
const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
const CardDetail = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;
const CardStat = styled.span`
  opacity: 70%;
`;
const IconContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const CountryCard = ({country}) => {
  return (
    <CardContainer>
      <CardBanner src={country.flags.svg} alt={country.flags.alt} />
      <CardBody>
        <CardTitle>{country.name.common}</CardTitle>
        <CardDetail>
          Population: <CardStat>{country.population.toLocaleString()}</CardStat>
        </CardDetail>
        <CardDetail>
          Region: <CardStat>{country.region}</CardStat>
        </CardDetail>
        <CardDetail>
          Capital: <CardStat>{country.capital}</CardStat>
        </CardDetail>
        <IconContainer>
          <Link to={`/${country.name.common}`}>
            <AiOutlineArrowRight />
          </Link>
        </IconContainer>
      </CardBody>
    </CardContainer>
  );
};

export default memo(CountryCard);
