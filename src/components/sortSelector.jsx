import React from "react";
import Select from "react-select";

const SortSelector = ({setSortType}) => {
  const options = [
    {value: "name+1", label: "Name A-Z"},
    {value: "name-1", label: "Name Z-A"},
    {value: "population", label: "Population ⬆"},
  ];
  
  return (
    <Select
      options={options}
      placeholder='Sort By Feature'
      onChange={(e) => setSortType(e.value)}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          minWidth: "200px",
          boxShadow: "hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px",
          borderRadius: "4px",
          marginRight:"auto"
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          background: "hsl(var(--clr-element))",
          border: "none",
          padding: "0.25rem 0.5rem",
        }),

        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "hsl(var(--clr-text),0.7)",
          fontWeight: 600,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          fontSize: "14px",
          color: "hsl(var(--clr-text),0.7)",
          fontWeight: 600,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: "hsl(var(--clr-element))",
        }),

        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? "blueviolet" : "null",
          color: state.isFocused ? "white" : "hsl(var(--clr-text),0.7)",
          fontWeight: 600,
          fontSize: "14px",
        }),
      }}
    />
  );
};

export default SortSelector;
