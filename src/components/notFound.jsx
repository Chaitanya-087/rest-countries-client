import React from "react";
import styled from "styled-components";
import noDataImage from "../assets/No-data-bro2.svg";

const Image = styled.img`
  max-width: 500px;
  align-self: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-inline: 5vw;
`;

const Message = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: ${(props) => (props.bold ? 800 : 300)};
`;

const NotFound = ({name}) => {
  return (
    <ImageContainer>
      <Image src={noDataImage} alt='no data present' />
      <Message bold>
        No such country or countries with name {name} exist
      </Message>
    </ImageContainer>
  );
};

export default NotFound;
