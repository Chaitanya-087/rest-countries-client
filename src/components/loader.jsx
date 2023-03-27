import React from 'react'
import styled from 'styled-components';
import {InfinitySpin} from 'react-loader-spinner';

const LoaderContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const loader = () => {
  return (
  <LoaderContainer>
    <InfinitySpin width='100' color='hsl(var(--clr-text))' />
  </LoaderContainer>
  )
}

export default loader
