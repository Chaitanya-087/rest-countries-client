import React, {useState} from "react";
import styled from "styled-components";
import change from "../utils/changeTheme";
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md";

const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  top: 0;
  padding: 1rem 5vw;
  background-color: hsl(var(--clr-element));
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: hsl(var(--clr-text));
  box-shadow: hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px;
`;

const HeaderTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const ThemeToggler = styled.div`
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: hsl(var(--clr-text), 0.75);
  cursor: pointer;
`;

const ThemeText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode((prevMode) => !prevMode);
    change(newTheme);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <ThemeToggler onClick={toggleTheme} className='bg'>
        {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        <ThemeText>{isDarkMode ? "Dark Mode" : "Light Mode"}</ThemeText>
      </ThemeToggler>
    </HeaderContainer>
  );
};

export default Navbar;
